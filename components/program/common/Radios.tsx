/** @format */
"use client";

import { TRadio } from "@/type";
import React from "react";

const Radios: React.FC<TRadio> = ({
    selectedDate,
    options,
    setSelectedDate,
}) => {
    return (
        <div className='flex flex-col gap-3 p-4'>
            {options.map((option) => (
                <label
                    key={option.id}
                    className='flex items-center gap-2 cursor-pointer'
                >
                    <div className='relative flex items-center'>
                        <input
                            type='radio'
                            name='options'
                            value={option.id}
                            checked={selectedDate === option.id}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className='appearance-none w-4 h-4 rounded-full border border-gray-300 checked:border-customBlue checked:border-[5px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-customBlue focus:ring-offset-2'
                        />
                    </div>
                    <span className='text-sm font-medium text-gray-900'>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
};

export default Radios;
