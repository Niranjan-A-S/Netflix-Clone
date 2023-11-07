import { ObjectId } from "mongodb";

export interface IAuthFormState {
    email: string;
    username: string;
    password: string;
}

export interface IUser extends Omit<IAuthFormState, 'username'> {
    name: string;
    _id?: ObjectId;
    image?: string;
    emailVerified?: Date;
}

export interface IMenuVisibility {
    showMobileMenu: boolean;
    showAccountMenu: boolean;
}

export interface IMovie {
    _id: string;
    title: string;
    thumbnailUrl: string;
    duration: string;
    genre: string;
}

export interface IInfoModalContext {
    isOpen: boolean;
    movieId: string;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

export interface IInfoModalState {
    isOpen: boolean;
    movieId: string;
}