/** @format */

"use client";

import React, { useState } from "react";
import Section from "../common/Section";
import { programmData, TimmingOptions } from "@/utils/constant";
import ProgramTile from "./ProgramTile";
import Radios from "./common/Radios";

const ProgramList = () => {
    const [selectedDate, setSelectedDate] = useState("tous");
    return (
        <Section id='program-list'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-7 my-8'>
                <div className='col-span-1 '>
                    <div className='flex flex-col gap-3 py-8'>
                        <Radios
                            options={TimmingOptions}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                        <hr className='bg-gray-500' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 col-span-6'>
                    <h2 className='text-lg lg:text-2xl font-bold text-customBlue'>
                        Explorez nos programmes et trouvez celui qui vous
                        passionne.
                    </h2>
                    <div className='flex flex-col gap-2'>
                        {programmData.map((item) => (
                            <ProgramTile
                                key={item.id}
                                title={item.title}
                                image={item.thumbnail}
                                location={item.location}
                                date={item.date}
                                id={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProgramList;
