import { ChangeEvent, useState, useCallback } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
    const [state, setState] = useState<T>(initialState);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }, [state]);

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
    }, []);

    return { state, onChange, variant, toggleVariant };
};
