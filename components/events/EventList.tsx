/** @format */

"use client";

import EventTile from "./EventTile";
import Heading from "@/components/common/Heading";
import Paragrah from "@/components/common/Paragrah";
import { getAllEvents } from "@/lib/api/event";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Section from "../common/Section";
import Radios from "../program/common/Radios";
import { categoryEventOptions, dateEventFilter } from "@/utils/constant";
import FilterButton from "../program/common/FilterButton";
import { IoWarningOutline } from "react-icons/io5";

const HeroSection = () => {
    const [dateFilter, setDateFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");

    const { data, isLoading } = useQuery({
        queryKey: ["events", dateFilter, categoryFilter],
        queryFn: () => getAllEvents(dateFilter, categoryFilter),
    });

    return (
        <Section id='event-list'>
            <div className='row justify-between rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-md py-6 bg-[#f1fbfe]'>
                <div className='flex items-center px-8 py-6'>
                    <div className='pt-4 ps-lg-5'>
                        <span className='w-auto text-white py-2 px-4 rounded-md text-uppercase text-red text-xs font-semibold'>
                            Live events
                        </span>

                        <div className='flex flex-col mt-6'>
                            <Heading
                                text={`Explorez nos événements en direct, conférences et ateliers gratuits.`}
                            />
                            <Paragrah
                                text={` Participez à un atelier gratuit sur le design UX ou l'analyse des données, assistez aux journées de démonstration de nos étudiants, ou rejoignez-nous pour une session d'information interactive afin d'en savoir plus sur SoraCert.`}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center p-4'>
                    <div className='w-[548px] h-[340px] rounded-2xl overflow-hidden shadow-lg'>
                        <img
                            width='547'
                            height='340'
                            alt='Participants engaging in events at'
                            className='w-full h-full object-cover'
                            loading='lazy'
                            src='https://res.cloudinary.com/dnzidlufh/image/upload/v1729605148/event/cada8ku8vh6dqt8jqudd.jpg'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 mt-8'>
                <h1 className='text-2xl bg-white pb-4 font-bold'>
                    Liste de Nos Evenement a venir
                </h1>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-7'>
                    <div className='col-span-1 md:col-span-1'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='md:text-base text-lg font-bold md:font-semibold'>
                                Filtrer
                            </h4>
                            <hr className='block lg:hidden' />
                            <Radios
                                options={dateEventFilter}
                                selectedDate={dateFilter}
                                setSelectedDate={setDateFilter}
                            />
                            {/* <hr className='bg-gray-500' /> */}
                        </div>
                    </div>
                    <div className='md:col-span-6 col-span-1 flex flex-col gap-6'>
                        <FilterButton
                            options={categoryEventOptions}
                            selectedItem={categoryFilter}
                            setSelectedItem={setCategoryFilter}
                        />
                        {isLoading ? (
                            <div className='flex justify-center min-h-[40svh] items-center'>
                                <span className='loading loading-spinner loading-lg'></span>
                            </div>
                        ) : (
                            <div>
                                {data?.data?.length !== 0 ? (
                                    <div>
                                        {data?.data?.map((event) => (
                                            <EventTile
                                                key={event.id}
                                                slug={event.slug}
                                                title={event.theme}
                                                date={`${event.start_date}`}
                                                location={event.location}
                                                category={event.eventType}
                                                image={event.thumbnail}
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
                    </div>
                </div>
            </div>

            {/* <Update /> */}
        </Section>
    );
};

export default HeroSection;
