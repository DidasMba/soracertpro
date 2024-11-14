/** @format */
"use client";
import React from "react";
import Section from "../../common/Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import voda from "@/assets/images.png";
import Image from "next/image";

const OurPartner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <Section id='partner'>
            <div className='relative'>
                <div className='absolute left-0 w-full flex items-center max-w-[300px] backdrop-blur-md bg-white bg-opacity-40 top-0 z-20 bottom-0 px-2'>
                    <h1 className='text-xl font-bold text-[#05264f] mb-1 py-4'>
                        Les leaders technologiques font le partenaria avec
                        Soracert
                    </h1>
                </div>
                <div className=''>
                    <div className='slider-container'>
                        <Slider {...settings}>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div>
                                <Image
                                    src={voda}
                                    alt='voda'
                                    width={150}
                                    height={40}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default OurPartner;
