import Image from "next/image";
import React from 'react';
import pro1 from "./images/pro1.jpg";
import {FaMapMarkerAlt, FaCalendarAlt, FaShareAlt, FaHeart, FaDollarSign } from "react-icons/fa";

// Ajoute le champ pour le prix dans les données des événements
const events = [
  {
    src: "/so4.jpg",
    date: "29 June 2024",
    title: "Nom de l'événement 1",
    location: "Localisation 1",
    rating: 4.5,
    price: "From 80 $"  // Ajoute le prix ici
  },
  {
    src: "/so1.jpg",
    date: "30 June 2024",
    title: "Nom de l'événement 2",
    location: "Localisation 2",
    rating: 4.7,
    price: "Free"  // Ajoute le prix ici
  },
  {
    src: "/bien.jpg",
    date: "01 July 2024",
    title: "Nom de l'événement 3",
    location: "Localisation 3",
    rating: 4.8,
    price: "From 50 $"  // Ajoute le prix ici
  }
];

export default function Fleets() {
  return (
    <div className='py-2'>
      <div className='container mx-auto px-4'>
        {/* Barre de navigation */}
        <div className="relative bg-customBlue min-h-10 h-auto px-2 sm:px-4 py-2 rounded-full flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col sm:flex-row flex-grow items-center sm:items-center text-center space-y-1 sm:space-y-0 sm:space-x-2 text-white">
            <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Billetterie</a>
            <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Concours</a>
            <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Contenu Multimédia</a>
            <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Sponsors et Partenaires</a>
          </div>
          <a href="#" className="text-black font-bold bg-customHoverBlue rounded-2xl focus:ring-4 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 focus:outline-none mt-2 sm:mt-0 text-center">
            Programme et Agenda
          </a>
        </div>

        {/* Cartes d'événements */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {events.map((event, index) => (
            <div key={index} className=''>
              <div className='relative image-rounded'>
                <Image
                  className="imagepro"
                  src={event.src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 px-2 sm:px-4 py-2 bg-black bg-opacity-50 text-white text-xs sm:text-sm flex items-center">
                  <FaCalendarAlt className="mr-2" /> {event.date}
                </div>
                <div className="absolute bottom-0 right-0 px-4 py-2 flex space-x-4">
                  <FaShareAlt className="text-white text-3xl" />
                  <FaHeart className="text-white text-3xl" />
                </div>
              </div>
              <div className="px-4 sm:px-6 py-4">
                <div className="texteone font-bold text-lg sm:text-xl mb-2">{event.title}</div>
                <p className="text-gray-700 text-base flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> {event.location}
                </p>
                <p className="text-gray-700 text-base flex items-center mt-2">
                  <FaDollarSign className="mr-2" /> {event.price}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section des événements passés */}
      <div className='container mx-auto px-4'>
        <h1 className="px-4 sm:px-10 py-6 font-bold text-2xl sm:text-3xl text-center">Événements Passés</h1>
        <div className="grid gap-6 sm:grid-cols-10 m-4">
          <div className="sm:col-span-4 min-h-[270px] image-rounded shadow ml-0 sm:ml-14 relative">
            <Image src="/bien.jpg" alt="Événement Passé 1" layout="fill" objectFit="cover" />
          </div>
          <div className="sm:col-span-6 min-h-[270px] image-rounded shadow mr-0 sm:mr-12 relative">
            <Image src="/so1.jpg" alt="Événement Passé 2" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-10 m-4">
          <div className="sm:col-span-6 min-h-[270px] image-rounded shadow ml-0 sm:ml-14 relative">
            <Image src={pro1} alt="Événement Passé 3" layout="fill" objectFit="cover" />
          </div>
          <div className="sm:col-span-4 min-h-[270px] image-rounded shadow mr-0 sm:mr-12 relative">
            <Image src="/so2.jpg" alt="Événement Passé 4" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

