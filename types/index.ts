
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

