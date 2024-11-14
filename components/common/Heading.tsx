/** @format */

import React from "react";

const Heading: React.FC<{ text: string; variant?: "black" | "white" }> = ({
    text,
    variant = "black",
}) => {
    return (
        <div>
            <h2 className='text-xl font-bold  text-[#05264f] mb-3 py-4'>
                {text}
            </h2>
            <div className='mb-3 h-1 w-24 bg-customBlue'></div>
        </div>
    );
};

export default Heading;
