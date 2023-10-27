import React, { FC, memo, useCallback, useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useFormState } from "@/hooks/use-form-state";
import { IAuthFormState } from "@/types";
import { IInputProps } from "@/types/component-props";
import { Input } from "../ui/input";
import { AuthProvider } from "./provider";


const initialFormState: IAuthFormState = {
    email: "",
    username: '',
    password: ''
};

export const AuthForm: FC = memo(() => {

    const { state: { email, username, password }, onChange, resetField } = useFormState<IAuthFormState>(initialFormState);
    const [variant, setVariant] = useState<'login' | 'register'>('login');

    const getVariantData = useCallback((paramA: string, paramB: string) => variant === 'login' ? paramA : paramB, [variant]);

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
        resetField();
    }, [resetField]);

    const renderInputField = useCallback(({ id, label, type, value }: Omit<IInputProps, 'onChange' | 'name'>) => (
        <Input
            key={id}
            id={id}
            onChange={onChange}
            type={type}
            value={value}
            label={label}
            name={id}
        />
    ), [onChange]);

    const registerSpecificData = useMemo(() => ([
        { id: 'username', label: 'Username', type: 'text', value: username }
    ]), [username]);

    const loginSpecificData = useMemo(() => ([
        { id: 'email', label: 'Email', type: 'email', value: email },
        { id: 'password', label: 'Password', type: 'password', value: password }
    ]), [email, password]);

    const loginUser = useCallback(async () => {
        await signIn('credentials', {
            email,
            password,
            callbackUrl: '/profiles',
        });
    }, [email, password]);

    const registerUser = useCallback(async () => {
        const response = await axios.post('/api/register',
            {
                email,
                password,
                username
            }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }, [email, password, username]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (variant === 'login') {
                await loginUser();
            } else {
                const response = await registerUser();
                if (response.status === 201) await loginUser();
            }
        } catch (error) {
            console.log(error);
        }
    }, [loginUser, registerUser, variant]);

    return <form onSubmit={handleSubmit}>
        <h2 className="text-white text-4xl mb-8 font-semibold">{getVariantData('Sign in', 'Register')}</h2>
        <div className="flex flex-col gap-4">
            {variant === 'register'
                ? registerSpecificData.map(renderInputField)
                : null
            }
            {loginSpecificData.map(renderInputField)}
        </div>
        <button className="bg-red-600 text-white w-full rounded-md py-3 mt-10 hover:bg-red-700 transition">
            {getVariantData('Login', 'Sign up')}
        </button>
        <div className="flex flex-row items-center gap-4 mt-8 justify-center" >
            <AuthProvider iconComponent={FcGoogle} id="google" />
            <AuthProvider iconComponent={FaGithub} id="github" />
        </div>
        <p className="text-neutral-500 mt-12">
            {getVariantData('First time using Netflix?', 'Already have an account?')}
            <span onClick={toggleVariant} className="ml-1 text-white hover:underline cursor-pointer">
                {getVariantData('Create an account', 'Login')}
            </span>
        </p>
    </form>;
});