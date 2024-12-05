import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'

import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import {blogueDataDetails} from "@/utils/constant";

const Blogone: React.FC = () => {
   return (

    <section id="faq-2" className="faq-2 section py-5 max-w-8xl mx-auto" >
        <div className="flex sm:flex-row flex-col items-center justify-between mt-4  p-3 m-4 max-w-7xl mx-auto">
        <div className="mt-4 max-w-5xl  text-5xl py-2 font-extralight">
            Python Radio 30: Catch the Fox
        </div>


       
        </div>

        <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                    <div className='rounded lg:h-[90px] h-[150px] lg:w-[180px] w-full'>
                    {blogueDataDetails.map((image, index) => (
                            <div
                                key={index}
                                className='w-full rounded-xl md:h-[40svh] h-auto'
                            >
                                <Image
                                    src={image.image}
                                    alt={image.alt}
                                    width={700}
                                    height={500}
                                    className='object-cover w-full h-full rounded-xl'
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                </div>
        </div>
      </section>
  )
}

export default Blogone








