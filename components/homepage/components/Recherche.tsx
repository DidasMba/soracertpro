import React from 'react';

const Recherche = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="flex items-center mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Recherche
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w6 h-6 text-gray-500 dark:text-gray-400 rounded-4xl"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >

            </svg>
            </div>
             <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 w-[500px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Recherche"
            required
          />
        </div>
        <button
          type="submit"
          className="p-3 ms-2 text-sm font-medium text-white bg-customBlue border border-customBlue hover:bg-customBlue focus:ring-4 focus:outline-none focus:ring-customBlue dark:bg-customBlue dark:hover:bg-customBlue dark:focus:ring-customBlue rounded-xl"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Recherche;

