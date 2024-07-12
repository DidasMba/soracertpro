'use client';

import './home.css';
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const slides = [
    {
      id: 1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia placeat non, excepturi facere dolores fugit quos impedit, in minus rerum quis. Consectetur ratione nemo fugiat repudiandae corporis magnam ad!',
      imageUrl: '/Bg-image.png',
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
    beforeChange: (current:any, next:any) => setActiveSlide(next),
  };

  return (
    <section className='containemain '>
      <Slider ref={sliderRef} {...settings} className='w-full'>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div
              className={`slide-container p-2 h-auto sm:h-screen flex justify-start text-left ${index === activeSlide ? 'active' : ''}`}
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
                  <button className="w-[157px] py-2 rounded-4xl bg-[#fff] flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
                    <a className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]">
                      Learn more
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomePage;
