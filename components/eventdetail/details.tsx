const HeroSection = () => {
    return (
     
     
      
      <div className="relative px-4  bg-orange-800   sm:p-20 ">
        <div className="grid sm:grid-cols-2 gap-8  m-8">
          <div>
            <h1 className="font-bold text-blue-500 text-lg">I want to sell</h1>
            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4">Sell</button>
          </div>
          
          <div>
            <h1 className="font-bold text-blue-500 text-lg">I want to buy</h1>
            <p className="text-sm font-light text-gray-400 pt-4 pb-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4">Buy</button>
          </div>
        </div>
      </div>
    


      
    );
  };
  
  export default HeroSection;