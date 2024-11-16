"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/Frame682.png)" }}>
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center">
        <div className="content  p-2 sm:p-8 rounded-3xl max-w-3xl items-center">
          <h2 className="text-white  text-4xl sm:text-7xl font-bold mb-10">Find A <span className="text-[#53dffc]">Job</span> That
            <span className="text-[#53dffc]"> Matches</span> Your Passion 
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-xl py-2 font-extralight">
            Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.
          </p>
          <div className="bg-transparent px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex w-full max-w-md items-center rounded-full bg-white px-4 py-2">
                  <input
                    className="flex h-10 w-full rounded-full border-none border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-transparent text-sm outline-none"
                    placeholder="Search by job title......................"
                    type="email"
                    id="newsletter-email"
                  />
                  <button className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-2 bg-[#00224d] hover:text-[#00224d] text-white hover:bg-[#53dffc]">
                    <svg>
                      <path 
                        strokeLinecap="round"  // Corrected from stroke-linecap
                        strokeLinejoin="round"  // Corrected from stroke-linejoin
                        fillRule="evenodd"      // Corrected from fill-rule
                        d="M10 10 H 90 V 90 H 10 Z" 
                      />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
