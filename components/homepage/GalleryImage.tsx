/** @format */

"use client";

import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Juli from "@/assets/testimonial/julien.png";

interface CarouselImage {
    id: number;
    src: string | StaticImageData;
    alt: string;
    category: string;
}

const images: CarouselImage[] = [
    {
        id: 1,
        src: Juli,
        alt: "AI Project",
        category: "ARTIFICIAL INTELLIGENCE",
    },
    {
        id: 2,
        src: Juli,
        alt: "aiii",
        category: "CLOUD ENGINEERING",
    },
    {
        id: 3,
        src: Juli,
        alt: "App Project",
        category: "APPLICATION ENGINEERING",
    },
    {
        id: 4,
        src: Juli,
        alt: "Data Project",
        category: "DATA & ANALYTICS",
    },
    {
        id: 5,
        src: Juli,
        alt: "AI Project 2",
        category: "ARTIFICIAL INTELLIGENCE",
    },
];

export default function GalleryImage() {
    const settings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='w-full overflow-hidden bg-white py-12'>
            <div className='space-y-8'>
                {/* Top row - right to left */}
                <div className='w-full'>
                    <Slider {...settings} rtl={true}>
                        {images.map((image) => (
                            <div key={image.id} className='px-2'>
                                <div className='relative overflow-hidden rounded-lg'>
                                    <div className='relative h-[400px] w-full overflow-hidden'>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={500}
                                            height={400}
                                            className='object-cove w-full h-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
