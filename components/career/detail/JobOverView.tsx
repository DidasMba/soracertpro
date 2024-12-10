/** @format */

import React from "react";
import { IconType } from "react-icons/lib";

const JobOverView: React.FC<{
    Icon: IconType;
    label: string;
    text: string;
}> = ({ Icon, label, text }) => {
    return (
        <div className='flex flex-col gap-2 items-start'>
            <Icon className='text-customBlue' size={18} />
            <label className='uppercase text-xs text-gray-500'>{label}</label>
            <p className='text-xs font-semibold'>{text}</p>
        </div>
    );
};

export default JobOverView;
