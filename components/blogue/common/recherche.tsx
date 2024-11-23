import React from 'react';

function Recherche() {
  return (
    <header className="bg-[#f1fbfe] py-16 px-6 sm:px-12 sm:text-center bg-gradient-to-b  dark:from-gray-800 dark:to-gray-900">
    
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#05264f] max-w-4xl'>
          Restez informé !
      </h1> 
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        Subscribe to our newsletter and never miss the latest updates from our
        team.
      </p>
      <section className="max-w-xl mx-auto">
        <h2 className="sr-only">Newsletter Subscription</h2>
        <form
          action="https://app.convertkit.com/forms/3181837/subscriptions"
          method="post"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Email Input */}
          <div className="relative flex-grow w-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            >
              <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
              <path d="m6 7 6 5 6-5"></path>
            </svg>
            <input
              name="email_address"
              type="email"
              required
              autoComplete="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full py-3 pl-12 pr-4 rounded-1xl shadow-sm text-gray-900 placeholder-gray-500 bg-white dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none border border-gray-300 dark:border-gray-600"
            />
          </div>
          {/* Subscribe Button */}
          <button
            type="submit"
            className="py-3 px-6 bg-sky-500 rounded-1xl text-white font-semibold  shadow-md hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 dark:focus:ring-offset-gray-900"
          >
            Subscribe
          </button>
        </form>
      </section>
    </header>
  );
}

export default Recherche;
