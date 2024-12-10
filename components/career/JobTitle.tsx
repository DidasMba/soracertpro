/** @format */
"use client";
import Link from "next/link";
import React from "react";
import { LuMapPin } from "react-icons/lu";

const JobTitle: React.FC<{
    slug: string;
    title: string;
    salary_range: string;
    location: string;
    company: string;
    jobtypeCat: string;
}> = ({ slug, title, salary_range, location, jobtypeCat, company }) => {
    return (
        <Link href={`/sora/career/${slug}`}>
            <div className='w-full shadow-sm rounded-lg flex flex-col gap-4 hover:-translate-y-1 duration-300 transition-all ease-in-out px-6 py-3 bg-gray-100'>
                <div>
                    <h5 className='font-medium font-base'>{title}</h5>
                    <div className='flex gap-4 text-sm'>
                        <span className='px-2 text-xs font-semibold rounded-lg text-gray-700 py-1 bg-gray-300'>
                            {jobtypeCat}
                        </span>
                        <span className='px-2 text-xs rounded-sm text-gray-600 py-1'>
                            {salary_range}
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='font-semibold text-base'>{company}</p>
                        <div className='flex gap-1'>
                            <LuMapPin size={18} />
                            <span className='text-sm font-medium text-gray-500'>
                                {location}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobTitle;
