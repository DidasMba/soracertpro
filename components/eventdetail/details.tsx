const HeroSection = () => {
    return (
     
     
      
      <div className="relative px-4 py-10 bg-orange-800   sm:p-20 ">
        <div className="grid sm:grid-cols-2 gap-8  m-8">
          <div>
            <h1 className="font-bold text-blue-500 text-lg">I want to sell</h1>
            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4">Sell</button>
          </div>
          
          <div>
            <h1 className="font-bold text-blue-500 text-lg">I want to buy</h1>
            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim justo vel sagittis pellentesque. Donec auctor quis lectus vel rhoncus. Integer vehicula vehicula sem eget egestas. Duis a leo at enim tempus interdum sit amet sit amet lacus. Morbi in risus turpis. Pellentesque sed lacus vel lectus auctor placerat. Praesent lobortis viverra orci.

Praesent eu congue mi. Aenean at risus et purus elementum aliquet. Fusce tristique lacus dolor, ac facilisis sem aliquet eu. In hac habitasse platea dictumst. Cras lobortis vulputate cursus. Duis nec nisi venenatis, ultrices metus sit amet, aliquam augue. In nec ante nunc. Fusce ornare justo a velit mattis bibendum viverra sit amet erat. </p>
            <button className=" text-white font-bold py-6 px-4  bg-customBlue">Sign up</button>
            <a className="hidden lg:inline-block py-2 text-sm  font-bold rounded-xl transition duration-200" href="#">Sign up</a>
          </div>
        </div>
      </div>
    


      
    );
  };
  
  export default HeroSection;