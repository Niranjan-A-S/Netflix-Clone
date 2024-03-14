'use client'

import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-center bg-no-repeat bg-cover animate-spin" style={{ backgroundImage: 'url(/images/loader.png)' }}></div>
        </div>
    );
};

