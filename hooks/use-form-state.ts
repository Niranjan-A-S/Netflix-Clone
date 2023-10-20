import React from "react";

export const useFormState = <T>(initialValue: T) => {
    const [state, setState] = React.useState<T>(initialValue);

    const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }, [state, setState]);

    const resetField = React.useCallback(() => {
        setState(initialValue);
    }, [initialValue]);

    return { state, onChange, resetField };
};