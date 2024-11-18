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
                description={`Apprendre la cybersécurité`}
                title={` Avec la multiplication des menaces en ligne., il est crucial de sensibiliser, d’éduquer et de former les professionnels, les entreprises et les particuliers aux bonnes pratiques de sécurité informatique. `}
                imgUrl={HowItwork}
                imgUrlMob={HowItworkMob}
                id='how-it-work-separator'
            />
    </header>
  );
};

export default Portrait;
