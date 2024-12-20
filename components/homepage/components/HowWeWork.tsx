/** @format */
"use client";
import Section from "@/components/common/Section";
import React from "react";
import HowWeWorkTile from "./HowWeWorkTile";
import { howWeWorkContents } from "@/utils/constant";
import { isOdd } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { THowItWork } from "@/types/home";

const HowWeWork = () => {
    const [t] = useTranslation("global");
    const howItWorksData = t("home.howitwork", {
        returnObjects: true,
    }) as Array<THowItWork>;

    return (
        <Section id='how-we-work'>
            <div className='flex flex-col gap-8 md:gap-10'>
                {howItWorksData.map((item, i) => (
                    <HowWeWorkTile
                        key={`${item.title}-how`}
                        content={item.description}
                        title={item.title}
                        imageURL={howWeWorkContents[i].imageURL}
                        isReverted={isOdd(i + 1)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default HowWeWork;
