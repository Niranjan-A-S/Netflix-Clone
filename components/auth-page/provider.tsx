import { signIn } from "next-auth/react";
import { FC, createElement, memo } from "react";
import { IAuthProviderProps } from "@/types/component-props";

export const AuthProvider: FC<IAuthProviderProps> = memo(({ iconComponent: Component, id }) => (
    <div
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition cursor-pointer"
        onClick={() => signIn(id, { callbackUrl: '/profiles' })}
    >{createElement(Component, { size: 30 })}
    </div>
));