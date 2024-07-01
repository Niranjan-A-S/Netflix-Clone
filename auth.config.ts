import { comparePasswords } from '@/lib/utils/hash';
import { getUserByEmail } from '@/lib/utils/user';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials: any) {
                const { email, password } = credentials;

                const user = await getUserByEmail(email);
                if (!user || !user.password) return null;

                const isPasswordCorrect = await comparePasswords(password, user.password);
                if (!isPasswordCorrect) return null;

                return user;
            }
        })
    ],
    trustHost: true
} satisfies NextAuthConfig;
