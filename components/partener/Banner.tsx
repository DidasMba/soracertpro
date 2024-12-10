/** @format */

"use client";
import Image from "next/image";
import React from "react";
import partImagephone from "@/assets/partphone.png";
import partnerImagecomputer from "@/assets/partcomputer.png";
import SectionHeading from "../common/SectionHeading";

const Banner: React.FC = () => {
    return (
        <div className='w-full h-full md:h-[40svh] min-h-[50svh] lg:px-0 shadow-xl rounded-xl relative'>
            <Image
                className='w-full hidden md:block h-full rounded-xl object-cover'
                src={partnerImagecomputer}
                alt={"banner-patener-mob"}
                width={400}
                height={600}
            />
            <Image
                className='w-full h-full block md:hidden rounded-xl object-cover'
                src={partImagephone}
                alt={"banner-patner-mob"}
                width={400}
                height={600}
            />
            <div className='absolute top-0 right-0 bottom-0 flex items-center  px-4 md:px-8 left-0 text-white w-full z-10 rounded-xl bg-black bg-opacity-60'>
                <div className='max-w-lg w-full flex flex-col gap-8 items-start '>
                    <SectionHeading text='Rejoignez Soracert pour un partenariat stratégique et une croissance mutuelle' />
                    <a
                        className='text-sm md:text-base duration-300 bg-customBlue hover:bg-customHoverBlue font-semibold  px-6 md:py-3 py-2 rounded-full'
                        href='#member-form'
                    >
                        Devenez partenaire
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
