import Image from "next/image";
import React from 'react';
import pro1 from "./images/pro1.jpg";

export default function Fleets() {
  return (
    <div className='py-2'>
      <div className='container mx-auto px-4'>
      <div className="relative bg-customBlue min-h-10 h-auto px-2 sm:px-4 py-2 rounded-full flex flex-col sm:flex-row items-start sm:items-center">
  <div className="flex flex-col items-center justify-center sm:flex-row flex-grow space-y-1 sm:space-y-0 sm:space-x-2 text-white">
    <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Billetterie</a>
    <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Concours</a>
    <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Contenu Multimédia</a>
    <a href="#" className="px-2 sm:px-4 text-xs sm:text-sm">Sponsors et Partenaires</a>
  </div>
  <a href="#" className="text-black font-bold bg-customHoverBlue rounded-2xl focus:ring-4 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 focus:outline-none mt-2 sm:mt-0">
    Programme et Agenda
  </a>
</div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className=''>
              <div className='relative image-rounded'>
                <Image
                  className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                <div className="absolute bottom-0 left-0 px-2 sm:px-4 py-2 bg-black bg-opacity-50 text-white text-xs sm:text-sm">
                  29 June 2024
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-4">
                <div className="texteone font-bold text-lg sm:text-xl mb-2">Nom de l'événement</div>
                <p className="text-gray-700 text-base">Localisation</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto px-4'>
        <h1 className="px-4 sm:px-10 py-6 font-bold text-2xl sm:text-3xl text-center ">Événements Passés</h1>
        <div className="grid gap-6 sm:grid-cols-10 m-4">
          <div className="sm:col-span-4 min-h-[270px] image-rounded shadow ml-0 sm:ml-14 relative">
            <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
          </div>
          <div className="sm:col-span-6 min-h-[270px] image-rounded shadow mr-0 sm:mr-12 relative">
            <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-10 m-4">
          <div className="sm:col-span-6 min-h-[270px] image-rounded shadow ml-0 sm:ml-14 relative">
            <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
          </div>
          <div className="sm:col-span-4 min-h-[270px] image-rounded shadow mr-0 sm:mr-12 relative">
            <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
