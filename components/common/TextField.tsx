/** @format */

import { TextFieldType } from "@/type";
import React from "react";

const TextField: React.FC<TextFieldType> = ({
    label,
    type,
    placeholder,
    touched,
    handleChange,
    error,
    name,
    value,
    handleBlur,
}) => {
    return (
        <div className='flex flex-col w-full gap-2 text-primary'>
            <label className='font-semibold text-sm'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                className='input input-bordered text-sm focus-visible:outline-gray-700 w-full'
            />
            {error && touched ? (
                <span className='text-xs text-red-400 italic'>{error}</span>
            ) : null}
        </div>
    );
};

export default TextField;
