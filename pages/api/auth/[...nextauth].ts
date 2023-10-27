import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { compare } from "bcrypt";
import { connectToDatabase } from "@/lib/mongodb";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) { // TODO fix this type error
                if (!credentials?.email || !credentials?.password) throw new Error("Email and password required");

                const client = await connectToDatabase();;
                const db = client.db();

                const user = await db.collection('users').findOne({ email: credentials.email });
                if (!user || !user.password) throw new Error("User not found");

                const isPasswordValid = await compare(credentials.password, user.password);

                if (!isPasswordValid) throw new Error("Invalid password");
                client.close();
                return user;
            }
        }),
    ],
    pages: {
        signIn: "/auth"
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(connectToDatabase())
});