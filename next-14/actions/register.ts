'use server';

import { IRegisterParams } from '@/types';
import { getHashedPassword } from '@/utils/hash';
import { createUser, getUserByEmail } from '@/utils/user';

export const registerAction = async ({ email, name, password }: IRegisterParams) => {
    if (!email || !name || !password) return {
        message: {
            error: 'Please provide all the required fields!'
        }
    };

    const existingUser = await getUserByEmail(email);
    if (existingUser) return {
        message: {
            error: 'User already exists!'
        }
    };

    const hashedPassword = await getHashedPassword(password);

    const user = await createUser({ email, name, password: hashedPassword });
    if (user) return {
        message: {
            success: 'User registered successfully!'
        }
    };

    return {
        message: {
            error: 'Internal server error!'
        }
    };
};
