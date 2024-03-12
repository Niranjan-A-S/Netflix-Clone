import { IFormResponse } from '@/types';

export const defaultFormState = {
    email: '',
    name: '',
    password: ''
};

export const defaultFormResponse: IFormResponse = {
    type: 'success',
    message: ''
};

export const images = [
    '/images/default-blue.png',
    '/images/default-red.png',
    '/images/default-slate.png',
    '/images/default-green.png'
];
