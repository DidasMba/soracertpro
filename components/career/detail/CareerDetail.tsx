/** @format */

"use client";
import { getJobBySlug } from "@/lib/api/career";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { IoArrowForward } from "react-icons/io5";
import { FiMap } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { ImAlarm } from "react-icons/im";
import { LiaCopySolid } from "react-icons/lia";
import { PiStack } from "react-icons/pi";
import { IoMdArrowBack } from "react-icons/io";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "@/app/markdown-styles.module.css";
import JobOverView from "./JobOverView";
import { formatDateTimeToFrench } from "@/helper/funct";
import { toast } from "react-toastify";

const CareerDetail: React.FC<{ slug: string; isLogged: boolean }> = ({
    slug,
    isLogged,
}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["job", slug],
        queryFn: () => getJobBySlug(slug),
    });

    const handleCopy = () => {
        const currentUrl = window.location.href;
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                toast.success("Lien copier");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };
    return (
        <div className='max-w-7xl mx-auto h-full px-6 md:px-8'>
            {isLoading ? (
                <div className='w-full min-h-[70svh] flex items-center justify-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <span className='loading loading-spinner loading-lg'></span>
                        <p className='text-sm text-center font-bold text-gray-600'>
                            Veiller patience
                        </p>
                    </div>
                </div>
            ) : (
                <div className='min-h-[65svh] mb-4 md:mb-6 w-full flex flex-col gap-8 md:gap-10'>
                    <div className='flex flex-col items-start'>
                        <Link
                            className='bg-customBlue px-6 py-2 flex text-white gap-2 font-medium hover:bg-blue-900 rounded items-center'
                            href={"/sora/career"}
                        >
                            <IoMdArrowBack size={20} />
                            Voir tous
                        </Link>
                    </div>
                    <div className='flex justify-between items-center gap-6 flex-col md:flex-row'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-lg md:text-xl font-bold'>
                                {data?.data.title}
                            </h1>
                            <div className='flex gap-2'>
                                <p className='text-gray-500'>
                                    chez{" "}
                                    <span className='font-semibold text-gray-600'>
                                        {data?.data.company}
                                    </span>
                                </p>
                                <span className='px-2 text-xs font-semibold rounded-lg text-gray-700 py-1 bg-gray-300'>
                                    {data?.data.jobType.split("_").join(" ")}
                                </span>
                            </div>
                        </div>
                        {isLogged && (
                            <Link
                                className='flex items-center gap-2 text-white hover:bg-customButton bg-customBlue px-6 py-3 text-sm rounded-md'
                                href={`/sora/career/application/${data?.data.id}`}
                            >
                                Postulait <IoArrowForward size={20} />
                            </Link>
                        )}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-8 md:gap-8 gap-6'>
                        <div className='flex flex-col gap-6 col-span-1 md:col-span-5'>
                            <div className='flex gap-2 flex-col'>
                                <h2 className='text-base font-bold'>
                                    Description de poste:
                                </h2>
                                {data?.data.description && (
                                    <ReactMarkdown
                                        className={style.reactMarkDown}
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {data.data.description}
                                    </ReactMarkdown>
                                )}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-base font-bold'>
                                    Besoins:
                                </h2>
                                {data?.data.requirements && (
                                    <ReactMarkdown
                                        className={style.reactMarkDown}
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {data.data.requirements}
                                    </ReactMarkdown>
                                )}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-base font-bold'>
                                    Responsabilites:
                                </h2>
                                {data?.data.responsibilities && (
                                    <ReactMarkdown
                                        className={style.reactMarkDown}
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {data.data.responsibilities}
                                    </ReactMarkdown>
                                )}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-base font-bold'>
                                    Desirable :
                                </h2>
                                {data?.data.desirable && (
                                    <ReactMarkdown
                                        className={style.reactMarkDown}
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {data.data.desirable}
                                    </ReactMarkdown>
                                )}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-base font-bold'>
                                    Benefices :
                                </h2>
                                {data?.data.benefits && (
                                    <ReactMarkdown
                                        className={style.reactMarkDown}
                                        remarkPlugins={[remarkGfm]}
                                    >
                                        {data.data.benefits}
                                    </ReactMarkdown>
                                )}
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-3 flex flex-col gap-4'>
                            <div className='border border-gray-300 rounded-md p-4 flex items-center w-full justify-between'>
                                <div className='flex flex-col items-center gap-2'>
                                    <h5 className='text-base text-black'>
                                        Salaire (USD)
                                    </h5>
                                    <p className='text-lg font-medium text-customBlue'>
                                        {data?.data.salaryRange}
                                    </p>
                                    <p className='text-sm text-gray-600'>
                                        Salaire Annuel
                                    </p>
                                </div>
                                <div className='flex flex-col items-center gap-2'>
                                    <FiMap size={22} />
                                    <p className='text-lg font-medium text-customBlue'>
                                        Location du Poste
                                    </p>
                                    <p className='text-gray-700'>
                                        {data?.data.location}
                                    </p>
                                </div>
                            </div>
                            <div className='border border-gray-300 flex flex-col gap-6 rounded-md p-4'>
                                <h5 className='text-base font-medium text-customBlue'>
                                    Aperçu du poste
                                </h5>
                                <div className='grid grid-cols-3 gap-4'>
                                    <JobOverView
                                        Icon={CiCalendar}
                                        label='job posted'
                                        text={
                                            formatDateTimeToFrench(
                                                data?.data.postedAt!
                                            ).split("-")[0]
                                        }
                                    />
                                    <JobOverView
                                        Icon={ImAlarm}
                                        label='Deadline du Job'
                                        text={
                                            formatDateTimeToFrench(
                                                data?.data.deadline!
                                            ).split("-")[0]
                                        }
                                    />
                                    <JobOverView
                                        Icon={PiStack}
                                        label='Job level'
                                        text={
                                            data?.data.experienceLevel
                                                .split("_")
                                                .join(" ")!
                                        }
                                    />
                                </div>
                                <hr />
                                <div>
                                    <button
                                        onClick={handleCopy}
                                        className='flex px-4 items-center gap-1 duration-300 text-customBlue rounded hover:text-white hover:bg-customBlue text-sm font-medium bg-gray-200 py-2'
                                    >
                                        <LiaCopySolid size={18} />
                                        Copier le lien
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareerDetail;
