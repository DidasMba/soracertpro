import React from 'react'

const DegaulSection = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="flex flex-col md:flex-row w-full justify-between space-y-8 md:space-y-0 md:space-x-8">
       <div className="w-full md:w-2/5 flex ">
       <img
            alt="Lobby with white sofas"
            className="w-full h-[60vh] rounded-lg"
            height="420"
            src="/blog-1.png"
            style={{
              aspectRatio: "528/420",
              objectFit: "cover",
            }}
            width="528"
          />
       </div>
       <div className="w-full md:w-3/5 ">
       <div className="text-start max-w-2xl sm:pt-[200px] pt-[10px]">
        <h2 className="text-3xl font-bold leading-tight text-gray-900">Nous aidons les jeunes a lancer leurs carrieres</h2>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between space-y-8 md:space-y-0 md:space-x-8 py-4">
        <div className="w-full md:w-1/2 flex ">
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
        </div>
        <div className="w-full md:w-1/2 flex sm:pt-[30px] pt-[10px]">
        <div className="place-items-center py-7">
             
           
            <p className="mt-4 max-w-2xl mx-auto text-md py-2 font-extralight">
            Depuis 2020, nous avons eu un impact significatif sur l'écosystème, en formant et en offrant des bourses à des milliers de jeunes africains..</p>
            <div className=" flex justify-center items-center py-5">
        
          </div>

            </div>
            </div>
        </div>
        </div>
      </div>
       </div>
    
    </>
  )
}

export default DegaulSection
