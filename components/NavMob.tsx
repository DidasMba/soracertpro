/** @format */

"use client";
import React, { FC, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import SignButton from "./Button";
import { navItems } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMob: FC<{
    isNavMobOpen: boolean;
    setIsNavMobOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isNavMobOpen, setIsNavMobOpen }) => {
    const [isDropped, setIsDropped] = useState(false);
    const pathName = usePathname();
    const handleDropDown = (checkIsDropped: boolean) => {
        if (checkIsDropped) {
            setIsDropped(!isDropped);
        }
    };
    return (
        <div
            onClick={() => setIsNavMobOpen(false)}
            className={`absolute sm:block lg:hidden flex transition-all duration-300 justify-end ${
                isNavMobOpen ? "translate-x-0" : "translate-x-full"
            } top-0 bottom-0 left-0 h-svh right-0`}
        >
            <div
                onChange={(e) => {
                    e.stopPropagation();
                }}
                className='bg-customBlue w-[70%] h-full flex flex-col p-6 text-white'
            >
                <div className='flex justify-end w-full '>
                    <FaWindowClose
                        onClick={() => setIsNavMobOpen(false)}
                        className=''
                        size={24}
                    />
                </div>
                <div className='flex-1 flex flex-col justify-between'>
                    <ul className='flex flex-col gap-4 pt-10'>
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => {
                                    if (item.hasDropdow) {
                                        handleDropDown(item.hasDropdow);
                                    } else {
                                        setIsNavMobOpen(false);
                                    }
                                }}
                                className={`font-semibold transition-all ease-in-out duration-300  text-white hover:text-customHoverBlue ${
                                    pathName.includes(item.pageName!) &&
                                    `text-customHoverBlue text-sm`
                                }`}
                            >
                                {item.hasDropdow ? (
                                    <div className='flex flex-row items-center gap-2'>
                                        <span> {item.name}</span>
                                        <FaChevronDown
                                            className={` ${
                                                isDropped
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            }`}
                                            size={16}
                                        />
                                    </div>
                                ) : (
                                    item.name
                                )}
                                {item.hasDropdow && (
                                    <ul
                                        className={`transition-all duration-300 ease-in-out  pl-4 ${
                                            isDropped ? "min-h-10" : "h-0"
                                        }`}
                                    >
                                        <div
                                            className={`${
                                                isDropped ? "flex" : "hidden"
                                            } flex-col pt-2`}
                                        ></div>
                                    </ul>
                                )}
                            </Link>
                        ))}
                    </ul>
                    <div className='flex flex-row justify-center gap-2'>
                        <SignButton
                            text="S'inscrire"
                            href='#'
                            variant='light'
                        />
                        <SignButton
                            text='Se connecter'
                            href='#'
                            variant='dark'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMob;
