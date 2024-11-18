/** @format */

import Image, { StaticImageData } from "next/image";
import React from "react";
import SignButton from "../Button";

const ProgramTile: React.FC<{
    title: string;
    image: string | StaticImageData;
    date: string;
    location: string;
    id: number;
}> = ({ title, image, location, date, id }) => {
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
                                    {date}
                                </small>
                            </div>
                            <p className='text-xs mt-1 text-bold'>{location}</p>
                        </div>
                        <div className='w-full lg:w-1/3 text-center'>
                            <SignButton
                                variant='dark'
                                href={`/programs/${id}`}
                                text='En savoir plus'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProgramTile;
