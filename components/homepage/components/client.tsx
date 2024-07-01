import React from 'react'

const Client = () => {
  return (
    <>
     <section id="faq-2" className="faq-2 section py-5 max-w-full " >
     <div className="text-center container" data-aos="fade-up">
        <h2 className="text-4xl font-bold leading-tight text-[#05264f] py-2"> What our clients say</h2>
      
        <div className="mt-4 max-w-4xl mx-auto text-xl py-2 font-extralight">
        «When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.»
        </div>
      </div>
     <div className=" max-w-6xl mx-auto py-5" data-aos="fade-up"> 
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols 
            -3 gap-4 py-9">
                 
          <div className=" flex  items-start justify-start py-0  box-border max-w-full" style={{borderTop:'solid darkgray'}}>
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-7">
              <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px]  z-[1]"
                  loading="lazy"
                  style={{borderRadius:'50px'}}
                  alt=""
                  src="/Image Placeholder.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                  <div className=" flex flex-col items-start justify-start gap-[3.4px]">
                    <b className="  leading-[20px]  font-bold">
                      Matt Cannon
                    </b>
                    <div className=" text-base leading-[18px] text-darkgray   font-light">
                      Head of Marketing
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className=" flex  items-start justify-start py-0  box-border max-w-full p-2" style={{borderTop:'solid #05264f'}}>
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-7">
              <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] "
                  style={{borderRadius:'50px'}}
                  loading="lazy"
                  alt=""
                  src="/Image Placeholder.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                  <div className=" flex flex-col items-start justify-start gap-[3.4px]">
                    <b className="  leading-[20px] ">
                    Sophie Moore
                    </b>
                    <div className=" text-base leading-[18px] text-darkgray  font-light">
                    Web Designer
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              <div className=" flex  items-start justify-start py-0  box-border max-w-full p-2" style={{borderTop:'solid darkgray'}}>
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] py-7">
              <div className="w-[248px] flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px]  z-[1]"
                  loading="lazy"
                  style={{borderRadius:'50px'}}
                  alt=""
                  src="/Image Placeholder.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                  <div className=" flex flex-col items-start justify-start gap-[3.4px]">
                    <b className="  leading-[20px] ">
                    John Carter
                    </b>
                    <div className=" text-base leading-[18px] text-darkgray  font-light">
                    Lead Developer
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
                </div>

        </div>


     </section>
      
    </>
  )
}

export default Client
