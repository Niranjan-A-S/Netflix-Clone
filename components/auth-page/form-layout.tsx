import React from "react";
import Image from "next/image";
import { IParentProps } from "@/types/component-props";

export const FormLayout: React.FC<IParentProps> = React.memo(({ children }) => (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <Image src="/images/logo.png" alt="Logo" className="h-12" width={150} height={150} />
            </nav>
            <div className="flex  justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:mx-w-md rounded-md w-full">
                    {children}
                </div>
            </div>
        </div>
    </div>
));