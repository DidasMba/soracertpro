import Image from "next/image"
import React from 'react'
import pro1 from "./images/pro1.jpg";



export default function Fleets() {
  return (
    <div className='py-24'>
      <div className='container'>
          <h4 className=''>vienss</h4>
          <div className="bg-green-500 rounded-lg h-10">Workshop</div>  
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
                <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lo ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
                    </p>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
                <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lo ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
                    </p>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
                <div className='relative image-rounded'>
                    <Image
                     className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset
                    </div>
                    <p className="text-gray-700 text-base">
                      Lo ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
                    </p>
               </div>
            </div>
          </div>
      </div>
    </div>
  )
}
