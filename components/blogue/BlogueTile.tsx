/** @format */

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

const BlogueTile: React.FC<{
    title: string;
    titredescription: string;
    image: string;
    date: string;

    id: string;
}> = ({ title, titredescription, image, date, id }) => {
    return (
        <article className='card bg-white border-b p-6 rounded mb-3 relative hover:bg-gray-50'>
            <div className='flex flex-col lg:flex-row lg:gap-6 gap-4'>
                {/* Content Column */}
                <div className='w-full lg:w-3/4 flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-col w-full lg:flex-row justify-between items-center lg:items-start'>
                        <div className='w-full lg:w-2/3 mb-4 lg:mb-0'>
                            <h2 className='text-lg font-bold my-2'>{title}</h2>
                            {/* <p className='text-xs mt-1 text-bold'>
                                {titredescription}
                            </p> */}
                            <div className='flex flex-col lg:flex-row items-start lg:items-center text-sm'>
                                <small className='text-blue font-bold mb-1 lg:mb-0 '>
                                    {date}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Column */}
                <Link href={`/sora/blogue/${id}`}>
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
                </Link>
            </div>
        </article>
    );
};

export default BlogueTile;
