import { FC, ReactElement, createElement } from "react";

export const menuItems = [
    { label: 'Home' },
    { label: 'Series' },
    { label: 'Films' },
    { label: 'New & Popular' },
    { label: 'My List' },
    { label: 'Browse by Language' },
];
export const renderListItems = <T extends Record<string, any>>(Component: FC<T>, props: T): ReactElement<T> => createElement(Component, { ...props, key: props.label });
