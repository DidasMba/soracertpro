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
                        <div className="lg:col-span-2 md:col-span-4 col-span-12">
                           <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  About us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Legal information</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Contact us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Blog</a>
                            </li>

                           </ul>
                        </div>
                        <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  About us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Legal information</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Contact us</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Blog</a>
                            </li>

                           </ul>

                        </div>
                        <div className="lg:col-span-3 md:col-span-4 col-span-12">
                        <h3 className="tracking-wide text-gray-300 font-semibold">COMPANY</h3>
                           <ul className="list-none mt-6 space-y-2">
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Phone: 1234567890</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Email: company@email.com</a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="text-gray-300 hover:text-gray-400 Transition-all duration-500 ease-in-out"
                                >
                                  Location: 100 Smart Street, LA, USA</a>
                            </li>
                            

                           </ul>

                        </div>




              </div>
          </div>
            
          
        </footer>
      
    )
}

export default Footer; 