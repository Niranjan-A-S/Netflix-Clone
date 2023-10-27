import { IMobileMenuItemProps } from "@/types/component-props";
import { FC, memo } from "react";

export const MobileMenuItem: FC<IMobileMenuItemProps> = memo(({ label }) => <div className="px-3 text-center text-white hover:underline">{label}</div>);