import Image from "next/image"
import React from 'react'
import pro1 from "./images/pro1.jpg";



export default function Fleets() {
  return (
    <div className='py-24 bg-gray-200'>
        <div className='container'>
            <h4 className='uppercase front-semibold text-center mb-1 text-red-700 text-xl'>{`vienss`}</h4>
            <h2>chooser your </h2>
           <div className='grid grid-cols-3 gap-5 mt-10'>
            <div className='rounded-2xl overflow-hidden shadow-lg'>
                <div className='relative image-rounded'>
                <Image className="imagepro" src={pro1} alt="Pro 1" width={500} height={500} />
                <div className="absolute right-0 bottom-0"></div>
              
                </div>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lo ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
                </p>
             </div>
            </div>
            <div className='bg-green-500'>feets</div>
            <div className='bg-green-500'>feets</div>

            </div>
        </div>
       
    </div>
    
  )
}
