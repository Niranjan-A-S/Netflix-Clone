import { db } from '@/lib/db';
import { IRegisterParams } from '@/types';

export const getUserByEmail = async (email: string) => {
    try {
        return await db.user.findUnique({
            where: {
                email
            }
        });
    } catch (error) {
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        return await db.user.findUnique({
            where: {
                id
            }
        });
    } catch (error) {
        return null;
    }
};

export const createUser = async ({ email, name, password }: IRegisterParams) => {
    try {
        return await db.user.create({
            data: {
                email,
                name,
                password
            }
        });
    } catch (error) {
        return null;
    }
};
