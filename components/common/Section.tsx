/** @format */

import React from "react";

const Section: React.FC<{ id: string; children: React.ReactNode }> = ({
    id,
    children,
}) => {
    return (
        <section className='w-full' id={id}>
            <div className='max-w-7xl mx-auto px-4 md:px-8'>{children}</div>
        </section>
    );
};

export default Section;
