'use client';

import { IFormResponseProps } from '@/types/component-props';
import { FC, memo } from 'react';

export const FormResponse: FC<IFormResponseProps> = memo(({ response: { message, type } }) => (
    message
        ? (
            <p
                className={type === 'success'
                    ? 'text-sm text-emerald-600' :
                    'text-sm text-rose-600'
                }>{message}
            </p>
        )
        : null
));
