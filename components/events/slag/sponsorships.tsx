// components/Sponsorships.tsx
import React from 'react';
import Heading from '@/components/common/Heading'
import voda from "@/assets/images.png";
import cisc from "@/assets/cisco.png";
import oracle from "@/assets/oracle.png";
import redhate from "@/assets/redhate.png";
import certiport from "@/assets/certiport.png";
import comptia from "@/assets/comptia.png";
import Image from "next/image";


const Sponsorships = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Heading 
          text = {`Les sponsors actuels de nos ateliers et intervenants`}
          noLine={true}
          uppercase={false}
          center={true}
      />
    
      <div className="mx-auto mt-19 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
        <div className="flex items-center justify-center">
          <Image
            alt="Transistor"
            loading="lazy"
            width="160"
            height="50"
            decoding="async"
            src={voda}
          />
        </div>
    
        <div className="flex items-center justify-center">
          <Image
            alt="Tuple"
            loading="lazy"
            width="200"
            height="40"
            decoding="async"
            src={cisc}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="StaticKit"
            loading="lazy"
            width="127"
            height="48"
            decoding="async"
            src={oracle}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Mirage"
            loading="lazy"
            width="138"
            height="48"
            decoding="async"
            src={redhate}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Laravel"
            loading="lazy"
            width="136"
            height="48"
            decoding="async"
            src={certiport}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Statamic"
            loading="lazy"
            width="147"
            height="48"
            decoding="async"
            src={comptia}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;
