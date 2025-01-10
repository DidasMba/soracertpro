/** @format */

export type THowItWork = {
    title: string;
    description: string;
};

export type TNavItem = {
    id: number;
    pageName: string;
    name: string;
    href: string;
    hasDropdown: boolean;
    children: Array<{ text: string; href: string }>;
};
