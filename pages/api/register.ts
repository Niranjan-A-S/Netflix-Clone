import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { connectToDatabase, insertDocument } from "@/lib/mongodb";
import { hashPassword } from '@/lib/auth';
import { IUser } from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    const { email, password, username } = req.body;
    if (!email || !password || !username || password.length < 7 || !email.includes("@") || username.trim().length === 0) {
        res.status(422).json({ message: 'Invalid input' });
        return;
    }

    let client: MongoClient;
    try {
        client = await connectToDatabase();
        const db = client.db();

        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            res.status(422).json({ message: 'Email Taken!' });
            client.close();
            return;
        }

        const hashedPassword = await hashPassword(password);
        const newUser: IUser = {
            email,
            password: hashedPassword,
            name: username,
            image: '',
            emailVerified: new Date(),
        };

        await insertDocument(db, 'users', newUser);
        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
        client.close();
        return;
    } catch (error: any) {
        res.status(500).json({ message: error.message || 'Could not register user' });
        //TODO Close the db connection
    }
}