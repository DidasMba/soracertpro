"use client";

const Contact = () => {
  return (
    <div className="relative overflow-hidden  h-auto bg-no-repeat bg-cover bg-center flex items-center p-5 justify-center" style={{ backgroundImage: "url(/backgrund.png)" }}>
      <div className="container bg-white p-4 mx-auto max-w-6xl  justify-start items-center">
      <div className="text-center container" data-aos="fade-up">
        <h2 className="text-4xl font-bold leading-tight text-[#05264f] py-2">Get in touch</h2>
      </div>
   
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto w items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      
      <div className=" flex w-full md:w-1/3 space-y-8 items-center justify-center"  data-aos="fade-up" data-aos-delay="100">
       
      <div className="place-items-center  py-3 p-3  max-w-2xl">

<div className="text-3xl font-bold uppercase  text-[#05264f] mb-5 py-4">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. 
</div>
</div>
      </div>
      <form
        className="w-full md:w-2/3 items-center"  data-aos="fade-up" data-aos-delay="200"
       >
    
           <div className="w-full  mb-4">
            
             <input
               type="text"
               name="name"
                 className="form-control w-full p-3 border border-gray-300 rounded"
               id="name"
               placeholder="Your Name"
               required
             />
           </div>
           <div className="w-full  mb-4">
      
             <input
               type="email"
                 className="form-control w-full p-3 border border-gray-300 rounded"
               name="email"
               id="email"
               placeholder="Your Email"
               required
             />
           </div>
    
         <div className="mb-4">
       
           <textarea
              className="form-control w-full p-3 border border-gray-300 rounded"
             name="message"
             rows={4}
             required
           ></textarea>
         </div>
         <div className="text-start">
           <button type="submit" className="bg-[#00224d] text-white py-2 px-4  hover:bg-[#00224d]"  >
             Send Message
           </button>
         </div>
       </form>
        </div>
        </div>
        </div>
  );
};

export default Contact;
