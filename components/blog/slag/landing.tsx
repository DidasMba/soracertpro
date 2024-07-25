"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/bg-aboutus.png)" }}>
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
        <div className="content  p-2 sm:p-8 rounded-3xl max-w-3xl items-center">
          <h2 className="text-white  text-3xl sm:text-5xl font-bold mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit 
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-xl py-2 font-extralight">
          Friday May 24, 2024 | Article
            </p>
        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
