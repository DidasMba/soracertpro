/** @format */

import LandiingPage from "@/components/homepage/components/landingpage";
import FrameComponent6 from "@/components/homepage/components/aboutus";
import Testimonial from "@/components/homepage/components/Testimonial";
import Blog from "@/components/homepage/components/blog";
import UpcomingEvents from "@/components/homepage/components/events";
import SectionDegaul from "@/components/homepage/components/section-degaul";
import DegaulSection from "@/components/homepage/components/degaul-section";
import Description from "@/components/homepage/components/description";

export default function Home() {
    return (
        <main className='relative overflow-x-hidden'>
            <LandiingPage />
            <FrameComponent6 />
            <Testimonial />
            {/* <SectionDegaul /> */}
            <Description />
            {/* <DegaulSection /> */}
            <Blog />
            <UpcomingEvents />
        </main>
    );
}
