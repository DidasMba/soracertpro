/** @format */

import React from "react";

const SelectInput: React.FC<{
    label: string;
    options: { value: string; label: string }[];
    value: string;
    error: string;
    touched: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement, Element>) => void;
    name: string;
}> = ({ onChange, onBlur, name, error, touched, value, label, options }) => {
    return (
        <div className='flex flex-col w-full gap-2 text-primary'>
            <label className='font-semibold text-sm'>{label}</label>
            <select
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                name={name}
                className={`select select-bordered w-full text-sm focus-visible:outline-gray-700 ${
                    error ? "border-red-500" : ""
                }`}
            >
                <option disabled value=''>
                    {label}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && touched ? (
                <span className='text-xs text-red-400 italic'>
                    {error.toLocaleString()}
                </span>
            ) : null}
        </div>
    );
};

export default SelectInput;
