'use client';

import React from 'react';

export const Error: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg mb-8">Please refresh the page or try again later.</p>
            <button onClick={() => window.location.reload()} className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300">Refresh</button>
        </div>
    );
};

