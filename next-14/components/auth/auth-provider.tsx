'use client';

import { IAuthProviderProps } from '@/types/component-props';
import { FC, memo } from 'react';

export const AuthProvider: FC<IAuthProviderProps> = memo(({ icon: Icon, provider }) => (
    // eslint-disable-next-line no-empty-function
    <div onClick={() => { }} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
        <Icon size={32} />
    </div>
));
