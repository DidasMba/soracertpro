/** @format */

"use client";


import EventTile from "./EventTile";

// import Update from "./Update";
import Heading from "@/components/common/Heading";
import Paragrah from "@/components/common/Paragrah";

// import image from 'next/image',

const HeroSection = () => {
    return (
        <header className='max-w-7xl mx-auto w-full container'>
            <div className='row justify-between rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-md py-6 bg-[#f1fbfe]'>
    <div className='flex items-center px-8 py-6'>
        <div className='pt-4 ps-lg-5'>
            <span className='w-auto bg-red-500 text-white py-2 px-4 rounded-md text-uppercase text-red text-xs font-semibold'>
                Live events
            </span>

            <div className='flex flex-col mt-6'>
                <Heading 
                    text={`Explorez nos événements en direct, conférences et ateliers gratuits.`}
                />
                <Paragrah
                     text={` Participez à un atelier gratuit sur le design UX ou l'analyse des données, assistez aux journées de démonstration de nos étudiants, ou rejoignez-nous pour une session d'information interactive afin d'en savoir plus sur SoraCert.`}
                
                />
            </div>
        </div>
    </div>
    <div className='flex justify-center items-center p-4'>
        <div className='w-[548px] h-[340px] rounded-2xl overflow-hidden shadow-lg'>
            <img
                width='547'
                height='340'
                alt='Participants engaging in events at'
                
                className='w-full h-full object-cover'
                loading='lazy'
                src='https://res.cloudinary.com/dnzidlufh/image/upload/v1729605148/event/cada8ku8vh6dqt8jqudd.jpg'
            />
              
        </div>
    </div>
</div>
            <div className='max-w-7xl mx-auto w-full container pt-3 pt-xl-5 pb-5'>

                <h1 className='text-2xl mt-8 bg-white border-b pb-4 font-bold'>
                   Événements correspondant à votre recherche
                </h1>
                <div>
                    
                </div>
                <div className='mb-6 col-12 col-lg-10 ps-xl-5'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-8 mt-8'>
                        Categories
                    </h2>
                     
                   <div className="flex mt-4 mb-8 font-semibold space-x-4">
                            <button>Atelier</button>
                            <button>Hackaton</button>
                            <button>Conférence</button>
                    </div>
                    <EventTile
                        title='Alumni Stories: From bootcamp to the gaming industry'
                        date='Tue, October 29 • 13:00 pm (Canada/EasternTime)'
                        location={"En ligne"}
                        category={"Atelier"}
                        image={
                            "https://photos.google.com/u/0/share/AF1QipOrUUNX0pwVhpCAV_btGty9RFBg43OGM_D-1HCjwUSfb9AmY93DhNSvlJg8ftFpOg/photo/AF1QipPIOmTT4EM_8zil9kjKKrpIXivW4LU5I9skKYtA?key=SVR2S3hmQlBYcVJ5NjR2aFVTbUFGb25PTDk4cEx3"
                        }
                    />
                    <EventTile
                        title='Alumni Stories: From bootcamp to the gaming industry'
                        date='Tue, October 29 • 13:00 pm (Canada/EasternTime)'
                        location={"En ligne"}
                        category={"Atelier"}
                        image={
                            "https://www-img.lewagon.com/6vtJYbvc7CWGJA8DfkQEGmtoUdpADsXX7CHkvIpWBSY/rs:fill:270:135/plain/s3://wagon-www/w8zpkhwi22ag51yz4rp1bf5a3t35"
                        }
                    />
                    <EventTile
                        title='Alumni Stories: From bootcamp to the gaming industry'
                        date='Tue, October 29 • 13:00 pm (Canada/EasternTime)'
                        location={"En ligne"}
                        category={"Atelier"}
                        image={
                            "https://afropean.com/wp-content/uploads/2016/06/tech_conference_audience.png"
                        }
                    />               
                </div>
                {/* Show More Buttons */}
                <div className='flex justify-center mt-4'>
                    <button className='font-semibold text-[#05264f]'>
                        Afficher plus d'événements
                    </button>
                </div>
            </div>
    
          
            {/* <Update /> */}
        </header>
    );
};

export default HeroSection;
