"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to close mobile menu when clicking outside
    const handleOutsideClick = (event:any) => {
        if (!event.target.closest('.sidebar')) {
            setMobileMenuOpen(false);
        }
    };
    useEffect(() => {
        if (mobileMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [mobileMenuOpen]);
    return (
        <div className={`relative ${mobileMenuOpen ? 'overflow-hidden' : ''}`}>
            <nav className="bg-white border-b shadow-xl border-gray-200">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-customHoverBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Image src="/logoblack.png" alt="soracert Logo" width={100} height={100} className="h-auto w-auto" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link" aria-current="page">Dashboard</Link>
                                    <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Team</Link>
                                    <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Projects</Link>
                                    <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 nav-link">Calendar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white">
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
            </nav>
            {mobileMenuOpen && <div className="fixed inset-0 z-40" aria-hidden="true" onClick={handleOutsideClick}>
                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>}
            <div className={`${mobileMenuOpen ? 'fixed' : 'hidden'} inset-y-0 left-0 z-50 max-w-full flex transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} duration-300`} aria-hidden={!mobileMenuOpen}>
                <div className="sidebar w-64 bg-white shadow-xl z-50">
                    <div className="flex items-center justify-center p-4 bg-customBlue">
                        <Image src="/Soracertlogo.png" alt="soracert Logo" width={50} height={50} className="h-auto w-auto" />
                    </div>
                    <hr />
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 active-link nav-link" aria-current="page">Dashboard</Link>
                        <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Team</Link>
                        <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Projects</Link>
                        <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 nav-link">Calendar</Link>
                    </div>
                </div>
                <div className="fixed inset-0 z-40" aria-hidden="true" onClick={handleOutsideClick}></div>
            </div>
        </div>
    );
}

export default Navbar;
