'use client';

import { IParentProps } from '@/types/component-props';
import Image from 'next/image';
import { FC, memo } from 'react';

export const AuthFormLayout: FC<IParentProps> = memo(({ children }) => (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={177}
                    height={48}
                />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    {children}
                </div>
            </div>
        </div>
    </div>
));
