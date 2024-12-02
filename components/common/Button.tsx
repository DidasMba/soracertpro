/** @format */

import React from "react";

const Button: React.FC<{
    type?: "button" | "submit" | "reset" | undefined;
    text: string;
    isLoading?: boolean;
    handClick?: () => void;
}> = ({ type = "button", text, handClick, isLoading = false }) => {
    return (
        <button
            className='bg-customBlue px-6 md:py-3 py-2 rounded-full text-gray-100 font-semibold hover:bg-customHoverBlue hover:text-gray-600 duration-300'
            onClick={handClick}
            type={type}
        >
            {isLoading ? (
                <span className='loading loading-spinner loading-sm'></span>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
