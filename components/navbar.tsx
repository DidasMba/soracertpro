/** @format */
"use client";
import { navItems } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SignButton from "./Button";
import { usePathname, useRouter } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import NavMob from "./NavMob";
import NavItem from "./NavItem";
import { useUser } from "@/context/UserContext";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutLight } from "react-icons/pi";
import { GoGlobe } from "react-icons/go";
import { LucideChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/lib/api/auth";
import { toast } from "react-toastify";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
];

const Navbar: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();
    const [isNavMobOpen, setIsNavMobOpen] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);

    const route = useRouter();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[1]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [t, i18n] = useTranslation("global");

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

    useEffect(() => {
        const locLang =
            localStorage.getItem("langugae") || navigator.language.slice(0, 2);
        const lang =
            languages.find((lang) => lang.code === locLang) || languages[0];
        i18n.changeLanguage(lang.code);
        document.documentElement.lang = lang.code;
        setCurrentLang(lang);
    }, [currentLang.code, i18n]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (lang: (typeof languages)[0]) => {
        localStorage.setItem("langugae", lang.code);
        setCurrentLang(lang);
        setIsDropdownOpen(false);
        document.documentElement.lang = lang.code;
        window.location.reload();
    };

    const { mutateAsync: logout, isPending } = useMutation({
        mutationFn: signOut,
    });

    const handleLogOut = async () => {
        try {
            const response = await logout();
            if (response?.status === "success") {
                toast.success("Bye bye 👋🏾");
                window.location.reload();
                route.push("/sora/home");
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                    <div className='flex gap-4'>
                        {/* user logged button */}
                        {isLogged ? (
                            <div className='relative'>
                                {isPending ? (
                                    <span className='loading loading-spinner loading-sm'></span>
                                ) : (
                                    <div
                                        onClick={() =>
                                            setIsOpenDrop(!isOpenDrop)
                                        }
                                        className='cursor-pointer flex items-center gap-1'
                                    >
                                        <span className='text-sm font-semibold'>
                                            {user.user?.firstname}
                                        </span>
                                        <div className='h-10  w-10 rounded-full border border-gray-300'>
                                            <Image
                                                src={
                                                    user.user?.avatar!
                                                        ? user.user?.avatar!
                                                        : "/10.png"
                                                }
                                                alt='user'
                                                width={40}
                                                height={40}
                                                className='w-full h-full rounded-full'
                                            />
                                        </div>
                                    </div>
                                )}

                                {isOpenDrop && (
                                    <div className='absolute top-11 bg-white left-4 shadow-lg border border-gray-200 rounded-md flex flex-col gap-2 px-4 py-2'>
                                        <button
                                            className='flex items-center gap-1 text-sm font-medium text-customBlue hover:text-customHoverBlue'
                                            type='button'
                                            onClick={() => {
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <IoSettingsOutline size={18} /> Voir
                                            Profile
                                        </button>
                                        <button
                                            className='flex items-center gap-1 text-sm font-medium text-customBlue hover:text-customHoverBlue'
                                            type='button'
                                            onClick={handleLogOut}
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
                        {/* translations button */}
                        <div className='flex gap-6 items-center lg:gap-8'>
                            <div
                                id='google_translate_element'
                                className={`relative`}
                                ref={dropdownRef}
                            >
                                <button
                                    className={`flex items-center gap-1 `}
                                    onClick={toggleDropdown}
                                    aria-haspopup='true'
                                    aria-expanded={isDropdownOpen}
                                >
                                    <GoGlobe />
                                    <span className={`text-sm font-bold`}>
                                        {currentLang.code.toUpperCase()}
                                    </span>
                                    <LucideChevronDown
                                        className={`transform transition-transform duration-200 ${
                                            isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div className='absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        <div className='py-1'>
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    className={`block w-full text-left px-4 font-semibold py-2 text-sm text-gray-700 ${
                                                        currentLang.code ===
                                                            lang.code &&
                                                        "bg-customBlue text-white"
                                                    } hover:bg-customBlue hover:text-white`}
                                                    onClick={() =>
                                                        selectLanguage(lang)
                                                    }
                                                >
                                                    {lang.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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
