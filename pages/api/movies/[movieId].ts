import { connectToDatabase } from "@/lib/mongodb";
import { getServerAuth } from "@/lib/server-auth";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        await getServerAuth(req);
        const { movieId } = req.query;

        if (!movieId || typeof movieId !== 'string') throw new Error('Invalid Id');

        const client = await connectToDatabase();
        const moviesCollection = client.db().collection('movies');

        const movie = await moviesCollection.findOne({ _id: new ObjectId(movieId) });
        res.status(200).json(movie);
        return client.close();
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}