/** @format */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { programmData } from "@/utils/constant";
import Section from "../common/Section";
import SignButton from "../Button";

const Header = () => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false,
    };
    return (
        <Section id='header'>
            <div className='w-full grid lg:grid-cols-5 grid-cols-1 gap-8'>
                <div className='overflow-hidden w-full lg:col-span-3 col-span-1 rounded-xl bg-white'>
                    <Slider {...settings} className='h-full'>
                        {programmData.map((image, index) => (
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
                    </Slider>
                </div>
                <div className='lg:col-span-2 col-span-1 flex items-center'>
                    <div className='flex flex-col items-start gap-8'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-customBlue max-w-4xl'>
                            Bootcamps Soracert :
                            <br />
                            <span className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'>
                                Former les innovateurs de demain avec
                                apprentissage pratique et mentorat expert.
                            </span>
                        </h1>
                        <SignButton
                            variant='dark'
                            href='#'
                            text='Explorer nos programmes'
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Header;
