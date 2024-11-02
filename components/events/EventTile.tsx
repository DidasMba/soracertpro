/** @format */

import React from "react";

const EventTile: React.FC<{
    title: string;
    category: string;
    image: string;
    date: string;
    location: string;
}> = ({ title, image, location, date, category }) => {
    return (
        <article className='card  rounded mb-3 relative hover:bg-gray-50'>
            <div className='flex flex-col lg:flex-row lg:gap-6 gap-4'>
                {/* Image Column */}
                <div className='w-full lg:w-1/4 mb-4 lg:mb-0'>
                    <div className='rounded overflow-hidden'>
                        <img
                            src={image}
                            srcSet='https://www-img.lewagon.com/VsD1XzqdVUNUtXl3BMosDoju9IfzulSnSoO3aR2GvYc/rs:fill:540:270/plain/s3://wagon-www/w8zpkhwi22ag51yz4rp1bf5a3t35 2x, https://www-img.lewagon.com/6vtJYbvc7CWGJA8DfkQEGmtoUdpADsXX7CHkvIpWBSY/rs:fill:270:135/plain/s3://wagon-www/w8zpkhwi22ag51yz4rp1bf5a3t35 270w'
                            alt='Alumni Stories: From bootcamp to the gaming industry'
                            width='270'
                            height='135'
                            className='w-full h-full object-cover'
                            loading='lazy'
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className='w-full lg:w-3/4 flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-col w-full lg:flex-row justify-between items-center lg:items-start'>
                        <div className='w-full lg:w-2/3 mb-4 lg:mb-0'>
                            <span className='bg-[#a3c2cd] text-customBlue px-2 py-1 rounded uppercase text-xs font-semibold'>
                                {category}
                            </span>
                            <h2 className='text-lg font-bold my-2'>{title}</h2>

                            <div className='flex flex-col lg:flex-row items-start lg:items-center text-sm'>
                                <small className='text-red-600 font-bold mb-1 lg:mb-0 '>
                                    {date}
                                </small>
                            </div>
                            <p className='text-xs mt-1 text-bold'>{location}</p>
                        </div>
                        <div className='w-full lg:w-1/3 text-center'>
                            <a
                                href=''
                                className='text-white font-bold py-2 lg:py-5 rounded w-full block transition rounded-1xl  bg-customBlue'
                            >
                                Enregistrer Maintenant
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default EventTile;
