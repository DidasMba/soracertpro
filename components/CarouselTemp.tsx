/** @format */
"use client";
import React from "react";
import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className='relative h-[600px] w-full overflow-hidden'>
            <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'>
                <div className='container mx-auto flex h-full flex-col items-start justify-center px-4 text-white'>
                    <h1 className='mb-4 text-4xl font-bold md:text-5xl lg:text-6xl'>Lorem ipsum</h1>
                    <p className='mb-6 max-w-lg text-lg md:text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className='rounded bg-white px-6 py-2 font-semibold text-gray-800 transition-all hover:bg-gray-200'>
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
}

