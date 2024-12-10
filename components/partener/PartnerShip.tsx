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
                   
                       <div className="text-center">
          <Heading 
          text = {`Fiable pour plus de 100 entreprises à travers le monde.`}
          noLine={true}
          uppercase={false}
          center={true}
      />
          {/* <div className="mt-4 max-w-2xl mx-auto text-base md:text-lg py-2 font-medium">
          Partenariat avec Soracert : Ensemble, construisons un avenir sécurisé et innovant
          </div>  */}
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
                        Remplissez ce formulaire pour dla demande de Partenaria
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
