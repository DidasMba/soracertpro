/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Section from "../common/Section";
import {
    locationOptions,
    programmData,
    programWebOptions,
    TimmingOptions,
} from "@/utils/constant";
import ProgramTile from "./ProgramTile";
import Radios from "./common/Radios";
import FilterButton from "./common/FilterButton";

const ProgramList = () => {
    const [selectedDate, setSelectedDate] = useState("tous");
    const [selectedLocation, setSelectedLocation] = useState("tous");

    const [category, setCategory] = useState("tous");

    useEffect(() => {}, []);

    return (
        <Section id='program-list'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-7 my-8'>
                <div className='col-span-1 '>
                    <div className='md:flex hidden flex-col gap-3 py-8'>
                        <h4 className='text-xs md:text-base font-semibold'>
                            Filtrer
                        </h4>
                        <Radios
                            options={TimmingOptions}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />
                        <hr className='bg-gray-500' />
                        <div>
                            <h4 className='text-xs md:text-base font-semibold'>
                                Trouvees
                            </h4>
                            <Radios
                                options={locationOptions}
                                selectedDate={selectedLocation}
                                setSelectedDate={setSelectedLocation}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 col-span-6'>
                    <h2 className='text-sm lg:text-base font-bold text-customBlue'>
                        Explorez nos programmes et trouvez celui qui vous
                        passionne.
                    </h2>
                    <FilterButton
                        options={programWebOptions}
                        selectedItem={category}
                        setSelectedItem={setCategory}
                    />
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
