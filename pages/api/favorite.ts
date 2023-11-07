import { connectToDatabase } from "@/lib/mongodb";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST' || req.method === 'DELETE') {
            //Here getServerSession is uses since  there is a bug in getSession when used with POST method
            const data = await getServerSession(req, res, authOptions);
            if (!data?.user) {
                return res.status(401).send({
                    message: 'Session not found'
                });
            }
            const currentUser = data?.user;
            const { movieId } = req.body;

            if (!movieId) return res.status(204).send({
                message: 'No movie id provided'
            });

            const client = await connectToDatabase();
            const db = client.db();

            const existingMovie = await db.collection('movies').findOne({
                _id: new ObjectId(movieId)
            });

            if (!existingMovie) throw new Error('Invalid ID');

            if (req.method === 'POST') {
                const user = await db.collection('users').updateOne({
                    email: currentUser?.email
                }, {
                    $push: {
                        favoriteIds: movieId
                    }
                });

                res.status(200).json({
                    message: 'Movie added to favorites',
                    user
                });
            }

            if (req.method === 'DELETE') {
                const user = await db.collection('users').updateOne({
                    email: currentUser?.email
                }, {
                    $pull: {
                        favoriteIds: movieId
                    }
                });

                res.status(200).json({
                    message: 'Movie removed from favorites',
                    user
                });
            }
            client.close();
            return;
        }
        return res.status(405).end();
    }
    catch (error) {
        console.log(error);
        return res.status(400).end();
    }
};