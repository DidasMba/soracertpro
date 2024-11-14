/** @format */

import React from "react";

const Paragrah: React.FC<{ text: string }> = ({ text }) => {
    return <p className='text-sm md:text-base py-2 font-medium'>{text}</p>;
};

export default Paragrah;
