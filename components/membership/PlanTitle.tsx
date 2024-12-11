/** @format */

import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const PlanTitle: React.FC<{
    title: string;
    price: number;
    plansList: Array<string>;
}> = ({ title, price, plansList }) => {
    return (
        <div className='border border-gray-300 bg-white rounded-lg w-full'>
            <div className='flex flex-col gap-2 px-6 py-8 items-center bg-[#f5f5f5] rounded-t-lg'>
                <p className='text-2xl md:text-3xl uppercase font-extrabold text-customBlue'>
                    {title}
                </p>
                <h4 className='text-4xl md:text-5xl font-bold'>${price}</h4>
                <p className='text-base text-gray-500'>Billed monthly</p>
                <button
                    type='button'
                    className='bg-customBlue w-full justify-center mt-2 hover:bg-customButton duration-300 px-6 py-3 flex flex-row text-white gap-2 items-center font-semibold rounded-full'
                >
                    Get started <IoArrowForward size={20} />
                </button>
            </div>
            <div className='flex flex-col px-4 py-6'>
                <ul className='flex flex-col gap-2'>
                    {plansList.map((item) => (
                        <li
                            className='flex items-center gap-2 text-customBlue font-medium text-sm'
                            key={item}
                        >
                            <IoIosCheckmarkCircle size={20} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlanTitle;
