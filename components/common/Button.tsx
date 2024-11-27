/** @format */

import React from "react";

const Button: React.FC<{
    type?: "button" | "submit" | "reset" | undefined;
    text: string;
    handClick: () => void;
}> = ({ type = "button", text, handClick }) => {
    return (
        <button
            className='bg-customBlue px-4 py-2 text-gray-100 font-semibold hover:bg-customHoverBlue hover:text-gray-600 duration-300 rounded-xl'
            onClick={handClick}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
