'use client';

import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { IAuthProviderProps } from '@/types/component-props';
import { signIn } from 'next-auth/react';
import { FC, memo, useCallback } from 'react';

export const AuthProvider: FC<IAuthProviderProps> = memo(({ icon: Icon, provider }) => {

    const onSignIn = useCallback(() => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }, [])

    return (
        <div onClick={onSignIn} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
        <Icon size={32} />
    </div>
    )
});
