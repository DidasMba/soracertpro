"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface DropdownState {
    [key: string]: boolean;
  }

const NavBar = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({});


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (key: string) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg z-50">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image src="/logoblack.png" alt="soracert Logo" width={100} height={100} className="h-auto w-auto" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <Link href="/" className="h-10 px-3 py-3 rounded-md text-xs font-bold transition-colors focus:outline-none  bg-transparent">
            HOME
          </Link>
          <div className="relative group">
            <span className="h-10 px-3 py-3 rounded-md text-xs font-bold transition-colors focus:outline-none  bg-transparent">
              ABOUT US
            </span>
            <div className="absolute left-0 mt-2  w-[220px] py-2 rounded-lg shadow-lg bg-white hidden group-hover:block z-50">
              <ul className="py-2 text-sm text-gray-700">
              <li><Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">About us</Link></li>
                <li><Link href="/career" className="block px-4 py-2 hover:bg-gray-100">Career</Link></li>
                <li><Link href="/resources" className="block px-4 py-2 hover:bg-gray-100">Resources</Link></li>
                <li><Link href="/faqs" className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <span  className="h-10 px-3 py-3 rounded-md text-xs font-bold transition-colors focus:outline-none  bg-transparent">
              COMMUNITY
            </span>
            <div className="absolute left-0 mt-2   w-[220px] rounded-lg shadow-lg bg-white hidden group-hover:block z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li><Link href="/membership" className="block px-4 py-2 hover:bg-gray-100">Membership</Link></li>
            
                <li><Link href="/events" className="block px-4 py-2 hover:bg-gray-100">Events</Link></li>
                <li><Link href="/programs" className="block px-4 py-2 hover:bg-gray-100">Programs</Link></li>
                <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link></li>
              </ul>
            </div>
          </div>
          <Link href="/partners" className="h-10 px-3 py-3 rounded-md text-xs font-bold transition-colors focus:outline-none  bg-transparent">
            PARTNERS
          </Link>
          <Link href="/contact" className="h-10 px-3 py-3 rounded-md text-xs font-bold transition-colors focus:outline-none  bg-transparent">
            CONTACT
          </Link>
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="#">Sign In</a>
        <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Image src="/logoblack.png" alt="soracert Logo" width={100} height={100} className="h-auto w-auto" />
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-gray-400 rounded" href="#">Home</a>
                </li>
                <li className="mb-1">
                  <span className="block p-4 text-sm font-semibold text-gray-400  rounded"  onClick={() => toggleDropdown('aboutUs')}>
                    About Us
                    {isDropdownOpen.aboutUs && (
                      <div className="ml-4 mt-2 w-44 rounded-lg shadow bg-white">
                        <ul className="py-2 text-sm text-gray-700">
                          <li><Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">About us</Link></li>
                          <li><Link href="/career" className="block px-4 py-2 hover:bg-gray-100">Career</Link></li>
                          <li><Link href="/resources"className="block px-4 py-2 hover:bg-gray-100">Resources</Link></li>
                          <li><Link href="/faqs" className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>
                        </ul>
                      </div>
                    )}
                  </span>
                </li>
                <li className="mb-1">
                  <span className="block p-4 text-sm font-semibold text-gray-400  rounded"  onClick={() => toggleDropdown('services')}>
                  Community
                    {isDropdownOpen.services && (
                      <div className="ml-4 mt-2 w-44 rounded-lg shadow bg-white">
                        <ul className="py-2 text-sm text-gray-700">
                          <li><Link href="/membership" className="block px-4 py-2 hover:bg-gray-100">Membership</Link></li>
                          <li><Link href="/events" className="block px-4 py-2 hover:bg-gray-100">Events</Link></li>
                          <li><Link href="/programs"  className="block px-4 py-2 hover:bg-gray-100">Programs</Link></li>
                          <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link></li>
                        </ul>
                      </div>
                    )}
                  </span>
                </li>
                <li className="mb-1">
                <Link href="/partners" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Partners</Link>
                </li>
                <li className="mb-1">
                <Link href="/contact" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Contact</Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl" href="#">Sign up</a>
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-gray-400 font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign In</a>
              </div>
            
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
