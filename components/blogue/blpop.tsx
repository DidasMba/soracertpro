import React from 'react'
import Heading from "@/components/common/Heading"
import Link from "next/link";

const Blpop = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0'>
            <Heading
                text={`Nos articles les plus lus`}
    
            /> 
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className="group relative">
                <Link href='/blog/1'>
                    <img
                        alt='Choose the right property'
                        className='h-[18rem] w-full object-cover rounded-lg mb-4'
                        height='200'
                        src='/blog-1.png'
                        style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                        width='200'
                    />
                    <h3 className='text-lg font-semibold'>5G : Impacts et opportunités pour les entreprises en 2024
                    </h3>
                    <p className='text-sm text-gray-600 mt-1'>Publié le 5 novembre 2024
                    </p>
                    <div className='py-2'></div>
                </Link>
            </div>
            <div className='flex flex-col'>
                <Link href='/blog/2'>
    
                    <img
                        alt='Best environment for rental'
                        className='h-[18rem] w-full object-cover rounded-lg mb-4'
                        height='200'
                        src='/blog-2.png'
                        style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                        width='200'
                    />
                    <h3 className='text-lg font-semibold'>
                    Les dernières innovations en matière d'intelligence artificielle
                    </h3>
                    <p className='text-sm text-gray-600 mt-1'>Publié le 14 novembre 2024</p>
                    <div className='py-2'></div>
                </Link>
            </div>
            <div className='flex flex-col'>
                <Link href='/blog/3'>
                    <img
                        alt='Boys Hostel Apartment'
                        className='h-[18rem] w-full object-cover rounded-lg mb-4'
                        height='200'
                        src='/blog-3.png'
                        style={{
                            aspectRatio: "200/200",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                        width='200'
                    />
                    <h3 className='text-lg font-semibold'>
                    Les technologies qui redéfinissent l'avenir du cloud computing
                    </h3>
                    <p className='text-sm text-gray-600 mt-1'>Publié le 10 novembre 2024</p>
                    <div className='py-2'></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Blpop;




