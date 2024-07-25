import { Card } from "@/components/ui/card"
import { Button } from "../ui/button"
import Link from 'next/link'

const Featured = () => {
return(
    <>
 <section id="faq-2" className="faq-2 section py-5 max-w-8xl mx-auto" >
   <div className="flex items-center justify-center mt-4  p-3 m-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900" style={{textTransform:'uppercase'}}>Featured Job</h2>
 
      </div>
     
      <div className=" max-w-7xl mx-auto py-5" data-aos="fade-up"> 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols 
            -3 gap-4 p-5">
                 {[...Array(9)].map((_, index) => (
                  <Link href='/career/career-1'>
  <Card className="shadow p-4 gap-2 px-5 pr-2 bg-slate-50" key={index}>
        <h4 className="text-xl font-bold">Techical Support Specialist</h4>
      <div className=" p-2 flex flex-row  justify-start items-center">
  <div className="bg-gray-200 " style={{textTransform:'uppercase', marginRight:'8px' , padding:'0px 0px 2px'}}>part-time</div>
      <div className="member-info">
      <p className="texl-sm font-extralight">Salary: $20,000 - $25,000</p>
    </div>
  </div>
  <div className="p-2 flex   justify-between items-center">
  <div>
  <h4 className="text-lg font-semibold">Google Inc.</h4>
      <div className="member-info flex flex-row  justify-start items-center">
      <svg className=" w-4 h-4 font-mono" style={{marginRight: '2px',}} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><p className="texl-sm font-extralight">Dhaka, Bangladesh</p>
    </div>
    </div>
    <div>
    <svg className=" w-7 h-7 font-mono justify-start items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M 5 5 L 5 27 L 27 27 L 27 9.59375 L 26.71875 9.28125 L 22.71875 5.28125 L 22.40625 5 Z M 7 7 L 10 7 L 10 13 L 22 13 L 22 7.4375 L 25 10.4375 L 25 25 L 23 25 L 23 16 L 9 16 L 9 25 L 7 25 Z M 12 7 L 16 7 L 16 9 L 18 9 L 18 7 L 20 7 L 20 11 L 12 11 Z M 11 18 L 21 18 L 21 25 L 11 25 Z"/></svg>
    </div>
  </div>
           
            
            
        
      </Card>
      </Link>
                 ))}
      </div>
      </div>
</section>

    </>
)
}
export default Featured