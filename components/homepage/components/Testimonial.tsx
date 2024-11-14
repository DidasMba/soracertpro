/** @format */
"use client";

import Section from "@/components/common/Section";
import React from "react";
import { testimonials } from "@/utils/constant";
import TestimonialTile from "./TestimonialTile";

const Testimonial = () => {
    return (
        <Section id='testimonial'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map((testimonial) => (
                    <TestimonialTile
                        key={testimonial.id}
                        timeAgo={testimonial.timeAgo}
                        avatar={testimonial.avatar!}
                        content={testimonial.content}
                        username={testimonial.name}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Testimonial;
