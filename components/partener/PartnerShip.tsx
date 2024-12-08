/** @format */

"use client";
import React from "react";
import Section from "../common/Section";
import Banner from "@/components/partener/Banner";
import Image from "next/image";
import memberImage from "@/assets/world-pana.png";
import Heading from "../common/Heading";
import FormPartner from "./FormPartner";


const PartnerShip = () => {
    return (
        <div className='flex flex-col gap-8 w-full '>
            <div className='mx-auto px-4 md:px-8 max-w-7xl w-full'>
                <Banner />
            </div>

            <Section id='member-benefit'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-6 md:my-8'>
                    <div className={`md:h-[420px] max-h-[340px] flex h-full`}>
                        <Image
                            src={memberImage}
                            width={300}
                            height={400}
                            alt={"benefit"}
                            className='object-cover w-full md:w-full'
                        />
                    </div>
                    <div className={` flex items-center`}>
                        <div className='flex flex-col gap-4'>
                            <Heading
                                text={
                                    "Avantages de devenir membre de Soracert :"
                                }
                            />
                            <div>
                                <ul className='list-item list-disc md:ml-8 ml-6 space-y-2 text-sm'>
                                    <li>
                                        Accès exclusif au tableau de bord
                                        personnalisé
                                    </li>
                                    <li>
                                        Forums de discussion pour échanger avec
                                        d'autres membres
                                    </li>
                                    <li>
                                        Calendrier interactif pour rester
                                        organisé
                                    </li>
                                    <li>
                                        Notifications instantanées pour les
                                        nouveaux programmes et événements
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id='member-form'>
                <div className='flex flex-col gap-8 my-8'>
                    <h1 className='text-xl md:text-2xl text-center font-bold text-customBlue'>
                        
                    </h1>
                    <div className='max-w-4xl mx-auto w-full'>
                        <FormPartner />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PartnerShip;
