/** @format */

"use client";

import "./home.css";
import React from "react";
import banner from "@/assets/banner.png";
import bannerMob from "@/assets/banner-mob.png";

import CountUp from "react-countup";
import { statBanner } from "@/utils/constant";
import Image from "next/image";

const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='bg-slate-500 h-[48.8125rem] md:h-[39.9rem] w-full relative'>
                <Image
                    src={banner}
                    alt='banner'
                    className='w-full h-full object-cover hidden md:block'
                    width={1440}
                    height={638}
                />
                <Image
                    src={bannerMob}
                    alt='banner'
                    className='w-full h-full block md:hidden object-cover'
                    width={1440}
                    height={638}
                />
                <div className='absolute h-full w-full top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50'>
                    <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center h-full'>
                        <div className='text-white w-full md:max-w-xl lg:max-w-2xl flex flex-col gap-6 lg:gap-8 items-start'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl'>
                                Évoluez avec la communauté SoraCert,
                                <br />
                                <span className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'>
                                    innovez avec la technologie.
                                </span>
                            </h1>
                            <p className='font-semibold text-sm lg:text-base'>
                                Nous offrons l'accès à la technologie à ceux qui
                                en ont le plus besoin.
                            </p>
                            <button className='bg-customBlue hover:bg-customButton hover:text-customBlue transition-all ease-in-out duration-300  w-auto text-white px-8 py-3 rounded-3xl text-sm md:text-base font-semibold'>
                                Explorer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-7xl px-4 rounded-lg sm:px-6 lg:px-8 top-[-110px]'>
                <div className='bg-white relative -top-[90px]  rounded-2xl shadow-lg'>
                    <div className='flex p-4 md:p-6 justify-center items-center'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300'>
                            {statBanner.map((item) => (
                                <div
                                    key={item.id}
                                    className='text-center py-4 md:py-0 md:px-4'
                                >
                                    <p className='text-3xl font-bold text-[#05264f]'>
                                        <CountUp
                                            className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'
                                            start={0.0}
                                            duration={3}
                                            end={item.num}
                                        />
                                    </p>
                                    <p className='text-muted-foreground text-xs font-semibold md:text-base text-gray-500'>
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
