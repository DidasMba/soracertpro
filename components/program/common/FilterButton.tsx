/** @format */

"use client";
import { TRadioCategory } from "@/type";
import React from "react";

const FilterButton: React.FC<TRadioCategory> = ({
    selectedItem,
    options,
    setSelectedItem,
}) => {
    return (
        <div className='flex flex-row gap-2 flex-wrap md:flex-wrap my-2'>
            {options.map((item) => (
                <button
                    onClick={() => setSelectedItem(item.id)}
                    className={`border duration-300 hover:bg-customBlue hover:text-white border-customBlue whitespace-nowrap px-6 py-1 w-auto rounded-2xl font-semibold ${
                        selectedItem === item.id
                            ? "bg-customBlue text-white"
                            : "text-customBlue"
                    }`}
                    key={item.id}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default FilterButton;
