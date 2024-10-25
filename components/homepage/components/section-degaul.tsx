import { Card } from '@/components/ui/card'
import React from 'react'

const SectionDegaul = () => {
  return (
    <>
       <div className="container  mx-auto  py-8">
       <div className="flex flex-col w-full justify-between space-y-8 md:space-y-0 md:space-x-8">
       <div className=" flex flex-col ">
       <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex flex-col ">
          <div className='flex-col'>
         <img
            alt="Living room with white sofas round-full"
            className="w-full h-auto rounded-lg"
            height="650"
            src="/Bg-image.png"
            style={{
              aspectRatio: "1072/650",
              objectFit: "cover",
            }}
            width="1072"
          />
          </div>
          <br />
          <div className='flex flex-col'>
           <div className="grid grid-cols-2 gap-2">
         <img
            alt="Lobby with white sofas"
            className="w-full h-auto rounded-lg"
            height="320"
            src="/blog-1.png"
            style={{
              aspectRatio: "528/320",
              objectFit: "cover",
            }}
            width="528"
          />
       <img
            alt="Lobby with white sofas"
            className="w-full h-auto rounded-lg"
            height="320"
            src="/blog-2.png"
            style={{
              aspectRatio: "528/320",
              objectFit: "cover",
            }}
            width="528"
          />
          </div>
          </div>
        </div> 
        <div className="w-full md:w-1/2 flex flex-col ">
          <div className='flex flex-col'>
           <div className="grid grid-cols-2 gap-2">
         <img
            alt="Lobby with white sofas"
            className="w-full h-auto rounded-lg"
            height="320"
            src="/blog-1.png"
            style={{
              aspectRatio: "528/320",
              objectFit: "cover",
            }}
            width="528"
          />
       <img
            alt="Lobby with white sofas"
            className="w-full h-auto rounded-lg"
            height="320"
            src="/blog-2.png"
            style={{
              aspectRatio: "528/320",
              objectFit: "cover",
            }}
            width="528"
          />
          </div>
          </div>
          <br />
          <div className='flex-col'>
         <img
            alt="Living room with white sofas round-full"
            className="w-full h-auto rounded-lg"
            height="650"
            src="/Bg-image.png"
            style={{
              aspectRatio: "1072/650",
              objectFit: "cover",
            }}
            width="1072"
          />
          </div>
        </div> 
        
        
       
        
      </div>
       </div>
       <div className=" flex flex-col py-5">
       <div className="py-5">
    
          
          <Card className="grid grid-cols-2 md:grid-cols-3  gap-2 text-center items-center justify-center  p-9 shadow-lg rounded-xl">

            <div className=" text-center items-center justify-center">
      <p className="text-2xl font-bold text-[#05264f]">100 + </p>
      <p className="text-muted-foreground text-sm font-extralight">Personnes</p>
    </div>

   
      
     
          <div className=" text-center items-center justify-center">
      <p className="text-2xl font-bold text-[#05264f]">40 +</p>
      <p className="text-muted-foreground text-sm font-extralight">Certification</p>
    </div>



          <div className=" text-center items-center justify-center">
      <p className="text-2xl font-bold text-[#05264f]">30M +</p>
      <p className="text-muted-foreground  text-sm font-extralight">Evenements</p>
    </div>





</Card>

       
      
            
          </div>
       
       </div>

       </div>
 
    </div>
    </>
  )
}

export default SectionDegaul
