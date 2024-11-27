/** @format */

import { Card } from "@/components/ui/card";
import Heading from "@/components/common/Heading";
import React from "react";
import { formatDateTimeToFrench } from "@/helper/funct";

const EventInfo: React.FC<{
    title: string;
    description: string;
    dateEvent: string;
    location: string;
}> = ({ title, description, location, dateEvent }) => {
    let date_time = formatDateTimeToFrench(dateEvent);
    const dateSplitted = date_time.split("-");
    return (
        <>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#05264f]'>
                {title}
            </h1>

            <div className='flex flex-col md:flex-ro justify-center items-center py-12'>
                <div className='flex flex-col md:flex-row w-full  justify-between space-y-8 md:space-y-0 md:space-x-8'>
                    <div className='w-full md:w-3/5 flex flex-col'>
                        <p>{description}</p>
                    </div>
                    <div className='w-full md:w-2/5 space-y-8 mt-8 md:sticky top-16'>
                        <Card
                            className='p-6 shadow-lg '
                            style={{ borderRadius: "20px" }}
                        >
                            <h3 className='text-lg font-bold py-2'>
                                Calendrier
                            </h3>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='self-stretch flex flex-row items-start justify-center '>
                                        <svg
                                            className=' w-8 h-6 font-mono justify-center items-center'
                                            xmlns='http://www.w3.org/2000/svg'
                                            style={{ marginBottom: "3px" }}
                                            viewBox='0 0 448 512'
                                        >
                                            <path d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z' />
                                        </svg>
                                    </div>
                                    <div className='self-stretch flex flex-col items-center justify-center mx-auto'>
                                        <h2
                                            className='text-sm font-extralight items-center text-[#05264f] justify-center'
                                            style={{
                                                textDecoration: "uppercase",
                                            }}
                                        >
                                            Date
                                        </h2>
                                        <div className='items-center  text-center justify-center whitespace-nowrap  text-sm font-extrabold'>
                                            {dateSplitted[0]}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='self-stretch flex flex-row items-start justify-center'>
                                        <svg
                                            className=' w-8 h-6 font-mono justify-center items-center'
                                            style={{ marginBottom: "3px" }}
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 512 512'
                                        >
                                            <path d='M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z' />
                                        </svg>
                                    </div>
                                    <div className='self-stretch flex flex-col items-center justify-center mx-auto'>
                                        <h2
                                            className='text-sm font-extralight items-center text-[#05264f] justify-center'
                                            style={{
                                                textDecoration: "uppercase",
                                            }}
                                        >
                                            Heure:
                                        </h2>
                                        <div className='items-center justify-center text-center  text-sm font-extrabold'>
                                            {dateSplitted[1]}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='self-stretch flex flex-row items-start justify-center'>
                                        <svg
                                            className=' w-8 h-6 font-mono justify-center items-center'
                                            style={{ marginBottom: "3px" }}
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 512 512'
                                        >
                                            <path d='M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z' />
                                        </svg>
                                    </div>
                                    <div className='self-stretch flex flex-col items-center justify-center mx-auto'>
                                        <h2
                                            className='text-sm font-extralight items-center text-[#05264f] justify-center'
                                            style={{
                                                textDecoration: "uppercase",
                                            }}
                                        >
                                            Localisation:
                                        </h2>
                                        <div className='items-center justify-center text-center  text-sm font-extrabold'>
                                            {location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventInfo;
