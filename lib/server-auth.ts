import { NextApiRequest, NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "./mongodb";

export const getServerAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });
    if (!session?.user?.email) throw new Error('Not signed in');

    const client = await connectToDatabase();
    const db = client.db();

    const currentUser = await db.collection('users').findOne({ email: session.user.email });

    if (!currentUser) throw new Error('Not signed in');

    client.close();
    return { currentUser };
};

//TODO remove this function if not using it
export const checkIfAuthenticated = async (context: NextPageContext) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }
};
