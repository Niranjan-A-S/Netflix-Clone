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