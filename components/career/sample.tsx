import { Card } from "@/components/ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

const Sample = () => {
return(
    <>
 <section id="faq-2" className="faq-2 section py-5 max-w-8xl mx-auto" >
   <div className="flex sm:flex-row flex-col items-center justify-between mt-4  p-3 m-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900" style={{textTransform:'uppercase'}}>Popular category</h2>
        <div className="flex space-x-2">
          <div className="bg-transparent px-4 py-8">
            <div className="max-w-7xl mx-auto">
          
              <div className="flex flex-row items-center ">
       
                <div className="flex flex-row items-center bg-slate-200 px-2 py-1 text-[#05264f]">
                <Link href="/blog" className="w-[200px] py-2 rounded-4xl bg-slate-200 flex flex-row items-center justify-center pt-2  pb-[8px] box-border whitespace-nowrap z-[1] text-center text-sm text-[#05264f]" style={{ borderRadius: '20px' }}>
                    <button className="">
                    View all
                    </button>
                    <svg  
             
             className=" w-4 h-4 font-mono justify-center items-cente" style={{marginLeft:'8px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
       
                  </Link>
                 
                </div>
                <div>
               
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
     
      <div className=" max-w-7xl mx-auto py-5" data-aos="fade-up"> 
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols 
            -4 gap-4 p-5">
                {[...Array(8)].map((_, index) => (
    <div className=" p-3 gap-2 px-3 bg-transparent" key={index} >
      <div className="team-member  flex flex-row  justify-start items-center">
      <div className="pic mr-3"><img src="/first-aid-kit-duotone 1.png" style={{height:'50px', width:'50px' , objectFit:'cover'}} className="img-fluid" alt="" /></div>
      <div className="member-info">
      <h4 className="stretched-link text-lg font-bold">Modern Construction</h4>
      <p className="texl-sm font-extralight">357 Open position</p>
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
export default Sample