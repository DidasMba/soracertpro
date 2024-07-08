"use client";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden sm:h-screen h-auto bg-no-repeat bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(/Frame6821.png)" }}>
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
                      className="h-4 w-4"
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
