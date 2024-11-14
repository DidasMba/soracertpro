/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import TestimonialModal from "./TestimonialModal";

const TestimonialTile: React.FC<{
    content: string;
    username: string;
    avatar: string;
    timeAgo: string;
}> = ({ content, username, avatar, timeAgo }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <div className='px-4 flex flex-col gap-4'>
            <div className='rounded-2xl p-6 bg-gray-50 shadow-xl hover:-translate-y-3 duration-300 transition-all ease-in-out'>
                <p className='mb-4 text-gray-700'>
                    {content.substring(0, 170)}...{" "}
                </p>
                <button
                    onClick={() => setOpenModal(true)}
                    className='mb-6 text-sm duration-300 hover:text-blue-700 text-customBlue font-semibold hover:underline '
                >
                    Lire plus
                </button>
            </div>
            <div className='flex items-center gap-3'>
                {avatar ? (
                    <Image
                        src={avatar}
                        alt={username}
                        width={40}
                        height={40}
                        className='rounded-full h-20 w-20'
                    />
                ) : (
                    <div>
                        <img
                            className='h-20 w-20 rounded-full'
                            src={`https://avatar.iran.liara.run/username?username=${username}`}
                            alt={username}
                        />
                    </div>
                )}
                <div>
                    <p className='font-medium font-weight text-gray-700'>
                        {username}
                    </p>
                    <p className='text-sm text-gray-400'>{timeAgo}</p>
                </div>
            </div>
            {openModal && (
                <TestimonialModal
                    avatar={avatar}
                    content={content}
                    timeAgo={timeAgo}
                    setOpenModal={setOpenModal}
                    username={username}
                />
            )}
        </div>
    );
};

export default TestimonialTile;
