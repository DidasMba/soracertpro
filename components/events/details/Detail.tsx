/** @format */

"use client";
import React from "react";
import Eventregister from "./EventInfo";
import { useQuery } from "@tanstack/react-query";
import { getEventBySlug } from "@/lib/api/event";
import HowItworkMob from "@/assets/how-we-work-mob.png";
import HowItwork from "@/assets/how-we-work.png";
import Separator from "@/components/homepage/components/Separator";
import Section from "@/components/common/Section";

const DetailEvent: React.FC<{ slug: string }> = ({ slug }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["event", slug],
        queryFn: () => getEventBySlug(slug),
    });
    console.log(data);
    return (
        <Section id='event-detail'>
            <Separator
                description={`Apprendre la cybersécurité`}
                title={` Avec la multiplication des menaces en ligne., il est crucial de sensibiliser, d’éduquer et de former les professionnels, les entreprises et les particuliers aux bonnes pratiques de sécurité informatique. `}
                imgUrl={HowItwork}
                imgUrlMob={HowItworkMob}
                id='how-it-work-separator'
            />
            {isLoading ? (
                <div className='flex justify-center items-center h-[30svh]'>
                    <span className='loading loading-spinner loading-lg'></span>
                </div>
            ) : (
                <div>
                    <Eventregister
                        title={data?.data.theme!}
                        location={data?.data.location!}
                        dateEvent={data?.data?.start_date!}
                        description={data?.data.description!}
                    />
                    <div className=''>
                        <h1 className=''>Sponsors de cette evenement</h1>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default DetailEvent;
