import { FunctionComponent } from "react";

export interface IInputProps {
    id: string; 
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    type: string;
    value: string;
    label: string;
    name: string;
}

export interface IParentProps {
    children: React.ReactNode;
}

export interface IAuthProviderProps {
    iconComponent: FunctionComponent<{ size: number }>;
    id: string;
}

export interface INavbarItemProps {
    label: string;
}

export interface IMobileMenuItemProps extends INavbarItemProps { }

export interface IMobileMenuProps {
    isVisible: boolean;
}

export interface IAccountMenuProps extends IMobileMenuProps {
    avatar: string;
    name: string;
}