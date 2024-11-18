import React from 'react';
import howitwork from '@/assets/how-we-work-mob.png';
import Image from 'next/image'; // For Next.js Image component
import Separator from "@/components/homepage/components/Separator";
import HowItworkMob from "@/assets/how-we-work-mob.png";
import HowItwork from "@/assets/how-we-work.png";

const Portrait: React.FC = () => {
  return (
    <header className="">
     <Separator
                description={`Chez Soracert, nous offrons un parcours unique pour les jeunes passionnés de technologie, alliant formation et accompagnement personnalisé. Nos programmes inspirants et immersifs permettent à chaque participant de renforcer ses compétences, de développer sa confiance et de se préparer à réussir dans un secteur en pleine croissance.`}
                title={`Formation et développement des jeunes chez Soracert: un accompagnement vers l'excellence.`}
                imgUrl={HowItwork}
                imgUrlMob={HowItworkMob}
                id='how-it-work-separator'
            />
    </header>
  );
};

export default Portrait;
