/** @format */

"use client";
import React from "react";
import Hero from "./components/Hero";
import OurPartner from "./partenaire/OurPartner";
import AboutUs from "./components/aboutus";
import Separator from "./components/Separator";
import HowWeWork from "./components/HowWeWork";
import Testimonial from "./components/Testimonial";
import GalleryImage from "./GalleryImage";
import Blog from "@/components/homepage/components/blog/blog";
import UpcomingEvents from "@/components/homepage/components/events";
import testimonialImage from "@/assets/testimonial-mob.png";
import HowItwork from "@/assets/how-we-work.png";
import testimonialImageMob from "@/assets/testimonial-desk.png";
import HowItworkMob from "@/assets/how-we-work-mob.png";
import { useTranslation } from "react-i18next";

const RenderHome: React.FC = () => {
    const [t] = useTranslation("global");
    return (
        <main className='relative overflow-x-hidden'>
            <Hero />
            <OurPartner />
            <AboutUs />
            <Separator
                description={t("home.separator-1.description")}
                title={t("home.separator-1.title")}
                imgUrl={HowItwork}
                imgUrlMob={HowItworkMob}
                id='how-it-work-separator'
            />
            {/* <SectionDegaul /> */}
            <HowWeWork />
            <Separator
                description={t("home.separator-2.description")}
                title={t("home.separator-2.title")}
                imgUrl={testimonialImage}
                imgUrlMob={testimonialImageMob}
                id='testimonial-separator'
            />
            <Testimonial />
            <GalleryImage />
            {/* <DegaulSection /> */}
            <Blog />
            <UpcomingEvents />
        </main>
    );
};

export default RenderHome;
