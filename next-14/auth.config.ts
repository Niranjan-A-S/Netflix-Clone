import { comparePasswords } from '@/utils/hash';
import { getUserByEmail } from '@/utils/user';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
    providers: [
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
    ]
} satisfies NextAuthConfig;
