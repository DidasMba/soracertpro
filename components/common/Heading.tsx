/** @format */

import React from "react";

const Heading: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold uppercase  text-[#05264f] mb-3 py-4'>
                {text}
            </h1>
            <div className='mt-4 mb-3 h-1 w-24 bg-[#05264f]'></div>
        </div>
    );
};

export default Heading;
