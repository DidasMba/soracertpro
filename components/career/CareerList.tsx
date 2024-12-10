/** @format */

"use client";
import React, { useState } from "react";
import FilterButton from "../program/common/FilterButton";
import { jobDepartments, jobTypes, levels } from "@/utils/constant";
import Radios from "../program/common/Radios";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJob } from "@/lib/api/career";
import { IoWarningOutline } from "react-icons/io5";
import JobTitle from "./JobTitle";

const CareerList = () => {
    const [department, setDepartment] = useState<string>("all");
    const [jobtypeCat, setJobTypeCat] = useState<string>("all");
    const [levelCat, setLevelCat] = useState<string>("all");

    const { data, isLoading } = useQuery({
        queryKey: ["job", levelCat, department, jobtypeCat],
        queryFn: () => fetchAllJob(levelCat, department, jobtypeCat),
    });

    return (
        <div className='max-w-7xl w-full mx-auto px-4 md:px-8'>
            {/* category */}
            <div className='flex flex-col gap-8 mb-6'>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-extrabold text-xl uppercase md:text-2xl'>
                        Departement Disponible
                    </h1>
                    <FilterButton
                        options={jobDepartments}
                        selectedItem={department}
                        setSelectedItem={setDepartment}
                    />
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-7'>
                    <div className='col-span-1 md:col-span-1'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='md:text-base text-lg font-bold md:font-semibold'>
                                Filtrer
                            </h4>
                            <hr className='block lg:hidden' />
                            <Radios
                                name={"job-tyle"}
                                options={jobTypes}
                                selectedDate={jobtypeCat}
                                setSelectedDate={setJobTypeCat}
                            />
                            <hr className='bg-gray-500' />
                            <h4 className='md:text-base text-lg font-bold md:font-semibold'>
                                Levels
                            </h4>
                            <Radios
                                name={"team-cat"}
                                options={levels}
                                selectedDate={levelCat}
                                setSelectedDate={setLevelCat}
                            />
                        </div>
                    </div>
                    <section
                        id='career-list'
                        className='md:col-span-6 col-span-1 flex flex-col gap-6'
                    >
                        <h1 className='font-extrabold text-2xl text-center uppercase md:text-3xl'>
                            EMPLOI DISPONIBLE
                        </h1>
                        {isLoading ? (
                            <div className='flex justify-center min-h-[40svh] items-center'>
                                <span className='loading loading-spinner loading-lg'></span>
                            </div>
                        ) : (
                            <div className='w-full'>
                                {data?.data?.length !== 0 ? (
                                    <div className='grid w-full sm:grid-cols-1 md:grid-cols-3 gap-4'>
                                        {data?.data?.map((job) => (
                                            <JobTitle
                                                key={job.id}
                                                slug={job.slug}
                                                title={job.title}
                                                company={job.company}
                                                jobtypeCat={job.jobType}
                                                location={job.location}
                                                salary_range={job.salaryRange}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className='flex  items-center w-full justify-center py-8'>
                                        <div className='flex flex-col items-center'>
                                            <IoWarningOutline size={40} />
                                            <p className='text-base font-semibold text-center'>
                                                Pas d'evenement trouver
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CareerList;
