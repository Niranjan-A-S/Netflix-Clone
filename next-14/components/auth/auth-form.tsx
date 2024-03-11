'use client';

import { AuthFormLayout } from '@/components/auth/auth-form-layout';
import { Input } from '@/components/auth/input';
import { defaultFormState } from '@/constants';
import { useForm } from '@/hooks/use-form';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback } from 'react';

export const AuthForm: FC = memo(() => {
    const router = useRouter();
    const { onChange, state: { email, name, password }, toggleVariant, variant } = useForm<typeof defaultFormState>(defaultFormState);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/profiles');
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        <AuthFormLayout>
            <form onSubmit={variant === 'login' ? login : register}>
                <h2 className="text-white text-4xl mb-8 font-semibold">
                    {variant === 'login' ? 'Sign in' : 'Register'}
                </h2>
                <div className="flex flex-col gap-4">
                    {variant === 'register' && (
                        <Input
                            id="name"
                            type="text"
                            label="Username"
                            value={name}
                            onChange={onChange}
                        />
                    )}
                    <Input
                        id="email"
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={onChange}
                    />
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition" type="submit">
                    {variant === 'login' ? 'Login' : 'Sign up'}
                </button>
                <p className="text-neutral-500 mt-12">
                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                    <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                        {variant === 'login' ? 'Create an account' : 'Login'}
                    </span>
                </p>
            </form>
        </AuthFormLayout>
    );
}
);
