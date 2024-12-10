/** @format */

import Link from "next/link";
import React from "react";

const SignButton: React.FC<{
    href: string;
    text: string;
    variant?: "light" | "dark";
}> = ({ href, text, variant = "light" }) => {
    return (
        <Link
            className={`${
                variant === "light"
                    ? "bg-white hover:bg-gray-200 hover:text-blue-950 text-customBlue"
                    : "bg-customBlue text-white hover:text-gray-100 hover:bg-blue-950 border border-gray-200 lg:border-none"
            } px-4 lg:px-6 lg:w-auto w-full py-2 lg:py-2 text-center text-nowrap rounded-3xl text-sm font-semibold transition-all ease-in-out duration-300`}
            href={href}
        >
            {text}
        </Link>
    );
};

export default SignButton;
