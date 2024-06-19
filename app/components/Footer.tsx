import Link from "next/link";

const Footer = ()=>{
    return(
        <footer className="px-6 py-8 bg-customBlue text-white">
            <div>         
              <img
      src="./Soracertlogo.png"
      width={128}
      height={82}
      alt="soracert"
      className="brand-2"
      style={{ maxWidth: '100%', height: 'auto' }}
    />

             
              <p className="">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.  </p> 

            </div>

        </footer>
      
    )
}

export default Footer; 