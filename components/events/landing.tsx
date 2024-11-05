/** @format */

"use client";

import Image from "next/image";
import EventTile from "./EventTile";

// import image from 'next/image',

const HeroSection = () => {
    return (
        <header className='max-w-7xl mx-auto w-full container'>
            {/* <div className='row justify-content-between rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-sm py-4 bg-[#f1fbfe] border rounded-sm-24px'>
                <div className='flex items-center px-6 py-4 '>
                    <div className='pt-3 py-lg-5 ps-lg-5'>
                        <span className='w-auto bg-code-red py-2 px-3 rounded-2 text-uppercase text-red fs-12 fw-bold text-predot'>
                            Live events
                        </span>

                        <div className='d-flex flex-column mt-4'>
                            <h1 className='font- mb-3 '>
                                Explore Our Live Events, Talks, and Free
                                Workshops
                            </h1>
                            <p className='d-none d-md-block main-subtitle fs-18 mb-3 mw-95'>
                                Jump into a free workshop on UX design or data
                                analytics, attend our students' demo days, or
                                join us for an interactive info session to find
                                out more about Le Wagon.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='w-[548px] h-[340px] rounded-2xl'>
                        <img
                            width='547'
                            height='340'
                            
                            alt='Participants engaging in events at Le Wagon'
                            srcSet='
                https://www-img.lewagon.com/9YQnNEbxRiHNYSAmxT13BndU9UNh_UoCVvoMSz4bWE0/rs:fill:1094:680/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 2x,
                https://www-img.lewagon.com/QriKXWmZ6Peh0NRfkq_--QLcGc4d2qLYws2YdIlsgUY/rs:fill:547:340/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 547w,
                https://www-img.lewagon.com/IqVNCXn4SxqOMa1W-Vgbwa8ld-7SauJQuTR-4vQ_v0E/rs:fill:336:209/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 1x'
                            className='img-fluid object-cover rounded-2 w-full h-full rounded-lg'
                            loading='lazy'
                            src='https://www-img.lewagon.com/IqVNCXn4SxqOMa1W-Vgbwa8ld-7SauJQuTR-4vQ_v0E/rs:fill:336:209/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq'
                        />
                    </div>
                </div>
            </div> */}
            <div className='row justify-between rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-md py-6 bg-[#f1fbfe]'>
    <div className='flex items-center px-8 py-6'>
        <div className='pt-4 ps-lg-5'>
            <span className='w-auto bg-red-500 text-white py-2 px-4 rounded-md text-uppercase text-red text-xs font-semibold'>
                Live events
            </span>

            <div className='flex flex-col mt-6'>
                <h1 className='text-4xl lg:text-5xl font-extrabold mb-4 text-[#05264f]'>
                    Explorez nos événements en direct, conférences et ateliers gratuits.
                </h1>
                <p className='hidden md:block text-lg leading-relaxed mb-4 text-gray-700 max-w-[95%]'>
                Participez à un atelier gratuit sur le design UX ou l'analyse des données, assistez aux journées de démonstration de nos étudiants, ou rejoignez-nous pour une session d'information interactive afin d'en savoir plus sur SoraCert.
                </p>
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
                    Events that match your search
                </h1>
                <div>
                    
                </div>
                <div className='mb-6 col-12 col-lg-10 ps-xl-5'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-8 mt-8'>
                        Categories
                    </h2>
                     
                   <div className="flex mt-4 mb-8 font-semibold space-x-4">
                            <span>Atelier</span>
                            <span>Hackaton</span>
                            <span>Conférence</span>
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
        </header>
    );
};

export default HeroSection;
