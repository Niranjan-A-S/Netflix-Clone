import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { db } from '@/lib/db';

export const {
    handlers: { GET, POST },
    auth, signIn, signOut
} = NextAuth({
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                const user = await db.user.findUnique({
                    where: {
                        id: token.sub
                    }
                });
                session.user.favoriteIds = user?.favoriteIds;
            }
            return session;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
});
