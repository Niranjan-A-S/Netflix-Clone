import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuth } from "@/lib/server-auth";

export default async function name(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { currentUser } = await getServerAuth(req);
        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}