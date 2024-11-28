"use client";

import "./landing.css";
import React from "react";
import banner from "@/assets/banner.png";
import bannerMob from "@/assets/banner-mob.png";
import CountUp from "react-countup";
import { statBanner } from "@/utils/constant";
import Image from "next/image";

const HeroSection = () => {
  return (
    // <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/bg-aboutus.png)" }}>
    //   <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
    //     <div className="content  p-2 sm:p-8 rounded-3xl max-w-3xl items-center">
    //       <h2 className="text-white  text-4xl sm:text-7xl font-bold mb-10">Lorem ipsum
    //       </h2>
    //       <p className="mt-4 text-white max-w-2xl mx-auto text-xl py-2 font-extralight">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //       </p>
    //       <div className="bg-transparent px-4 py-8">
    //         <div className="max-w-7xl mx-auto">
    //           <div className="flex flex-col items-start">
    //             <div className="flex items-center rounded-full bg-white px-4 py-2">
    //             <button className="w-[157px] py-2 rounded-4xl bg-[#fff] flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
    //                 <a className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]">
    //                  Contact Us
    //                 </a>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                            Votre portail 
                                <br />
                                <span className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'>
                                vers l’excellence technologique et éducative
                                </span>
                            </h1>
                            <p className='font-semibold text-sm lg:text-base'>
                            Une combinaison unique de formation, certifications et événements technologiques
                            </p>
                            {/* <button className='bg-customBlue hover:bg-customButton hover:text-customBlue transition-all ease-in-out duration-300  w-auto text-white px-8 py-3 rounded-3xl text-sm md:text-base font-semibold'>
                                Explorer
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mx-auto max-w-7xl px-4 rounded-lg sm:px-6 lg:px-8 top-[-110px]'>
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
            </div> */}
        </section>
  );
};

export default HeroSection;
