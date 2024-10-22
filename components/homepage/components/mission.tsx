import { Card } from "@/components/ui/card"

const Mission = () => {
return(
    <>
 <section id="faq-2" className="faq-2 section py-5 max-w-full " >
        <div className="text-center container" data-aos="fade-up">
        <h2 className="text-4xl font-bold leading-tight text-[#05264f] py-2">Lorem Ipsum Header</h2>
        <div className="mt-4 mb-3 h-1 w-24 bg-[#05264f] mx-auto" />
        <div className="mt-4 max-w-2xl mx-auto text-xl py-2 font-extralight">
        Évoluez avec la communauté SoraCert,
innovez avec la technologie.
        </div>
      </div>
      <div className=" max-w-3xl mx-auto py-5" data-aos="fade-up"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols 
            -2 gap-4 p-5">
      <Card className="p-9 shadow-lg " style={{borderRadius:'20px'}}>
      
           
                <div className="flex flex-col justify-center items-center">
                 <div className="self-stretch flex flex-row items-start justify-center">
        <div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-[21.9px] px-5 z-[1]">
          <div className=" rounded-xl bg-whitesmoke-200 hidden" />
          <img
            className="h-[60.2px] w-[60.2px] relative z-[1]"
            loading="lazy"
            alt=""
            src={`/Image Placeholder.png`}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px] mx-auto">
      <h2 className="text-2xl leading-[38px] font-bold items-center text-[#05264f] justify-center" style={{textDecoration:'uppercase'}}>
       Mission
        </h2>
        <div className="items-center justify-center text-center  font-extralight">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
          cons elementum tempus hac.
        </div>
      </div>
                </div>
            
        
      </Card>
      <Card className="p-9 shadow-lg " style={{borderRadius:'20px'}}>
      
           
      <div className="flex flex-col justify-center items-center">
       <div className="self-stretch flex flex-row items-start justify-center">
<div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-[21.9px] px-5 z-[1]">
<div className=" rounded-xl bg-whitesmoke-200 hidden" />
<img
  className="h-[60.2px] w-[60.2px] relative z-[1]"
  loading="lazy"
  alt=""
  src={`/Image Placeholder.png`}
/>
</div>
</div>
<div className="self-stretch flex flex-col items-center justify-center gap-[8px] mx-auto">
<h2 className="text-2xl leading-[38px] font-bold items-center text-[#05264f] justify-center" style={{textDecoration:'uppercase'}}>
Vision
</h2>
<div className="items-center justify-center text-center  font-extralight">
Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
cons elementum tempus hac.
</div>
</div>
      </div>
  

</Card>
      </div>
      </div>
</section>

    </>
)
}
export default Mission