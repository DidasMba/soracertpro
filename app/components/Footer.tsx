import Link from "next/link";

const Footer = ()=>{
    return(
        <footer className="px-6 py-14 bg-customBlue text-white">
          <div className="container mx-auto py-14 px-6">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-7">

                <div className="lg:col-span-4 col-span-12">        

                    <a href="/">
                    <img
                        src="./Soracertlogo.png"
                        width={128}
                        height={82}
                        alt="soracert"
                        className="brand-2"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />  
                    </a> 
                      
                    <p className="text-gray-300 text-base">
                      Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. </p> 

                  </div>

            </div>
           </div>
            
          
        </footer>
      
    )
}

export default Footer; 