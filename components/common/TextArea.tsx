/** @format */

import { TextFieldType } from "@/type";
import React from "react";

const TextAreaField: React.FC<TextFieldType> = ({
    label,
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
            <textarea
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                className='textarea textarea-bordered text-sm focus-visible:outline-gray-700 w-full h-32 resize-none'
            />
            {error && touched ? (
                <span className='text-xs text-red-400 italic'>{error}</span>
            ) : null}
        </div>
    );
};

export default TextAreaField;
