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

export interface IUserCardProps {
    name: string;
};

export interface IAccountMenuProps {
    visible?: boolean;
}

export interface IMobileMenuProps extends IAccountMenuProps {
    visible?: boolean;
}

export interface INavbarItemProps {
    label: string;
    active?: boolean;
}
