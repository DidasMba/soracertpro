import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 overflow-hidden">
      <a href="#home" className="float-left text-white text-center py-3 px-4 text-lg no-underline hover:bg-red-600">
        Home
      </a>
      <a href="#news" className="float-left text-white text-center py-3 px-4 text-lg no-underline hover:bg-red-600">
        News
      </a>
      <div className="relative float-left">
        <button className="text-white text-lg py-3 px-4 bg-gray-800 focus:outline-none">
          Dropdown
          <i className="ml-2 fa fa-caret-down"></i>
        </button>
        <div className="absolute hidden bg-white min-w-[160px] shadow-md z-10">
          <a href="#" className="block text-black py-3 px-4 hover:bg-gray-200">Link 1</a>
          <a href="#" className="block text-black py-3 px-4 hover:bg-gray-200">Link 2</a>
          <a href="#" className="block text-black py-3 px-4 hover:bg-gray-200">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;