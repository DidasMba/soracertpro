import React from 'react';

const Update: React.FC = () => {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 mt-20 lg:px-8">
        <div className="relative -mx-4 overflow-hidden rounded-2xl bg-[#f1fbfe] px-4 py-6 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          
          {/* Background Image */}
          <img 
            alt="Background pattern for the newsletter section" 
            loading="lazy" 
            width="919" 
            height="1351" 
            decoding="async" 
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]" 
            style={{ color: 'transparent' }} 
            src="/_next/static/media/background-newsletter.488a0204.jpg"
          />
          
          {/* Main Content Grid */}
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            
            {/* Text Section */}
            <div>
              <p className="font-extrabold text-4xl tracking-tighter text-[#05264f] sm:text-5xl">
              Restez à jour
              </p>

             
              <p className="mt-4 text-lg tracking-tight">
              Recevez des mises à jour sur tous nos événements et soyez les premiers informés lorsque les billets sont mis en vente.
              </p>
            </div>

            {/* Form Section */}
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Sign up to our newsletter <span aria-hidden="true">↓</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                
                {/* Email Input */}
                <input 
                  type="email" 
                  required 
                  placeholder="Email address" 
                  aria-label="Email address" 
                  className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                
                {/* Submit Button */}
                <button 
                  className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70" 
                  type="submit"
                >
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                      <path d="M14 7l5 5-5 5M19 12H5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
