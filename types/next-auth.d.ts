import { User as UserModal } from '@prisma/client';
import { User } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            favoriteIds?: UserModal['favoriteIds'],
        } & User
    }
}
