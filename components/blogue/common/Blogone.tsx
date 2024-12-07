import React from 'react';
import { blogueDataDetails } from '@/utils/constant';
import Image, { StaticImageData } from "next/image";

// Define the Props type
type Props = {
  title: string;
  description: string;
  image: string | StaticImageData;
  date: string;
  id: number;
};

// Functional component with proper Props typing
const Blogone: React.FC<Props> = ({ title, description, image, date, id }) => {
  return (
    <section id="faq-2" className="faq-2 section py-5 max-w-8xl mx-auto">
      <div className="flex sm:flex-row flex-col items-center justify-between mt-4 p-3 m-4 max-w-7xl mx-auto">
        <div className="mt-4 max-w-5xl text-5xl py-2 font-extralight">
          Python Radio 30: Catch the Fox
        </div>
      </div>

      <div className="w-full item-center lg:w-1/4 mb-4 lg:mb-0">
        <div className="rounded lg:h-[90px] h-[150px] lg:w-[180px] w-full">
          {blogueDataDetails?.length > 0 ? (
            blogueDataDetails.map((image, index) => (
              <div key={index} className="w-full rounded-xl md:h-[40svh] h-auto">
                <Image
                  src={image.image}
                  alt={image.alt || `Image ${index + 1}`}
                  width={700}
                  height={500}
                  className="object-cover w-full h-full rounded-xl"
                  priority={index === 0}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>

        {/* Content Column */}
        <div className='w-full lg:w-3/4 flex flex-col lg:flex-row items-center'>
          <div className='flex flex-col w-full lg:flex-row justify-between items-center lg:items-start'>
            <div className='w-full lg:w-2/3 mb-4 lg:mb-0'>
              <h2 className='text-lg font-bold my-2'>{title}</h2>
              
              <div className='flex flex-col lg:flex-row items-start lg:items-center text-sm'>
                <small className='text-blue font-bold mb-1 lg:mb-0 '>
                  {date}
                </small>
              </div>
              <p className='text-xs mt-1 text-bold'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogone;

