"use client";
import {Company} from "@/components/required/company"
const Partners = () => {
  return (
   
      <div className="container bg-white p-4 py-4 mx-auto max-w-7xl  justify-start items-center">
        <div className="flex flex-col py-9 md:flex-row w-full max-w-7xl mx-auto  items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      
      <div className=" flex w-full md:w-1/2 space-y-8 items-center justify-center"  data-aos="fade-up" data-aos-delay="100">
       
      <div className="place-items-center  py-3 p-3  max-w-2xl mx-auto">

<div className="text-2xl font-bold uppercase  text-[#05264f] ">Trusted by 10,000+ companies around the world
</div>
</div>
      </div>
      <div
        className="w-full md:w-1/2 items-center"  data-aos="fade-up" data-aos-delay="200"
       >
    <div className="text-xl font-bold uppercase  text-[#05264f] ">Tagline
    </div>

    <p className="font-extralight">Our customers accomplish amazing things every day. They work to find cures to cancer, travel to space.</p>
       </div>
       <div className="w-fullitems-center p-2 py-3"  data-aos="fade-up" data-aos-delay="200">
        </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {Company.map((company,index) =>(
   <div className="flex flex-col items-center justify-center space-y-4" key={index}>
   <img
       alt="Event Stadium"
        className="h-[100.2px] w-[140.2px]"
       src={`/${company.img}`}
      
       style={{
         objectFit: "contain",
       }}
     />
   </div>
            ))}
         
       
      
            
          </div>
        </div>
       </div>
      
  );
};

export default Partners;
