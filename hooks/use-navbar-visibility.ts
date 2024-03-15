import { TOP_OFFSET } from '@/constants';
import { useState, useEffect, useCallback } from 'react';

export const useNavbarVisibility = () => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return {
        showAccountMenu, showMobileMenu, showBackground, toggleAccountMenu, toggleMobileMenu
    };
};
