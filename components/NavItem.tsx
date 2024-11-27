/** @format */

"use client";
import Link from "next/link";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const NavItem: React.FC<{
    text: string;
    href: string;
    hasDropdown: boolean;
    isActive: boolean;
    subLink?: Array<{ href: string; text: string }>;
}> = ({ text, href, hasDropdown = false, isActive = false, subLink }) => {
    return (
        <div className='relative group'>
            <Link
                href={href}
                className={`font-semibold text-customBlue flex items-center gap-1 hover:text-customHoverBlue ${
                    isActive && `text-customHoverBlue text-sm`
                }`}
            >
                {text}
                {hasDropdown && <IoChevronDownOutline size={20} />}
            </Link>
            {hasDropdown && (
                <div className='px-6 hidden bg-white rounded-xl z-12 absolute py-6 group-hover:flex flex-col gap-2 shadow-xl'>
                    {subLink?.map((sublink, _) => (
                        <Link
                            className={`font-semibold text-customBlue text-sm hover:text-customHoverBlue whitespace-nowrap hover:underline ${
                                isActive && `text-customHoverBlue text-sm`
                            }`}
                            key={`${sublink.text}-header`}
                            href={sublink.href}
                        >
                            {sublink.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavItem;
