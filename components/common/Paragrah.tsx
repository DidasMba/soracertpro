/** @format */

import React from "react";

const Paragrah: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p className='mt-4 max-w-2xl mx-auto text-sm md:text-base py-2 font-extralight'>
            {text}
        </p>
    );
};

export default Paragrah;
