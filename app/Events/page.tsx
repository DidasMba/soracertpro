import Image from "next/image"
import React from 'react'
import pro1 from "./images/pro1.jpg";
//import 'swiper/css';
//import 'swiper/css/pagination;
//import { Pagination } from 'swiper';

export default function Fleets() {
  return (
    <div className='py-24'>

      <div className='container'>
      <div className="ok ok relative bg-customBlue h-10 px-6 py-2 text-white rounded-full workshop-list ">  
          <a href="#" className=" px-4">Workshop</a>
          <a href="#" className=" px-4">Workshop</a>
          <a href="#" className=" px-4">Workshop</a>
          <a href="#" className=" px-4">Workshop</a>
         
          </div> 
        
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                      <p className="text-gray-700 text-base">
                        Localisation 
                      </p>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                    <p className="text-gray-700 text-base">
                    Localisation.
                    </p>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                    <p className="text-gray-700 text-base">
                    Localisation.
                    </p>
               </div>
            </div>
          </div>
      </div>

      <div className='container'>
        
          

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
                <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                      <p className="text-gray-700 text-base">
                      Localisation
                      </p>
               </div>
             
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                    <p className="text-gray-700 text-base">
                    Localisation
                    </p>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                     <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                        29 June 2024 {/* Date à ajouter ici */}
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                          <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                     </div>
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Nom de l'événement
                    </div>
                    <p className="text-gray-700 text-base">
                    Localisation
                    </p>
               </div>
            </div>
          </div>
      </div>

      <div className='container'>

<h1 className="px-10 py-6 font-bold text-3xl text-center ">Past Events</h1>

 
<div className='container'>

<div className="m-4 grid gap-6 sm:grid-cols-10">
     {/* Première colonne */}
     <div className="sm:col-span-4 min-h-[270px] image-rounded  shadow ml-14 relative">
        <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
     </div>
     {/* Deuxième colonne */}
     <div className="sm:col-span-6 min-h-[270px] image-rounded shadow mr-12 relative">
        <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
     </div>
</div>

<div className="m-4 grid gap-6 sm:grid-cols-10">

      {/* Deuxième colonne */}
      <div className="sm:col-span-6 min-h-[270px] image-rounded shadow  ml-14 relative">
        <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
     </div>
     {/* Première colonne */}
     <div className="sm:col-span-4 min-h-[270px] image-rounded  shadow mr-12 relative">
        <Image src={pro1} alt="Pro 1" layout="fill" objectFit="cover" />
     </div>
    
</div>
</div>
  
      </div>
      
      
    </div>

    





  )
}
