import { useState, useEffect } from "react";

const TOP_OFFSET = 66;
export const useShowBackground = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackground(window.scrollY > TOP_OFFSET);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        showBackground
    };
};