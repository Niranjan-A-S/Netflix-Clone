import { User } from '@prisma/client';

declare module 'next-auth' {
    interface Session {
        user: {
            favoriteIds?: User['favoriteIds']
        }
    }
}
