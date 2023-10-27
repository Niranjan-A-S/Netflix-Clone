import { FC, memo, useCallback } from "react";
import { IMobileMenuItemProps, IMobileMenuProps } from "@/types/component-props";
import { MobileMenuItem } from "./mobile-menu-item";
import { menuItems, renderListItems } from "@/lib/render-helpers";

export const MobileMenu: FC<IMobileMenuProps> = memo(({ isVisible }) => {

    const renderMobileMenuItem = useCallback((props: IMobileMenuItemProps) => renderListItems<IMobileMenuItemProps>(MobileMenuItem, props), []);

    return isVisible
        ? <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                {menuItems.map(renderMobileMenuItem)}
            </div>
        </div>
        : null;
});