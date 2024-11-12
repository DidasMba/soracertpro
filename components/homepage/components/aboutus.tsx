/** @format */

import Heading from "@/components/common/Heading";
import Paragrah from "@/components/common/Paragrah";
import type { NextPage } from "next";

const FrameComponent6 = () => {
    return (
        <section
            className='max-w-7xl mx-auto w-full flex flex-col md:flex-ro justify-center items-center py-12 px-4'
            data-aos='fade-up'
        >
            <div className='flex flex-col md:flex-row w-full max-w-6xl w items-center justify-between space-y-8 md:space-y-0 md:space-x-8'>
                <div
                    className='w-full md:w-1/2 flex items-center'
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    <div className='place-items-center py-3 p-3  max-w-2xl'>
                        <Heading text="Apprenez auprès d'experts du secteur qui vous consacreront du temps." />
                        <Paragrah
                            text={` Participez à des événements, programmes élaborés par
                            des experts du secteur, et mettez en pratique des
                            projets concrets pour acquérir des compétences
                            utiles. Développez un portfolio remarquable afin
                            d'être prêt pour votre recherche d'emploi..`}
                        />
                    </div>
                </div>
                <div
                    className='w-full md:w-1/2 space-y-8'
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    <img
                        alt='Event Stadium'
                        className='object-cover rounded-lg shadow-lg mx-auto animated'
                        src='/latest property 1.png'
                        style={{
                            height: "auto",
                            maxWidth: "600px",
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default FrameComponent6;
