'use client';
/* eslint-disable no-empty-function */

import { IInfoModalContext } from '@/types';
import { IParentProps } from '@/types/component-props';
import { FC, createContext, memo, useCallback, useContext, useState } from 'react';

const InfoModalContext = createContext<IInfoModalContext>({
    isOpen: false,
    openModal: (movieId?: string) => { },
    movieId: undefined,
    closeModal: () => { }
});

export const useInfoModal = () => useContext(InfoModalContext);

export const InfoModalProvider: FC<IParentProps> = memo(({ children }) => {
    //TODO: move this to single state;
    const [isOpen, setIsOpen] = useState(false);
    const [movieId, setMovieId] = useState<undefined | string>(undefined);

    const openModal = useCallback((movieId?: string) => {
        setIsOpen(true);
        setMovieId(movieId);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setMovieId(undefined);
    }, []);

    return (
        <InfoModalContext.Provider value={
            {
                isOpen,
                openModal,
                closeModal,
                movieId
            }
        }>
            {children}
        </InfoModalContext.Provider>
    );
});
