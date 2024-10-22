/** @format */
"use client";
import { navItems } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SignButton from "./Button";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import NavMob from "./NavMob";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();
    const [isNavMobOpen, setIsNavMobOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 flex items-center left-0 w-full h-16 inset-0 ${
                isScrolled ? "bg-gray-100" : "backdrop-blur-sm bg-white/30"
            }  z-50 duration-300 transition-colors ease-in-out`}
        >
            <nav className='max-w-7xl mx-auto w-full px-6 flex gap-8 lg:justify-normal justify-between items-center'>
                <Link href={"/"}>
                    <Image
                        height={55}
                        width={100}
                        src='/logoblack.png'
                        alt='logo'
                    />
                </Link>
                <div className='flex-1 lg:flex  sm:hidden hidden justify-between items-center'>
                    <ul className='flex gap-8 flex-row'>
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`font-semibold text-customBlue hover:text-customHoverBlue ${
                                    pathName.includes(item.pageName!) &&
                                    `text-customHoverBlue text-sm`
                                }`}
                            >
                                {item.name}
                                {item.hasDropdow && <div></div>}
                            </Link>
                        ))}
                    </ul>
                    <div className='flex flex-row gap-4'>
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
                <LuMenu
                    onClick={() => setIsNavMobOpen(true)}
                    className='block sm:block lg:hidden'
                    size={30}
                />
                <NavMob
                    isNavMobOpen={isNavMobOpen}
                    setIsNavMobOpen={setIsNavMobOpen}
                />
            </nav>
        </header>
    );
};

export default Navbar;
