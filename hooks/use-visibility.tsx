import { useCallback, useState } from "react";
import { IMenuVisibility } from "@/types";

const _initialValue = { showMobileMenu: false, showAccountMenu: false };
export const useMenuVisibility = (initialValue: IMenuVisibility = _initialValue) => {
    const [{ showAccountMenu, showMobileMenu }, setIsVisible] = useState<IMenuVisibility>(initialValue);

    const toggleAccountMenuVisibility = useCallback(() => {
        setIsVisible((currentVisibility) => ({ ...currentVisibility, showAccountMenu: !currentVisibility.showAccountMenu }));
    }, []);

    const toggleMobileMenuVisibility = useCallback(() => {
        setIsVisible((currentVisibility) => ({ ...currentVisibility, showMobileMenu: !currentVisibility.showMobileMenu }));
    }, []);

    return {
        showAccountMenu,
        showMobileMenu,
        toggleAccountMenuVisibility,
        toggleMobileMenuVisibility
    };
};
