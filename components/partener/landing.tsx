"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(sponsor.png)" }}>
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
        <div className="content sm:p-8 rounded-3xl max-w-3xl items-center">
          <h2 className="text-white  text-4xl sm:text-6xl font-bold ">Meet</h2><br />
          <h2 className="text-white  text-4xl sm:text-6xl font-bold">OUR SPONSORS</h2>

      
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
