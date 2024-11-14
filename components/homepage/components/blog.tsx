/** @format */

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Component() {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='text-start max-w-2xl'>
                <h2
                    className='text-3xl font-bold leading-tight text-gray-900'
                    style={{ textTransform: "uppercase" }}
                >
                    Latest Blog Articles
                </h2>
                <div className='mt-4 mb-12 h-1 w-24 bg-black' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col'>
                    <Link href='/blog/1'>
                        <img
                            alt='Choose the right property'
                            className='h-[18rem] w-full object-cover rounded-lg mb-4'
                            height='200'
                            src='/blog-1.png'
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            width='200'
                        />
                        <h3 className='text-lg font-semibold'>Lorem Ipsum</h3>
                        <p className='text-sm text-gray-600 mt-1'>Workshops</p>
                        <div className='py-2'></div>
                    </Link>
                </div>
                <div className='flex flex-col'>
                    <Link href='/blog/2'>
                        <img
                            alt='Best environment for rental'
                            className='h-[18rem] w-full object-cover rounded-lg mb-4'
                            height='200'
                            src='/blog-2.png'
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            width='200'
                        />
                        <h3 className='text-lg font-semibold'>
                            Best environment for rental
                        </h3>
                        <p className='text-sm text-gray-600 mt-1'>Lifestyle</p>
                        <div className='py-2'></div>
                    </Link>
                </div>
                <div className='flex flex-col'>
                    <Link href='/blog/3'>
                        <img
                            alt='Boys Hostel Apartment'
                            className='h-[18rem] w-full object-cover rounded-lg mb-4'
                            height='200'
                            src='/blog-3.png'
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            width='200'
                        />
                        <h3 className='text-lg font-semibold'>
                            Boys Hostel Apartment
                        </h3>
                        <p className='text-sm text-gray-600 mt-1'>Property</p>
                        <div className='py-2'></div>
                    </Link>
                </div>
            </div>
            <div className='mt-8 text-center'>
                <div className='bg-transparent px-4 py-8'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center rounded-full bg-[#05264f] px-2 py-1'>
                                <Link
                                    href='/blog'
                                    className='w-[157px] py-2 rounded-4xl bg-[#05264f] flex flex-row items-start justify-start pt-2 px-[19px] pb-[7px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#fff]'
                                    style={{ borderRadius: "20px" }}
                                >
                                    <button className='[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]'>
                                        View All Blog
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
