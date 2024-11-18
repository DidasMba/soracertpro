import React from 'react';
import howitwork from '@/assets/how-we-work-mob.png';
import Image from 'next/image'; // For Next.js Image component

const Portrait: React.FC = () => {
  return (
    <header className="container my-lg-32px">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <Image
            src={howitwork}
            alt="Growth Marketing Bootcamp Info Session"
            width={300}
            height={400}
            className="img-fluid mw-100 w-100 rounded-2 object-fit-contain max-height-250 border border-light"
            priority // Ensures this image loads eagerly (important for above-the-fold content)
          />
        </div>
      </div>
    </header>
  );
};

export default Portrait;
