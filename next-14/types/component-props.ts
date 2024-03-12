import { IFormResponse } from '@/types';

export interface IInputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
    disabled?: boolean;
};

export interface IParentProps {
    children: React.ReactNode;
}
export interface IFormResponseProps {
    response: IFormResponse;
}
