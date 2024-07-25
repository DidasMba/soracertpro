import type { NextPage } from "next";
import Image from 'next/image';


const FrameComponent6 = () => {
  return (
<div className='container'>
<h1 className="px-10 py-6 font-bold text-3xl text-center ">Past Events</h1>

    <div className="m-4 grid gap-6 sm:grid-cols-10">
        {/* Première colonne */}
        <div className="sm:col-span-4 min-h-[270px] image-rounded  shadow ml-14 relative">
            <Image    
            src="/ev10.jpg" 
            alt="Pro 1"
            layout="fill" 
            objectFit="cover" />
        </div>
        {/* Deuxième colonne */}
        <div className="sm:col-span-6 min-h-[270px] image-rounded shadow mr-12 relative">
            <Image  
             src="/ss3.jpg"
             alt="Pro 1" 
             layout="fill"
             objectFit="cover" />
        </div>
    </div>

    <div className="m-4 grid gap-6 sm:grid-cols-10">

            {/* Deuxième colonne */}
            <div className="sm:col-span-6 min-h-[270px] image-rounded shadow  ml-14 relative">
              <Image   
              src="/ss5.jpg"
              alt="Pro 1" 
              layout="fill" 
              objectFit="cover" />
          </div>
          {/* Première colonne */}
          <div className="sm:col-span-4 min-h-[270px] image-rounded  shadow mr-12 relative">
              <Image  
              src="/ev11.jpg" 
              alt="Pro 1" 
              layout="fill" 
              objectFit="cover" />
          </div>
          
    </div>
</div>
 
   
  );
};

export default FrameComponent6;

