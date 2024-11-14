/** @format */

import SectionHeading from "@/components/common/SectionHeading";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Separator: React.FC<{
    title: string;
    description: string;
    imgUrl: string | StaticImageData;
    imgUrlMob: string | StaticImageData;
    id: string;
}> = ({ title, description, imgUrlMob, imgUrl, id }) => {
    return (
        <section className='w-full my-10 px-4 md:px-0 ' id={id}>
            <div className='w-full h-full md:h-[40svh] min-h-[50svh] lg:px-0 max-w-7xl mx-auto shadow-xl rounded-xl relative'>
                <Image
                    className='w-full hidden md:block h-full rounded-xl object-cover'
                    src={imgUrl}
                    alt={title}
                    width={400}
                    height={600}
                />
                <Image
                    className='w-full h-full block md:hidden rounded-xl object-cover'
                    src={imgUrlMob}
                    alt={title}
                    width={400}
                    height={600}
                />
                <div className='absolute top-0 right-0 bottom-0 flex items-center justify-end px-4 md:px-8 left-0 text-white w-full z-10 rounded-xl bg-black bg-opacity-60'>
                    <div className='max-w-lg w-full flex flex-col gap-8 items-center '>
                        <SectionHeading text={title} />
                        <p className='text-sm md:text-base font-medium'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Separator;
