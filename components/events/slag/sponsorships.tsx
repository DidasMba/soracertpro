// components/Sponsorships.tsx
import React from 'react';

const Sponsorships = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
        Current sponsorships for our workshops and speakers.
      </h2>
      <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
        <div className="flex items-center justify-center">
          <img
            alt="Transistor"
            loading="lazy"
            width="158"
            height="48"
            decoding="async"
            src="/_next/static/media/transistor.a1e38d49.svg"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Tuple"
            loading="lazy"
            width="105"
            height="48"
            decoding="async"
            src="/_next/static/media/tuple.2f54ed03.svg"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="StaticKit"
            loading="lazy"
            width="127"
            height="48"
            decoding="async"
            src="/_next/static/media/statickit.2e06fcea.svg"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Mirage"
            loading="lazy"
            width="138"
            height="48"
            decoding="async"
            src="/_next/static/media/mirage.e12f40ad.svg"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Laravel"
            loading="lazy"
            width="136"
            height="48"
            decoding="async"
            src="/_next/static/media/laravel.6faebf7c.svg"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="Statamic"
            loading="lazy"
            width="147"
            height="48"
            decoding="async"
            src="/_next/static/media/statamic.923101b6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;
