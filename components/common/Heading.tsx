/** @format */

import React from "react";

const Heading: React.FC<{ text: string; variant?: "black" | "white" }> = ({
    text,
    variant = "black",
}) => {
    return (
        <div>
            <h2 className='md:text-3xl text-2xl  font-bold  text-customBlue py-4'>
                {text}
            </h2>
            <div className='mb-3 h-1 w-24 bg-customBlue'></div>
        </div>
    );
};

export default Heading;