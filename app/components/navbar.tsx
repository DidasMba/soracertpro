"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b shadow-xl border-gray-200">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <span
                          
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-customHoverBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 border-none hover:border-none active:border-none`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6  border-none hover:border-none active:border-none`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center bg-black">
                            <Image src="/Soracertlogo.png" alt="soracert Logo" width={50} height={50} className="h-auto w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 active-link nav-link" aria-current="page">Dashboard</Link>
                                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Team</Link>
                                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Projects</Link>
                                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Calendar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white"
                                    id="user-menu-button"
                                    aria-expanded={dropdownOpen ? 'true' : 'false'}
                                    aria-haspopup="true"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="/avatar.png" alt="" />
                                </button>
                            </div>
                            {dropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 nav-link" role="menuitem">Your Profile</Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 nav-link" role="menuitem">Settings</Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 nav-link" role="menuitem">Sign out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 active-link nav-link" aria-current="page">Dashboard</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Team</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Projects</Link>
                    <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Calendar</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
