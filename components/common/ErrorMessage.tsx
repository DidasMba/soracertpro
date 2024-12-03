/** @format */

import React from "react";
import { TiWarningOutline } from "react-icons/ti";

const ErrorMessage: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className='border border-red-400 px-6 bg-white color-[#d32f2f] text-sm mt-2.5 font-semibold error-animation text-red-400 flex justify-center items-center gap-2 w-full py-3'>
            <TiWarningOutline size={24} />
            <span className='text-sm font-semibold'>{text}</span>
        </div>
    );
};

export default ErrorMessage;
