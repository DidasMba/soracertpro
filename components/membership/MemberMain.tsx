/** @format */
"use client";
import { plansData } from "@/utils/constant";
import React from "react";
import PlanTitle from "./PlanTitle";

const MemberMain = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8 w-full mb-10'>
            <div
                className='relative w-full h-[55svh]  bg-cover'
                style={{ backgroundImage: "url(/Frame682.png)" }}
            >
                <div className='h-full w-full bg-black bg-opacity-20'>
                    <div className='max-w-7xl mx-auto h-full px-6 md:px-8 flex items-center'>
                        <div className='flex flex-col gap-6 items-start max-w-full w-full md:max-w-3xl'>
                            <h2 className='text-white text-3xl leading-10 md:text-5xl font-bold'>
                                Rejoignez notre{" "}
                                <span className='text-customButton'>
                                    communauté
                                </span>{" "}
                                et
                                <span className='text-customButton'>
                                    {" "}
                                    accédez
                                </span>{" "}
                                à des opportunités exclusives
                            </h2>
                            <p className='text-white md:max-w-2xl max-w-full text-base md:text-lg py-2 font-extralight'>
                                Découvrez des avantages réservés aux membres, y
                                compris des offres spéciales, des événements
                                privés, des formations et un réseau de
                                professionnels.
                            </p>
                            <a
                                className='text-sm md:text-base duration-300 text-white bg-customBlue hover:bg-customHoverBlue font-semibold  px-6  py-3 rounded-full'
                                href='#plan-list'
                            >
                                Choisir le plan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto px-4 flex flex-col w-full gap-8 md:px-8'>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-base font-extrabold uppercase'>
                        Tarification
                    </p>
                    <h3 className='font-bold text-xl md:text-2xl'>
                        Des plans d'adhésion à des prix abordables
                    </h3>
                    <p className='text-gray-400 text-center max-w-2xl'>
                        Profitez de tarifs accessibles pour rejoindre notre
                        communauté et bénéficier de tous nos avantages.
                    </p>
                </div>
                <section
                    id='plan-list'
                    className='grid grid-cols-1 md:grid-cols-3 gap-6  w-full'
                >
                    {plansData.map((plan) => (
                        <PlanTitle
                            key={plan.id}
                            plansList={plan.plans}
                            price={plan.price}
                            title={plan.title}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default MemberMain;
