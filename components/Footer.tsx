"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import { Button } from "./ui/button";



const Footer = ()=>{
  const [year, setYear] = useState(0);

  useEffect(() => {
      setYear(new Date().getFullYear());
  }, []);
    return(
        <footer className="px-8 bg-customBlue text-white">
           <div className="container mx-auto py-14 ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-4">

                        <div className="">        

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
                            labore et dolore magna aliqua. </p> 

                        </div>
                        <div className="">
                           <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  About us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Legal information</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Contact us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Blog</a>
                            </li>

                           </ul>
                        </div>
                        <div className="">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  About us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Legal information</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Contact us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Blog</a>
                            </li>

                           </ul>

                        </div>
                        <div className=" ">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Phone: 1234567890</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Email: company@email.com</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Location: 100 Smart Street, LA, USA</a>
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
              </div>
          </div>
          
          <div className="mt-18 container mx-auto py-9 "> 
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className=""></div>
            <div className="">
            <div className="mr-8">
              <h3 className="tracking-wide text-gray-300 font-semibold">NEWSLETTER</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-customHoverBlue Transition-all duration-500 ease-in-out"
                                >
                                  Stay upto Date</a>
                            </li>

                           </ul>

            </div>
            </div>
            <div className="sm:grid-cols-1">
            <form className="w-full relative" action="">
              <input 
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none border border-transparent hover:border-customHoverBlue focus:border-customHoverBlue"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required 
              />
              <Button className="bg-gray-500 px-8 py-2 rounded-full w-20 text-white absolute top-0 right-0" type="submit">Submit</Button>
            </form>
            </div> 
            </div>    
          </div>
          <div className="border-t border-slate-700">
            <div className="md:text-left text-center contenair mx-auto py-7 px-6">
              <p className="mb-0">
                &copy;
                 {year}
                , All Rights Reserved.
              </p>
            </div>
          </div>       
      
        </footer>
      
    )
}

export default Footer; 