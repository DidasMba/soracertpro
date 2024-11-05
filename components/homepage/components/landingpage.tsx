'use client';

import './home.css';
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { statBanner } from '@/utils/constant';

const HomePage = () => {
  const slides = [
    {
      id: 1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia placeat non, excepturi facere dolores fugit quos impedit, in minus rerum quis. Consectetur ratione nemo fugiat repudiandae corporis magnam ad!',
    },
    {
      id: 2,
      title: 'consectetur elit 2',
      description: 'Step into elegance with this beautifully designed interior. Every detail has been thoughtfully curated to create a harmonious and inviting space. Perfect for those who appreciate refined aesthetics and a cozy atmosphere.',
      imageUrl: '/blog-3.png',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => setActiveSlide(next),
  };

  return (
    <section className='containemain '>
      <Slider ref={sliderRef} {...settings} className='w-full'>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div
              className={`slide-container p-2 h-[80vh] bg-cover bg-no-repeat flex justify-start text-left ${index === activeSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              <div className="overlay"></div>
              <div className="text-container flex-col p-8">
                <div className='container'>
                  <h1 className="text-5xl font-bold py-4" data-aos="zoom-out">{slide.title}</h1>
                  <p className="mt-4 max-w-2xl text-xl py-2 font-light" data-aos="zoom-out" data-aos-delay="200">
                    {slide.description}
                  </p>
                  <button className="w-[157px] py-2 rounded-4xl  bg-customHoverBlue flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
                    <a className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1] ">
                      Learn more
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </Slider>
      <div className="mx-auto max-w-7xl px-4 rounded-lg sm:px-6 lg:px-8 top-[-110px]">
        <div className="bg-white relative -top-[90px]  rounded-2xl shadow-lg">
          <div className="flex p-4 md:p-6 justify-center items-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {statBanner.map((item) => (
                <div key={item.id} className="text-center py-4 md:py-0 md:px-4">
                  <p className="text-3xl font-bold text-[#05264f]">
                    <CountUp start={0.0}duration={3} end={item.num} />
                  </p>
                  <p className="text-muted-foreground font-extralight">{item.label}</p>
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
