import { IPlayButtonProps } from './component-props';

export interface IFormResponse {
    message?: string;
    type: 'error' | 'success';
}

export interface IRegisterParams {
    name: string;
    email: string;
    password: string;
};

export interface ILoginParams extends Omit<IRegisterParams, 'name'> { };

export interface InfoModalContext {
    isOpen: boolean;
    openModal: (movieId?: string) => void;
    movieId?: string;
    closeModal: () => void;
}

export interface IWatchMovie extends IPlayButtonProps { }

export interface IWatchMovieParams {
    params: Partial<IWatchMovie>;
}

export interface IInfoModalContext {
    isOpen: boolean;
    openModal: (movieId?: string) => void;
    movieId?: string;
    closeModal: () => void;
};
