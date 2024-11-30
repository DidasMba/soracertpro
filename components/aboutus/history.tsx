// import { NextPage } from "next";
import HistorySec from "./HistorySec";
import { historyData } from "@/utils/constant";
const History = () => {
  return (
    <div className="p-8 bg-[#f1fbfe] dark:bg-gray-900">
      <ol className="items-center sm:flex">
        {historyData.map((step) => (
          <HistorySec
            key={step.id}
            title={step.title}
            date={step.date}
            description={step.description}
          />
        ))}
      </ol>
    </div>
  );
};

export default History;














// import type { NextPage } from "next";
// import { Card } from "@/components/ui/card"
// import {Company} from "@/components/required/company"
// import HistorySec from "./HistorySec";

// const History = () => {
// return (
//     <div className="p-8 bg-[#f1fbfe] dark:bg-gray-900">
//     <ol className="items-center sm:flex">
      
//       <HistorySec />

//       {/* Step 2 */}
//       <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//           <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//             </svg>
//           </div>
//           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.2.0
//           </h3>
//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on December 23, 2021
//           </time>
//           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>

//       {/* Step 3 */}
//       <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//           <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//             </svg>
//           </div>
//           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.3.0
//           </h3>
//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on January 5, 2022
//           </time>
//           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>

//       {/* Step 4 */}
//       <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//           <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
//             <svg
//               className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//             </svg>
//           </div>
//           <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Flowbite Library v1.3.0
//           </h3>
//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             Released on January 5, 2022
//           </time>
//           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//             Get started with dozens of web components and interactive elements.
//           </p>
//         </div>
//       </li>
//     </ol>
//   </div>
//  );
// };

// export default History;

