import Image from "next/image"

const MeetOurTeam = () => {
return(
    <>
 <section id="faq-2" className="faq-2 section py-5 max-w-full " >
        <div className="text-center container" data-aos="fade-up">
        <h2 className="text-4xl font-bold leading-tight text-[#05264f] py-2">Meet our team members</h2>
     
        <div className="mt-4 max-w-2xl mx-auto text-xl py-2 font-extralight">
        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.
        </div>
      </div>
      <div className=" max-w-6xl mx-auto py-5" data-aos="fade-up"> 
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols 
            -3 gap-4 p-5">
 {[...Array(6)].map((_, index) => (
<div className="p-3 " key={index}>
      
           
      <div className="flex flex-col justify-center items-center">
      
<div className="rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-start py-[21.9px] px-5 z-[1]"  style={{borderRadius:'20px'}}>

<Image
width={100}
height={100}
  className="h-[100.2px] w-[100.2px]"
  loading="lazy"
  alt=""
  style={{ borderRadius:'100px',objectFit:'cover'}}
  src={`/Image Placeholder.png`}
/>
</div>

<div className="self-stretch flex flex-col items-center justify-center gap-[8px] mx-auto">
<h2 className="sm:text-2xl text-xl leading-[38px] font-bold items-center text-[#05264f] justify-center" style={{textDecoration:'uppercase'}}>
John Carter
</h2>
<div className="items-center justify-center text-center  font-extralight">
CEO & Co-Founder
</div>
</div>
      </div>
  

</div>
 ))}
</div>
  
      </div>

</section>

    </>
)
}
export default MeetOurTeam