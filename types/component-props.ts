import { IFormResponse } from '@/types';
import { Movie } from '@prisma/client';
import { IconType } from 'react-icons';

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

export interface IAccountMenuProps {
    visible?: boolean;
    imageUrl: string;
    userName: string;
}

export interface IMobileMenuProps {
    visible?: boolean;
}

export interface INavbarItemProps {
    label: string;
    active?: boolean;
}

export interface IAuthProviderProps {
    provider: 'google' | 'github';
    icon: IconType;
}

export interface IPlayButtonProps {
    movieId: string;
}
export interface IMovieListProps {
    data: Movie[];
    title: string;
    hasError: boolean;
}

export interface IWatchMovie extends IPlayButtonProps { }

export interface IWatchMovieParams {
    params: Partial<IWatchMovie>;
}

