import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;






// import { Card } from '@/components/ui/card'
// import React from 'react'

// const Client = () => {
//   return (
//     <>
//       <section id="faq-2" className="max-w-7xl mx-auto w-full faq-2 section py-5">
//         <div className="max-w-7xl mx-auto w-full text-center container" data-aos="fade-up">
//           <h2 className="text-sm font-extrabold leading-tight py-1">Témoignages.</h2>
//           <div className="mt-4 max-w-2xl mx-auto text-2xl py-2 font-bold text-[#05264f]">
//             Ils ont rejoint nos bootcamps pour changer leur vie.
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto py-5" data-aos="fade-up">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-9">

//             {/* Card 1 */}
//             <Card className="p-3 m-2 transition-transform duration-200 ease-in-out sasa">
//               <div className="p-4 py-4">
//                 <p className="text-sm text-gray-400 font-extralight">Nous accompagnons les jeunes dans leur parcours de formation et de développement.</p>
//               </div>
//               <div className="flex items-start justify-start py-0 box-border max-w-full" style={{borderTop:'solid darkgray'}}>
//                 <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-2">
//                   <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
//                     <img className="h-[50px] w-[50px] z-[1]" loading="lazy" style={{borderRadius:'50px'}} alt="" src="/Image Placeholder.png" />
//                     <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
//                       <div className="flex flex-col items-start justify-start gap-[3.4px]">
//                         <b className="leading-[20px] font-bold">Matt Cannon</b>
//                         <div className="text-base leading-[18px] text-darkgray font-light">Head of Marketing</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Card 2 */}
//             <Card className="p-3 m-2 transition-transform duration-200 ease-in-out sasa">
//               <div className="p-4 py-4">
//                 <p className="text-sm text-gray-400 font-extralight">Nous accompagnons les jeunes dans leur parcours de formation et de développement.</p>
//               </div>
//               <div className="flex items-start justify-start py-0 box-border max-w-full" style={{borderTop:'solid darkgray'}}>
//                 <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-2">
//                   <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
//                     <img className="h-[50px] w-[50px] z-[1]" loading="lazy" style={{borderRadius:'50px'}} alt="" src="/Image Placeholder.png" />
//                     <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
//                       <div className="flex flex-col items-start justify-start gap-[3.4px]">
//                         <b className="leading-[20px] font-bold">Matt Cannon</b>
//                         <div className="text-base leading-[18px] text-darkgray font-light">Head of Marketing</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             {/* Card 3 */}
//             <Card className="p-3 m-2 transition-transform duration-200 ease-in-out sasa">
//               <div className="p-4 py-4">
//                 <p className="text-sm text-gray-400 font-extralight">Nous accompagnons les jeunes dans leur parcours de formation et de développement.</p>
//               </div>
//               <div className="flex items-start justify-start py-0 box-border max-w-full" style={{borderTop:'solid darkgray'}}>
//                 <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-2">
//                   <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
//                     <img className="h-[50px] w-[50px] z-[1]" loading="lazy" style={{borderRadius:'50px'}} alt="" src="/Image Placeholder.png" />
//                     <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
//                       <div className="flex flex-col items-start justify-start gap-[3.4px]">
//                         <b className="leading-[20px] font-bold">Matt Cannon</b>
//                         <div className="text-base leading-[18px] text-darkgray font-light">Head of Marketing</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Client
