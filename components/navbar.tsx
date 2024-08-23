"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        {/* Conteneur du logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="#" className="flex items-center">
           
            <img src="/logoblack.png" alt="soracert Logo" width={100} height={100} className="h-8" />
       
          </a>
        </div>
        
        {/* Conteneur des liens de navigation */}
        <div className="justify-start hidden md:flex md:space-x-8 rtl:space-x-reverse flex-grow">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-customHoverBlue  md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Accueil</a>
            </li>
            <li className="relative">
              <button 
                id="mega-menu-dropdown-button" 
                onClick={toggleDropdown} 
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-customHoverBlue  dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projets <FaChevronDown className="w-2.5 h-2.5 ms-3" />
              </button>
              {isDropdownOpen && (
                <div id="mega-menu-dropdown" className="absolute z-10 grid w-auto md:w-[500px] md:top-10 md:right-100 grid-cols-2 text-sm bg-white border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 font-normal rounded dark:bg-gray-700">
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-customHoverBlue  dark:hover:text-customHoverBlue ">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-customHoverBlue  dark:hover:text-customHoverBlue ">
                          Libra
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400  hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-customHoverBlue  dark:hover:text-customHoverBlue">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Événements</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Programmes</a>
            </li>
          </ul>
        </div>

        {/* Boutons Login et Sign up */}
        <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse md:order-2">
          <a href="#" className="text-black bg-gray-100  font-normal rounded  dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">S'inscrire</a>
          <a href="#" className="text-black bg-customHoverBlue  font-normal rounded  hover:bg-customHoverBlue  focus:ring-4 focus:ring-blue-300 text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Se connecter</a>
          <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
