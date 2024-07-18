import { Card } from "@/components/ui/card"
import { Button } from "../ui/button"
const HeroSection = () => {
    return (
     
     
      
      <div className="relative px-4 py-10 bg-orange-800   sm:p-20 ">
        <div className="grid sm:grid-cols-2 gap-8  m-8">
          <div>

          <div className=" p-3 gap-2 px-3 bg-transparent" >
                <div className="team-member  flex flex-row  justify-start items-center">
                <div className="pic mr-3"><img src="/calend.png" style={{height:'50px', width:'50px' , objectFit:'cover'}} className="img-fluid" alt="" /></div>
                <div className="member-info">
                <h4 className="stretched-link text-lg font-bold">Friday</h4>
                <p className="texl-sm font-extralight">May 24, 2024</p>
              </div>
              </div>
         </div>
         

         <div className="flex gap-2">
         <div className=" p-3 gap-2 px-3 bg-transparent" >
                <div className="team-member  flex flex-row  justify-start items-center">
                <div className="pic mr-3"><img src="/clock.png" style={{height:'50px', width:'50px' , objectFit:'cover'}} className="img-fluid" alt="" /></div>
                <div className="member-info">
                <h4 className="stretched-link text-lg font-bold">Friday</h4>
                <p className="texl-sm font-extralight">May 24, 2024</p>
              </div>
              </div>
         </div>

         <div className=" p-3 gap-2 px-3 bg-transparent" >
                <div className="team-member  flex flex-row  justify-start items-center">
               
                <div className="member-info">
                <h4 className="stretched-link text-lg font-bold">Friday</h4>
                <p className="texl-sm font-extralight">May 24, 2024</p>
              </div>
              </div>
         </div>
            

         </div>
         
            
        
            
            <button className="w-[157px] py-2 rounded-4xl bg-customBlue flex flex-row items-start justify-start pt-3 px-[19px] pb-[11px] box-border whitespace-nowrap z-[1] text-center text-sm text-white" style={{ borderRadius: '20px' }}>
                    <a className="[text-decoration:none] h-[23px] flex-1 relative font-semibold text-[inherit] inline-block z-[1]">
                      Add Calendar
                    </a>
            </button>

            
          </div>
          
          <div>
            <h1 className="font-bold text-lg">About thin Event</h1>
            <p className="text-sm font-light  pt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim justo vel sagittis pellentesque. Donec auctor quis lectus vel rhoncus. Integer vehicula vehicula sem eget egestas. Duis a leo at enim tempus interdum sit amet sit amet lacus. Morbi in risus turpis. Pellentesque sed lacus vel lectus auctor placerat. Praesent lobortis viverra orci.

              Praesent eu congue mi. Aenean at risus et purus elementum aliquet. Fusce tristique lacus dolor, ac facilisis sem aliquet eu. In hac habitasse platea dictumst. Cras lobortis vulputate cursus. Duis nec nisi venenatis, ultrices metus sit amet, aliquam augue. In nec ante nunc. Fusce ornare justo a velit mattis bibendum viverra sit amet erat. </p>
           <h1 className="  text-lg">I want to buy</h1>
            
            
          </div>
        </div>
      </div>
    


      
    );
  };
  
  export default HeroSection;