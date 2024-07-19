"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(stotre.JPG)" }}>
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
        <div className="content sm:p-8 rounded-3xl max-w-3xl items-center">
          <h2 className="text-white  text-4xl sm:text-6xl font-bold ">Store</h2><br />
          <h2 className="text-white  text-4xl sm:text-6xl font-bold">OUR STORE</h2>
          <button className="w-[157px] py-2 rounded-4xl bg-[#fff] flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
                    <a className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]">
                     Contact Us
                    </a>
         </button>

      
        </div>
      </div>
    </div>
  );
};

export default HeroSection;