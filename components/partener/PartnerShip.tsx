/** @format */

"use client";
import React from "react";
import Section from "../common/Section";
import Banner from "@/components/partener/Banner";
import Image from "next/image";
import memberImage from "@/assets/world-pana.png";
import Heading from "../common/Heading";
import FormPartner from "./FormPartner";
import { Company } from "@/components/required/company"


const PartnerShip = () => {
    return (
        <div className='flex flex-col gap-8 w-full '>
            <div className='mx-auto px-4 md:px-8 max-w-7xl w-full'>
                <Banner />
            </div>

            <Section id='member-benefit'>
                <div className="container bg-white p-4 py-4 mx-auto max-w-7xl  justify-start items-center">
                    <div className="flex flex-col py-9 md:flex-row w-full max-w-7xl mx-auto  items-center justify-center space-y-8 md:space-y-0 md:space-x-8">

                        <div className=" flex w-full md:w-1/2 space-y-8 items-center justify-center" data-aos="fade-up" data-aos-delay="100">

                            <div className="place-items-center  py-3 p-3  max-w-2xl mx-auto">

                                <div className="text-2xl font-bold   text-[#05264f] ">Fiable pour plus de 10 000 entreprises à travers le monde.
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/2 items-center" data-aos="fade-up" data-aos-delay="200"
                        >
                            <div className="text-xl font-bold uppercase  text-[#05264f] ">Tagline
                            </div>

                            <p className="font-extralight">Nos clients accomplissent des choses incroyables chaque jour. Ils travaillent pour trouver des remèdes contre le cancer, voyagent dans l'espace.</p>
                        </div>
                        <div className="w-fullitems-center p-2 py-3" data-aos="fade-up" data-aos-delay="200">
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
                            {Company.map((company, index) => (
                                <div className="flex flex-col items-center justify-center space-y-4" key={index}>
                                    <img
                                        alt="Event Stadium"
                                        className="h-[100.2px] w-[140.2px]"
                                        src={`/${company.img}`}

                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            ))}
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
