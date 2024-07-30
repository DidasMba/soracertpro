"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


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
        <h3 className="tracking-wide text-gray-300 font-semibold">A PROPOS</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Mission et Vision
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Équipe dirigeante
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Partenaires et sponsors
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Membre
            </a>
          </li>
        </ul>
      </div>
        {/* Columns2 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">LIENS RAPIDES</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
             Accueil
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Événements
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Programmes
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Ressources
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Communauté
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Carrières
            </a>
          </li>
        </ul>
      </div>
           {/* Columns3 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">RESSOURCES</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="tel:1234567890" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Guides et tutoriels
            </a>
          </li>
          <li>
            <a href="mailto:company@email.com" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
              Études de cas  
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Vidéos et webinaires
            </a>
          </li>
        </ul>
        
      </div>

     {/* Columns4 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">ENGAGEMENT COMMUNAUTAIRE</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Témoignages des membres
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Histoires de succès
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Programmes de mentorat
            </a>
          </li>
        </ul>
      </div>
         {/* Columns5 */}
      <div className="lg:col-span-2 col-span-12">
        <h3 className="tracking-wide text-gray-300 font-semibold">BOUTIQUE</h3>
        <ul className="list-none mt-6 space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Merchandising
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
            Ressources premium
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
        <h3 className="tracking-wide text-gray-300 font-semibold">CONTACT</h3>
        <ul className="list-none mt-6 space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:1234567890" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
                 1234567890
                </a>
              </li>
              
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <a href="#" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
                 100 Smart Street, LA, USA
                </a>
              </li>
              <li className="flex items-center">
              <FaEnvelope className="mr-2" />
                <a href="mailto:company@email.com" className="text-gray-300 hover:text-customHoverBlue transition-all duration-500 ease-in-out">
                company@email.com
                </a>
              </li>
            </ul>

                        
      </div>

      <div className="flex space-x-4 mt-5">
          <a className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a className="text-white text-2xl hover:text-customHoverBlue transform hover:scale-150 transition-all duration-150 ease-in-out" href="" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

    

    </div>
    <div className="lg:col-span-4 col-span-12 mt-8">
                    <a href="/">
                        <img
                            src="/Soracertlogo.png"
                            width={128}
                            height={82}
                            alt="soracert"
                            className="brand-2"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </a>
                   
                </div>
    
  </div>



  {/* Copyright */}
  <div className="border-t border-slate-700">
  <div className="text-center md:text-right container mx-auto py-7 px-6">
   
        <p className="mb-0">
          &copy; {year}, All Rights Reserved.
        </p>
      </div>
    </div>


    
        </footer>

        
      )
  }
  
  export default Footer; 