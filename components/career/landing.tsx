"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/Frame682.png)" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container p-10 mx-auto max-w-8xl flex justify-start items-center relative z-10">
        <div className="content p-2 sm:p-8 rounded-3xl max-w-3xl items-center bg-white bg-opacity-20 backdrop-blur-lg shadow-xl">
          <h2 className="text-white text-4xl sm:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Find A <span className="text-[#53dffc]">Job</span> That <span className="text-[#53dffc]">Matches</span> Your Passion
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-xl py-2 font-light animate-slide-up">
            Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract, and internships.
          </p>

          <div className="bg-transparent px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center md:flex-row md:justify-between animate-zoom-in">
                <div className="flex w-full max-w-lg items-center rounded-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl px-4 py-2">
                  <input
                    className="flex h-12 w-full rounded-full px-4 py-2 text-sm text-gray-800 bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#53dffc] transition-all duration-300"
                    placeholder="Search by job title."
                    type="text"
                    id="search-input"
                  />
                  <button className="inline-flex items-center justify-center rounded-full h-12 w-12 bg-[#00224d] text-white hover:bg-[#53dffc] transition-colors duration-300 ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
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
