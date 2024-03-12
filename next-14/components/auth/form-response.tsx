'use client';

import { IFormResponseProps } from '@/types/component-props';
import { FC, memo } from 'react';

export const FormResponse: FC<IFormResponseProps> = memo(({ response: { message, type } }) => (
    message
        ? (
            <p
                className={type === 'success'
                    ? 'text-sm text-emerald-600 transition duration-500 ease-in-out' :
                    'text-sm text-rose-600 transition duration-500 ease-in-out'
                }>{message}
            </p>
        )
        : null
));
