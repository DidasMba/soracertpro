import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  {
    name: 'Team',
    href: '#',
    current: false,
    icon: <FaChevronDown />,
    subItems: [
      { name: 'Team 1', href: '#team1' },
      { name: 'Team 2', href: '#team2' },
      { name: 'Team 3', href: '#team3' },
    ],
  },
  { name: 'Projects', href: '#', current: false },
  { name: 'Événements', href: '#', current: false },
  { name: 'Programmes', href: '#', current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
          <Image src="/logoblack.png" alt="soracert Logo" width={100} height={100} className="h-auto w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-black' : 'text-black hover:text-customHoverBlue',
                      'rounded-md px-3 py-2 text-sm font-bold',
                    )}
                  >
                    {item.name}
                    
                   
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <FaSearch className='mr-6' />
          

            {/* signup */}
            <div className="main-manu-btn flex  mr-4">
            
            <a href="/request-demo" className="home-s8-btn main-nav-feature-btn text-center hover:bg-gray-50 text-black bg-gray-100  px-4 py-2 font-normal rounded">Se connecter</a>
            </div>
            {/* signup */}
            <div className="main-manu-btn flex justify-end">
              <a href="/request-demo" className="home-s8-btn main-nav-feature-btn text-center bg-customHoverBlue text-black   px-4 py-2 font-normal rounded">Se connecter</a>
            </div>


          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
           
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
