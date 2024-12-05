// // import Heading from '@/components/common/Heading'
// // import Section from '@/components/common/Section'
// // import Image from "next/image";
// // import Link from 'next/link'
// // import React from 'react'

// // function blogone() {
// //   return (

// //     <section id="faq-2" className="faq-2 section py-5 max-w-8xl mx-auto" >
// //         <div className="flex sm:flex-row flex-col items-center justify-between mt-4  p-3 m-4 max-w-7xl mx-auto">
// //         <div className="mt-4 max-w-5xl  text-5xl py-2 font-extralight">
// //             Python Radio 30: Catch the Fox
// //         </div>


       
// //         </div>

// //         <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
// //                     <div className='rounded lg:h-[90px] h-[150px] lg:w-[180px] w-full'>
// //                         <Image
// //                             src={image}
// //                             alt={title}
// //                             width={270}
// //                             height={135}
// //                             className='w-full h-full rounded-xl object-cover'
// //                             loading='lazy'
// //                         />
// //                     </div>
// //                 </div>
// //       </section>




//   )
// }

// export default blogone


/** @format */

import Image, { StaticImageData } from "next/image";
import React from "react";

import { formatDateTimeToFrench } from "@/helper/funct";

const ProgramTile: React.FC<{
    title: string;
    image: string | StaticImageData;
    date: string;
    location: string;
    slug: string;
}> = ({ title, image, location, date, slug }) => {
    return (
        <article className='card bg-white border p-6 rounded mb-3 relative hover:bg-gray-50'>
            <div className='flex flex-col lg:flex-row lg:gap-6 gap-4'>
                {/* Image Column */}
                <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                    <div className='rounded lg:h-[90px] h-[150px] lg:w-[180px] w-full'>
                        <Image
                            src={image}
                            alt={title}
                            width={270}
                            height={135}
                            className='w-full h-full rounded-xl object-cover'
                            loading='lazy'
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className='w-full lg:w-3/4 flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-col w-full lg:flex-row justify-between items-center lg:items-start'>
                        <div className='w-full lg:w-2/3 mb-4 lg:mb-0'>
                            <h2 className='text-lg font-bold my-2'>{title}</h2>
                      
                            <div className='flex flex-col lg:flex-row items-start lg:items-center text-sm'>
                                <small className='text-blue font-bold mb-1 lg:mb-0 '>
                                    {formatDateTimeToFrench(date)}
                                </small>
                            </div>
                            <p className='text-xs mt-1 text-bold'>{location}</p>
                        </div>
                        {/* <div className='w-full lg:w-1/3 text-center'>
                            <SignButton
                                variant='dark'
                                href={`/programs/${slug}`}
                                text='En savoir plus'
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProgramTile;





