import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { getServerAuth } from "@/lib/server-auth";

export default async function name(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    try {
        await getServerAuth(req);

        const client = await connectToDatabase();
        const db = client.db();

        const movieCount = await db.collection('movies').countDocuments({});
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovie = await db.collection('movies').find().skip(randomIndex).limit(1).toArray();
        res.status(200).json(randomMovie[0]);
        client.close();
        return;
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        //TODO Close the db connection
    }
}