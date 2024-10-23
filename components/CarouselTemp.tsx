/** @format */
"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// You'll need to install these packages:
// npm install react-slick @types/react-slick slick-carousel

interface SlideProps {
    image: string;
    title: string;
    description: string;
}

const slides: SlideProps[] = [
    {
        image: "/placeholder.svg?height=600&width=1200",
        title: "Lorem ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200",
        title: "Dolor sit amet",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200",
        title: "Consectetur adipiscing",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
];

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className='absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-800 shadow-md transition-all hover:bg-gray-100'
        >
            <ChevronRight className='h-6 w-6' />
        </button>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className='absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-800 shadow-md transition-all hover:bg-gray-100'
        >
            <ChevronLeft className='h-6 w-6' />
        </button>
    );
};

export default function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div className='absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0'>
                <ul className='flex flex-row items-center md:flex-col'>
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: () => (
            <button className='mx-1 h-2 w-2 rounded-full bg-white opacity-50 transition-all hover:opacity-100 focus:opacity-100 md:my-1'></button>
        ),
    };

    return (
        <div className='relative overflow-hidden'>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className='relative h-[600px] w-full'>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className='h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-50'>
                            <div className='container mx-auto flex h-full flex-col items-start justify-center px-4 text-white'>
                                <h1 className='mb-4 text-4xl font-bold md:text-5xl lg:text-6xl'>
                                    {slide.title}
                                </h1>
                                <p className='mb-6 max-w-lg text-lg md:text-xl'>
                                    {slide.description}
                                </p>
                                <button className='rounded bg-white px-6 py-2 font-semibold text-gray-800 transition-all hover:bg-gray-200'>
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
