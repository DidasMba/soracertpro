"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";


const Footer = ()=>{
    const [year, setYear] = useState(0);
  
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
      return(
        <footer className="px-8 bg-customBlue text-white">
  <div className="container mx-auto py-14 px-6">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Columns1 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY1</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Legal information
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Blog
            </a>
          </li>
        </ul>
      </div>
        {/* Columns2 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY2</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Legal information
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Blog
            </a>
          </li>
        </ul>
      </div>
           {/* Columns3 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY3</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="tel:1234567890" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Phone: 1234567890
            </a>
          </li>
          <li>
            <a href="mailto:company@email.com" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Email: company@email.com
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Location: 100 Smart Street, LA, USA
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 mt-5">
          <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

     {/* Columns4 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">NEW COLUMN 1</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 3
            </a>
          </li>
        </ul>
      </div>
         {/* Columns5 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">NEW COLUMN 2</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 3
            </a>
          </li>
        </ul>
      </div>
          {/* Columns6 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">NEW COLUMN 3</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 2
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Link 3
            </a>
          </li>
        </ul>
      </div>

    </div>
    {/* Newsletter */}
    <div className="mt-18 lg:col-span-12 col-span-12 py-9">
      {/* Add newsletter form here */}
    </div>
    {/* Copyright */}
    <div className="border-t border-slate-700">
      <div className="md:text-left text-center container mx-auto py-7 px-6">
        <p className="mb-0">
          &copy; {year}, All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

        
      )
  }
  
  export default Footer; 