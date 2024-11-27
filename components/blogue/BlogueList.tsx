/** @format */

"use client";

import React, { useState } from "react";
import Section from "../common/Section";
import {
    locationOptions,
    programmData,
    blogueWebOptions,
    TimmingOptions,
} from "@/utils/constant";
import ProgramTile from "./BlogueTile";
// import Radios from "./common/Radios";
// import FilterButton from "./common/FilterButton";

const BlogueList = () => {
    const [selectedDate, setSelectedDate] = useState("tous");
    const [selectedLocation, setSelectedLocation] = useState("tous");

    const [category, setCategory] = useState("tous");

    return (
        <Section id='program-list'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-7 my-8'>
                <div className='flex flex-col gap-4 col-span-6'>
                    <h2 className='text-sm lg:text-base font-bold text-customBlue'>
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

export default BlogueList;
