import { connectToDatabase } from "@/lib/mongodb";
import { getServerAuth } from "@/lib/server-auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        await getServerAuth(req);
        const client = await connectToDatabase();
        const db = client.db();


        const movies = await db.collection('movies').find().toArray();
        res.status(200).json(movies);
        client.close();
        return;
    } catch (error) {
        console.log(error);
        res.status(400).end();

    }
}