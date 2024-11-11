import React from "react";

const Program: React.FC = () => {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Our day schedule jam-packed with brilliant, creative, evil geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The worst people in our industry giving the best talks you’ve ever seen. Nothing will be recorded and every attendee has to sign an NDA to watch the talks.
          </p>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-32 -top-40">
          <img
            alt="Background"
            src="/path/to/background-image.jpg"
            fetchPriority="high"
            width="918"
            height="1495"
            decoding="async"
            className="absolute top-0 left-full -translate-x-1/2 sm:left-1/2 sm:-translate-x-[20%] sm:-translate-y-[15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:-translate-y-[8%]"
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {/* Tab List for the days */}
            <div
              className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8"
              role="tablist"
              aria-orientation="vertical"
            >
              <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0">
                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  <time dateTime="2022-04-04">
                    <button
                      className="outline-none"
                      role="tab"
                      aria-selected="true"
                      aria-controls="tab-april-4"
                    >
                      April 4
                    </button>
                  </time>
                </h3>
                <p className="mt-1.5 text-base tracking-tight text-blue-900">
                  The first day of the conference is focused on dark patterns for ecommerce.
                </p>
              </div>

              <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 opacity-70">
                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  <time dateTime="2022-04-05">
                    <button
                      className="outline-none"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-april-5"
                    >
                      April 5
                    </button>
                  </time>
                </h3>
                <p className="mt-1.5 text-base tracking-tight text-blue-900">
                  Next we spend the day talking about deceiving people with technology.
                </p>
              </div>

              <div className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0 opacity-70">
                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  <time dateTime="2022-04-06">
                    <button
                      className="outline-none"
                      role="tab"
                      aria-selected="false"
                      aria-controls="tab-april-6"
                    >
                      April 6
                    </button>
                  </time>
                </h3>
                <p className="mt-1.5 text-base tracking-tight text-blue-900">
                  We close out the event previewing new techniques that are still in development.
                </p>
              </div>
            </div>

            {/* Tab Panels for the days */}
            <div className="lg:col-span-2">
              <div
                id="tab-april-4"
                role="tabpanel"
                aria-labelledby="April 4"
                className="bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur space-y-8"
              >
                <ol role="list">
                  <li aria-label="Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST">
                    <h4 className="text-lg font-semibold tracking-tight text-blue-900">Steven McHail</h4>
                    <p className="mt-1 tracking-tight text-blue-900">Not so one-time payments</p>
                    <p className="mt-1 font-mono text-sm text-slate-500">
                      <time dateTime="2022-04-04T09:00">9:00AM</time> - <time dateTime="2022-04-04T10:00">10:00AM</time> PST
                    </p>
                  </li>
                  {/* Add more schedule items here */}
                </ol>
              </div>
            </div>

            <div
              id="tab-april-5"
              role="tabpanel"
              aria-labelledby="April 5"
              className="hidden bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur space-y-8"
            >
              <ol role="list">
                <li aria-label="Session for April 5">
                  {/* Content for April 5 */}
                </li>
              </ol>
            </div>

            <div
              id="tab-april-6"
              role="tabpanel"
              aria-labelledby="April 6"
              className="hidden bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur space-y-8"
            >
              <ol role="list">
                <li aria-label="Session for April 6">
                  {/* Content for April 6 */}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Program;