import React from "react";
import { useFormState } from "@/hooks/use-form-state";
import { IAuthFormState } from "@/types";
import { Input } from "../ui/input";
import { IInputProps } from "@/types/component-props";

const initialFormState: IAuthFormState = {
    email: "",
    userName: '',
    password: ''
};

export const AuthForm: React.FC = React.memo(() => {

    const { state: { email, userName, password }, onChange, resetField } = useFormState<IAuthFormState>(initialFormState);
    const [variant, setVariant] = React.useState('login');

    const getVariantData = React.useCallback((paramA: string, paramB: string) => variant === 'login' ? paramA : paramB, [variant]);

    const toggleVariant = React.useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
        resetField();
    }, [resetField]);

    const renderInputField = React.useCallback(({ id, label, type, value }: Omit<IInputProps, 'onChange' | 'name'>) => (
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

    const registerSpecificData = React.useMemo(() => ([
        { id: 'userName', label: 'Username', type: 'text', value: userName }
    ]), [userName]);

    const loginSpecificData = React.useMemo(() => ([
        { id: 'email', label: 'Email', type: 'email', value: email },
        { id: 'password', label: 'Password', type: 'password', value: password }
    ]), [email, password]);

    return <form>
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
        <p className="text-neutral-500 mt-12">
            {getVariantData('First time using Netflix?', 'Already have an account?')}
            <span onClick={toggleVariant} className="ml-1 text-white hover:underline cursor-pointer">
                {getVariantData('Create an account', 'Login')}
            </span>
        </p>
    </form>;
});