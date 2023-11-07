import { IInfoModalContext, IInfoModalState } from "@/types";
import { IParentProps } from "@/types/component-props";
import { FC, createContext, memo, useCallback, useState } from "react";

export const infoModalContext = createContext<IInfoModalContext>({
    isOpen: false,
    movieId: '',
    closeModal: () => { },
    openModal: () => { }
});

export const InfoModalProvider: FC<IParentProps> = memo(({ children }) => {
    const [infoModal, setInfoModal] = useState<IInfoModalState>({ isOpen: false, movieId: '' });

    const openModal = useCallback((movieId: string) => {
        setInfoModal({ isOpen: true, movieId });
    }, []);

    const closeModal = useCallback(() => {
        setInfoModal({ isOpen: false, movieId: '' });
    }, []);

    return <infoModalContext.Provider value={{ ...infoModal, closeModal, openModal }}>{children}</infoModalContext.Provider>;
});
