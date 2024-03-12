'use client';

import { registerAction } from '@/actions/register';
import { AuthFormLayout } from '@/components/auth/auth-form-layout';
import { FormResponse } from '@/components/auth/form-response';
import { Input } from '@/components/auth/input';
import { defaultFormResponse, defaultFormState } from '@/constants';
import { useForm } from '@/hooks/use-form';
import { FC, FormEventHandler, memo, useCallback, useTransition } from 'react';

export const AuthForm: FC = memo(() => {
    const { onChange, state: { email, name, password }, toggleVariant, variant, response, setResponse, setState } = useForm<typeof defaultFormState>(defaultFormState);

    const [isPending, startTransition] = useTransition();

    const register = useCallback(async () => {
        try {
            if (!name || !email || !password) {
                throw new Error('Please provide all the required fields');
            }
            const { message } = await registerAction({ name, email, password });
            if (message?.error) {
                setResponse({ type: 'error', message: message?.error });
            }
            if (message?.success) {
                setResponse({ type: 'success', message: message?.success });
            }

        } catch (error: any) {
            setResponse({ type: 'error', message: error?.message || 'Something went wrong' });
        }
    }, [email, name, password, setResponse]);

    const login = useCallback(async () => {
        try {
            if (!email || !password) {
                throw new Error('Please provide all the required fields');
            }
        } catch (error: any) {
            setResponse({ type: 'error', message: error?.message || 'Something went wrong' });
        }
    }, [email, password, setResponse]);

    const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (event) => {
        event.preventDefault();
        const submitAction = variant === 'login' ? login : register;
        startTransition(async () => {
            setResponse(defaultFormResponse);
            await submitAction();
            setState(defaultFormState);
        });
    }, [login, register, setResponse, variant]);

    return (
        <AuthFormLayout>
            <form onSubmit={onSubmit}>
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
                            disabled={isPending}
                        />
                    )}
                    <Input
                        id="email"
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={onChange}
                        disabled={isPending}
                    />
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={onChange}
                        disabled={isPending}
                    />
                    <FormResponse response={response} />
                </div>
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition" type="submit" disabled={isPending}>
                    {isPending ? 'Loading...' : variant === 'login' ? 'Login' : 'Sign up'}
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
