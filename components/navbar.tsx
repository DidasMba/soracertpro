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
import NavItem from "./NavItem";
import { useUser } from "@/context/UserContext";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutLight } from "react-icons/pi";

const Navbar: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();
    const [isNavMobOpen, setIsNavMobOpen] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const user = useUser();

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
            <nav className='max-w-7xl mx-auto w-full px-4 md:px-8 flex gap-8 lg:justify-normal justify-between items-center'>
                <Link href={"/sora/home"}>
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
                            <NavItem
                                key={item.id}
                                hasDropdown={item.hasDropdow}
                                text={item.name}
                                href={item.href}
                                subLink={item.children}
                                isActive={pathName.includes(item.pageName!)}
                            />
                        ))}
                    </ul>
                    {isLogged ? (
                        <div className='relative'>
                            <div
                                onClick={() => setIsOpenDrop(!isOpenDrop)}
                                className='cursor-pointer flex items-center gap-1'
                            >
                                <span className='text-sm font-semibold'>
                                    {user.user?.firstname}
                                </span>
                                <div className='h-10  w-10 rounded-full border border-gray-300'>
                                    <Image
                                        src={user.user?.avatar!}
                                        alt='user'
                                        width={40}
                                        height={40}
                                        className='w-full h-full rounded-full'
                                    />
                                </div>
                            </div>
                            {isOpenDrop && (
                                <div className='absolute top-11 bg-white left-4 shadow-lg border border-gray-200 rounded-md flex flex-col gap-2 px-4 py-2'>
                                    <button
                                        className='flex items-center gap-1 text-sm font-medium text-customBlue hover:text-customHoverBlue'
                                        type='button'
                                    >
                                        <IoSettingsOutline size={18} /> Voir
                                        Profile
                                    </button>
                                    <button
                                        className='flex items-center gap-1 text-sm font-medium text-customBlue hover:text-customHoverBlue'
                                        type='button'
                                    >
                                        <PiSignOutLight size={18} />
                                        Deconnexion
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='flex flex-row gap-4'>
                            <SignButton
                                text="S'inscrire"
                                href='/signup'
                                variant='light'
                            />
                            <SignButton
                                text='Se connecter'
                                href='/signin'
                                variant='dark'
                            />
                        </div>
                    )}
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
