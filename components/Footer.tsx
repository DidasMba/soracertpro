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
            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                {/* First Column */}
                <div className="lg:col-span-4 col-span-12">
                    <a href="/">
                        <img
                            src="./Soracertlogo.png"
                            width={128}
                            height={82}
                            alt="soracert"
                            className="brand-2"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </a>
                    <p className="text-gray-300 text-base">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
  
                {/* Second, Third, and Fourth Columns */}
                <div className="lg:col-span-8 max-w-8xl mx-auto col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                    <div className="lg:col-span-4  col-span-6">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY1</h3>
                        <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Legal information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
  
                    <div className="lg:col-span-4  col-span-6">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY2</h3>
                        <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Legal information
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
  
                    <div className="lg:col-span-4  col-span-12">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY3</h3>
                        <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Phone: 1234567890
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Email: company@email.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                    Location: 100 Smart Street, LA, USA
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-5">
                            <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out " href="">
                                <FaFacebook />
                            </a>
                            <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out " href="">
                                <FaTwitter />
                            </a>
                            <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out " href="">
                                <FaInstagram />
                            </a>
                            <a className="text-white hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out " href="">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
  
                   {/* Newsletter */}
                   <div className="mt-18  lg:col-span-12 col-span-12  py-9 w-full flex flex-col md:flex-row "> 
            <div className="sm:w-1/3 w-full">
            <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-[#fff] ">NEWSLETTER</h2>
            <p className="text-sm text-[#fff]">Stay Up to Date</p>
          </div>
            </div>
            <div className="sm:w-2/3  w-full flex sm:items-center items-start rounded-full bg-white px-4 py-2 ">
            <input
              className="flex h-10 w-full rounded-full border-none border-input px-3 py-2 text-black bg-transparent text-sm outline-none"
              placeholder="Your Email..."
              type="email"
              id="newsletter-emai"
            />
            <button className="inline-flex items-center justify-center  rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-2 bg-[#00224d]  text-white hover:bg-[#ff751a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            </div>
            
          </div>
                </div>
  
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