/** @format */

"use client";
import Image from "next/image";
import React from "react";
import Juli from "@/assets/testimonial/julien.png";
import Paragrah from "@/components/common/Paragrah";
import AnimatedWavingHand from "./WaveHands";
import { FaWindowClose } from "react-icons/fa";

const TestimonialModal: React.FC<{
    content: string;
    username: string;
    avatar: string;
    timeAgo: string;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ content, username, avatar, setOpenModal, timeAgo }) => {
    return (
        <div className='fixed inset-0 backdrop-blur-md w-full z-[999] flex items-center h-full top-0 right-0 bottom-0 left-0'>
            <div className='px-6 py-4 max-w-xl w-full mx-auto bg-white text-gray-800 rounded-xl shadow-md'>
                <div className='flex justify-end w-full'>
                    <button
                        onClick={() => setOpenModal(false)}
                        className='text-gray-700'
                    >
                        <FaWindowClose size={23} />
                    </button>
                </div>

                <div>
                    <h5 className='text-sm lg:text-base mt-3 font-bold'>
                        Experience de {username} 😊🚀
                    </h5>
                    <span className='text-xs lg:text-sm mt-3 text-gray-400'>
                        {timeAgo}
                    </span>
                </div>

                <Paragrah text={content} />
                <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
                    <div className='my-2 rounded-xl w-48 h-48 lg:w-54 lg:h-54 '>
                        <Image
                            className='h-full rounded-xl object-cover w-full'
                            src={avatar ? avatar : Juli}
                            alt={username}
                            width={200}
                            height={208}
                        />
                    </div>
                    <div className='w-full flex items-center '>
                        <AnimatedWavingHand />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialModal;
