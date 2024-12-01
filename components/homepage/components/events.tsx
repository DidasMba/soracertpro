import Link from "next/link"
import Image from "next/image"
import Heading from '@/components/common/Heading';


const UpcomingEvents = () =>{


    return (
      <div className="bg-[#f1fbfe] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Heading 
              text = {`Événement à Venir`}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div className="group relative">
            <Link href="/">
              <div className="relative w-full h-80 bg-white overflow-hidden shadow-lg" style={{ borderRadius:'10px'}}>
                <Image
                  alt="Crossover 2023"
                  className="w-full h-full object-center object-cover "
                 
                  height="320"
                  src="/blog-3.png"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                    
                  }}
                  width="320"
                />
                 <div className="overlay"></div>
              
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                <div>
                    <p className="text-lg font-medium text-white">Atelier de Développement Web - React.js</p>
                    <p className="text-sm font-light text-white">Lubumbashi, 05 av. Maman Yemo</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="group relative">
            <Link href="/">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg" style={{ borderRadius:'10px'}}>
                <Image
                  alt="Apostolic Tour"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="/blog-2.png"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                    borderRadius:'10px'
                  }}
                  width="320"
                />
                 <div className="overlay"></div>
             
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                  <div>
                    <p className="text-lg font-medium text-white">Séminaire sur la Sécurité Informatique 2024</p>
                    <p className="text-sm font-light text-white">Lubumbashi, 05 av. Maman Yemo</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="group relative">
            <Link href="/">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg" style={{ borderRadius:'10px'}}> 
                <Image
                  alt="Africa Haguruka24"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="/blog-1.png"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                    borderRadius:'10px'
                  }}
                  width="320"
                />
                 <div className="overlay"></div>
               
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                <div>
                    <p className="text-lg font-medium text-white">Webinaire : Les Dernières Tendances en Blockchain</p>
                    <p className="text-sm font-light text-white"> En ligne</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="group relative">
            <Link href="/">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg" style={{ borderRadius:'10px'}}>
                <Image
                  alt="Africa Haguruka24"
                  className="w-full h-full object-center object-cover"
                  height="320"
                  src="/blog-1.png"
                  style={{
                    aspectRatio: "320/320",
                    objectFit: "cover",
                    borderRadius:'10px'
                  }}
                  width="320"
                />
                 <div className="overlay"></div>
              
                <div className="absolute inset-0 p-4 flex justify-between items-end">
                <div>
                    <p className="text-lg font-medium text-white">Lorem Ipsum</p>
                    <p className="text-sm font-light text-white"> 100 Smart Street, LA, USA</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default UpcomingEvents