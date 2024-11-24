/** @format */

"use client";

import EventTile from "./EventTile";
import Heading from "@/components/common/Heading";
import Paragrah from "@/components/common/Paragrah";
import { getAllEvents } from "@/lib/api/event";
import { useQuery } from "@tanstack/react-query";

const HeroSection = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["event"],
        queryFn: () => getAllEvents(),
    });
    return (
        <div className='max-w-7xl mx-auto w-full container'>
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
            <div className='max-w-7xl mx-auto w-full container pt-3 pt-xl-5 pb-5'>
                <h1 className='text-2xl mt-8 bg-white border-b pb-4 font-bold'>
                    Liste de Nos Evenement a venir
                </h1>

                {isLoading ? (
                    <div className='flex justify-center min-h-[40svh] items-center'>
                        <span className='loading loading-spinner loading-lg'></span>
                    </div>
                ) : (
                    <div className='mb-6 col-12 col-lg-10 ps-xl-5'>
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
                )}
            </div>

            {/* <Update /> */}
        </div>
    );
};

export default HeroSection;
