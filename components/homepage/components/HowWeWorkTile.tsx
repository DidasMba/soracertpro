/** @format */

import Heading from "@/components/common/Heading";
import Paragrah from "@/components/common/Paragrah";
import Image from "next/image";
import React from "react";

const HowWeWorkTile: React.FC<{
    title: string;
    imageURL: string;
    content: string;
    isReverted?: boolean;
}> = ({ title, imageURL, isReverted = false, content }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-6 md:my-8'>
            <div
                className={`md:h-[400px] max-h-[400px] ${
                    isReverted ? "md:order-2" : "md:order-1"
                } rounded-xl  overflow-hidden`}
            >
                <Image
                    src={imageURL}
                    width={300}
                    height={400}
                    alt={title}
                    className='object-cover w-full rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105 '
                />
            </div>
            <div
                className={`${
                    isReverted ? "md:order-1" : "md:order-1"
                } flex items-center`}
            >
                <div>
                    <Heading text={title} />
                    <Paragrah text={content} />
                </div>
            </div>
        </div>
    );
};

export default HowWeWorkTile;
