/** @format */

import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner-img.png";
import CareerList from "./CareerList";

const CareerMain = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/* banner section */}
            <div
                className='relative w-full h-[55svh]  bg-cover'
                style={{ backgroundImage: "url(/banner-img.png)" }}
            >
                <div className='h-full w-full bg-black bg-opacity-55'>
                    <div className='max-w-7xl mx-auto h-full px-6 md:px-8 flex items-center'>
                        <div className='flex flex-col gap-6 items-start max-w-full md:max-w-3xl'>
                            <h2 className='text-white text-3xl md:text-5xl font-bold'>
                                Trouvez un{" "}
                                <span className='text-customButton'>
                                    emploi
                                </span>{" "}
                                qui
                                <span className='text-customButton'>
                                    {" "}
                                    correspond
                                </span>{" "}
                                à votre passion
                            </h2>
                            <p className='text-white md:max-w-2xl max-w-full text-base md:text-lg py-2 font-extralight'>
                                Opportunités sélectionnées pour travailler de
                                chez soi, à distance, en freelance, à temps
                                plein, à temps partiel, en contrat et en stage.
                            </p>
                            <a
                                className='text-sm md:text-base duration-300 text-white bg-customBlue hover:bg-customHoverBlue font-semibold  px-6 md:py-3 py-2 rounded-full'
                                href='#career-list'
                            >
                                Explorer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <CareerList />
        </div>
    );
};

export default CareerMain;
