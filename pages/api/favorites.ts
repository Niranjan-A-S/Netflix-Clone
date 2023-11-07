import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuth } from "@/lib/server-auth";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { ObjectIdLike } from "bson";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        const { currentUser } = await getServerAuth(req);
        const client = await connectToDatabase();
        const db = client.db();
        const moviesCollection = db.collection('movies');
        const favoriteIds = currentUser?.favoriteIds;

        const favoriteMovies = await moviesCollection.find({ _id: { $in: favoriteIds?.map((id: string | number | ObjectId | ObjectIdLike | Uint8Array | undefined) => new ObjectId(id)) } }).toArray();

        client.close();
        return res.status(200).json(favoriteMovies);
    }
    catch (error) {
        console.log(error);
        return res.status(400).end();
    }
};