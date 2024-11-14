/** @format */

import Section from "@/components/common/Section";
import React from "react";
import HowWeWorkTile from "./HowWeWorkTile";
import { howWeWorkContents } from "@/utils/constant";
import { isOdd } from "@/lib/utils";

const HowWeWork = () => {
    return (
        <Section id='how-we-work'>
            <div className='flex flex-col gap-8 md:gap-10'>
                {howWeWorkContents.map((item, i) => (
                    <HowWeWorkTile
                        key={item.id}
                        content={item.content}
                        title={item.title}
                        imageURL={item.imageURL}
                        isReverted={isOdd(i + 1)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default HowWeWork;
