import type { NextPage } from "next";
import { Card } from "@/components/ui/card"
import {Company} from "@/components/required/company"

const TrustedCompany = () => {
  return (
       
<section className="flex flex-col md:flex-ro justify-center items-center py-12 px-4"  data-aos="fade-up">
        <div className="flex flex-col md:flex-row w-full max-w-6xl w items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      
          <div className=" flex w-full md:w-1/3 space-y-8 items-center justify-center"  data-aos="fade-up" data-aos-delay="100">
           
          <div className="place-items-center  py-3 p-3  max-w-2xl">
    
    <div className="text-3xl font-bold uppercase  text-[#05264f] mb-5 py-4">Lorem Ipsum
    Trusted by 10,000+ companies around the world
  </div>
 </div>
          </div>
          <div className="w-full md:w-2/3 items-center p-2 shadow-lg bg-slate-200"  data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5 ">
            {Company.map((company,index) =>(
   <div className="flex flex-col items-center justify-center space-y-4" key={index}>
   <img
       alt="Event Stadium"
        className="h-[140.2px] w-[140.2px]"
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
      
      </section>
  );
};

export default TrustedCompany;

