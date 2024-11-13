/** @format */

import LandiingPage from "@/components/homepage/components/landingpage";
import FrameComponent6 from "@/components/homepage/components/aboutus";
import Testimonial from "@/components/homepage/components/Testimonial";
import Blog from "@/components/homepage/components/blog";
import UpcomingEvents from "@/components/homepage/components/events";
// import SectionDegaul from "@/components/homepage/components/section-degaul";
// import DegaulSection from "@/components/homepage/components/degaul-section";
import testimonialImage from "@/assets/testimonial.png";
import HowItwork from "@/assets/how-we-work.png";
import testimonialImageMob from "@/assets/testimonial-mob.png";
import HowItworkMob from "@/assets/how-we-work-mob.png";
import Description from "@/components/homepage/components/description";
import OurPartner from "@/components/homepage/partenaire/OurPartner";
import Separator from "@/components/homepage/components/Separator";
import GalleryImage from "@/components/homepage/GalleryImage";

export default function Home() {
    return (
        <main className='relative overflow-x-hidden'>
            <LandiingPage />
            <OurPartner />
            <FrameComponent6 />
            <Separator
                description={`Chez Soracert, nous offrons un parcours unique pour les jeunes passionnés de technologie, alliant formation et accompagnement personnalisé. Nos programmes inspirants et immersifs permettent à chaque participant de renforcer ses compétences, de développer sa confiance et de se préparer à réussir dans un secteur en pleine croissance.`}
                title={`Formation et développement des jeunes chez Soracert: un accompagnement vers l'excellence.`}
                imgUrl={HowItwork}
                imgUrlMob={HowItworkMob}
                id='how-it-work-separator'
            />
            {/* <SectionDegaul /> */}
            <Description />
            <Separator
                description={`À travers nos programmes, ateliers, et bootcamps, Soracert aide chaque participant à débloquer son potentiel et à atteindre de nouveaux sommets dans le monde de la technologie. Lisez les témoignages inspirants de ceux qui ont vécu une véritable transformation, renforçant leurs compétences et leur confiance en eux pour bâtir un avenir prometteur.`}
                title={`Découvrez comment Soracert a transformé la vie de jeunes passionnés de technologie`}
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
}
