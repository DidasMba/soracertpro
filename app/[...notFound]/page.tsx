"use client";
import Link from 'next/link'


const HeroSection = () => {
  return (
    <>
    
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/bg-aboutus.png)" }}>
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
        <div className="content  p-2 sm:p-8 rounded-3xl max-w-3xl items-center">
          <h2 className="text-white  text-4xl sm:text-7xl font-bold mb-10">Page Not Found
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-xl py-2 font-extralight">
          We regret to inform you that page you wantend is not available at the moment
            </p>
          <div className="bg-transparent px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-start">
                <div className="flex items-center rounded-full bg-white px-4 py-2">
                <Link href="/" className="w-[157px] py-2 rounded-4xl bg-[#fff] flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
                    <button className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]">
                    Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
   </>
  );
};

export default HeroSection;
