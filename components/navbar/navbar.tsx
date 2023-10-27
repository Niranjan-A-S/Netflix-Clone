import { FC, createElement, memo, useCallback } from "react";
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import { INavbarItemProps } from "../../types/component-props";
import { menuItems, renderListItems, } from "@/lib/render-helpers";
import { useMenuVisibility } from "@/hooks/use-visibility";
import { useShowBackground } from "@/hooks/use-show-background";
import { NavbarItem } from "./navbar-item";
import { MobileMenu } from "./mobile-menu";
import { AccountMenu } from "./account-menu";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Navbar: FC = memo(() => {
    const { showAccountMenu, showMobileMenu, toggleAccountMenuVisibility, toggleMobileMenuVisibility } = useMenuVisibility();
    const { showBackground } = useShowBackground();
    const { data } = useCurrentUser();

    const renderNavbarItem = useCallback((props: INavbarItemProps) => renderListItems<INavbarItemProps>(NavbarItem, props), []);

    return <nav className="w-full fixed z-40">
        <div
            className={`
                md:px-16
                px-4
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
                `}>
            <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
            <div
                className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                ">
                {menuItems.map(renderNavbarItem)}
            </div>
            <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse </p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : ''}`} onClick={toggleMobileMenuVisibility} />
                <MobileMenu isVisible={showMobileMenu} />
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsBell />
                </div>
                <div onClick={toggleAccountMenuVisibility} className="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                        <img src={data?.image || "/images/default-blue.png"} alt="ProfilePic" />
                    </div>
                    <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : ''}`} />
                    <AccountMenu isVisible={showAccountMenu} avatar={data?.image} name={data?.name} />
                </div>
            </div>
        </div>
    </nav>;
});
