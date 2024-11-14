/** @format */

import React from "react";

const SectionHeading: React.FC<{ text: string }> = ({ text }) => {
    const splitWord = "Soracert";
    const [firstPart, secondPart] = text.split(splitWord);

    return (
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-white max-w-4xl'>
            {firstPart}
            <span className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'>
                {splitWord}
            </span>
            {secondPart && (
                <span className='bg-gradient-to-r from-blue-400 via-customButton to-customHoverBlue inline-block text-transparent bg-clip-text'>
                    {secondPart}
                </span>
            )}
        </h1>
    );
};

export default SectionHeading;
