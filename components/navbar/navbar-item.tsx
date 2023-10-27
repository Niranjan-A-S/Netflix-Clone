import { FC, memo } from "react";
import { INavbarItemProps } from "@/types/component-props";

export const NavbarItem: FC<INavbarItemProps> = memo(({ label }) => (
    <div className="text-white cursor-pointer hover: text-gray-400 transition">{label}</div>
));