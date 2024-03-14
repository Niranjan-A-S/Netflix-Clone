'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { ILoginParams } from '@/types';
import { AuthError } from 'next-auth';

export const loginAction = async ({ email, password }: ILoginParams) => {
    if (!email || !password) return {
        message: {
            error: 'Please provide all the required fields!'
        }
    };

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { message: { error: 'Invalid credentials' } };
                default:
                    return { message: { error: 'Something went wrong!' } };
            }
        }
        throw error;
    }

    return {
        message: {
            success: 'User logged in successfully!'
        }
    };
};
