/** @format */

"use client";
import Image from "next/image";
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
                className={`font-semibold text-customBlue text-sm flex items-center gap-1 hover:text-customHoverBlue ${
                    isActive && `text-customHoverBlue`
                }`}
            >
                {text}
                {hasDropdown && <IoChevronDownOutline size={20} />}
            </Link>
            {hasDropdown && (
                <div className='px-6 hidden border border-gray-200 bg-white w-[80rem] -left-56 top-6  rounded-xl z-12 absolute z-10 py-6 group-hover:flex justify-between  shadow-xl'>
                    <div className='flex flex-col gap-2'>
                        {subLink?.map((sublink, _) => (
                            <Link
                                className={`font-semibold text-sm text-customBlue hover:text-customHoverBlue whitespace-nowrap hover:underline ${
                                    isActive && `text-customHoverBlue text-sm`
                                }`}
                                key={`${sublink.text}-header`}
                                href={sublink.href}
                            >
                                {sublink.text}
                            </Link>
                        ))}
                    </div>
                    <div className='h-full w-40'>
                        <Image
                            src={"/education.png"}
                            alt='illustration'
                            width={200}
                            height={100}
                            className='w-full'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItem;
