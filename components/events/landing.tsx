"use client";

const HeroSection = () => {
  return (
    <header className="container">
      <div className="row justify-content-between bg-gray-200 border rounded-sm-24px">
        <div className="col-12 col-lg-6 d-flex align-items-center">
           <div className="pt-3 py-lg-5 ps-lg-5">
            <span className="w-auto bg-code-red py-2 px-3 rounded-2 text-uppercase text-red fs-12 fw-bold text-predot">
              Live events
            </span>

            <div className="d-flex flex-column mt-4">
              <h1 className="main-title mb-3">Explore Our Live Events, Talks, and Free Workshops</h1>
              <p className="d-none d-md-block main-subtitle fs-18 mb-3 mw-95">
                Jump into a free workshop on UX design or data analytics, attend our students' demo days, or join us for an interactive info session to find out more about Le Wagon.
              </p>
            </div>
          </div> 
        </div>
        <div className="col-12 col-lg-6">
          <div className="pb-3 p-lg-5">
            <img
              width="547"
              height="340"
              alt="Participants engaging in events at Le Wagon"
              srcSet="
                https://www-img.lewagon.com/9YQnNEbxRiHNYSAmxT13BndU9UNh_UoCVvoMSz4bWE0/rs:fill:1094:680/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 2x,
                https://www-img.lewagon.com/QriKXWmZ6Peh0NRfkq_--QLcGc4d2qLYws2YdIlsgUY/rs:fill:547:340/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 547w,
                https://www-img.lewagon.com/IqVNCXn4SxqOMa1W-Vgbwa8ld-7SauJQuTR-4vQ_v0E/rs:fill:336:209/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq 1x"
              className="img-fluid object-fit-cover rounded-2 w-100"
              loading="lazy"
              src="https://www-img.lewagon.com/IqVNCXn4SxqOMa1W-Vgbwa8ld-7SauJQuTR-4vQ_v0E/rs:fill:336:209/plain/s3://wagon-www/ix44dhf0omvhqnfs8eo4ieo4hhkq"
            />
          </div>
        </div>
      </div>
      
      <div className="container pt-3 pt-xl-5 pb-5">
      <h1 className="text-2xl font-bold mb-4">Filters</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Topic</h2>
        <div className="flex flex-wrap mb-2">
          <button className="border rounded-full px-4 py-1 mx-1">All</button>
          <button className="border rounded-full px-4 py-1 mx-1">Online</button>
          <button className="border rounded-full px-4 py-1 mx-1">On-site</button>
          <button className="border rounded-full px-4 py-1 mx-1">Replay</button>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Language</h2>
        <div className="flex flex-wrap mb-2">
          <button className="border rounded-full px-4 py-1 mx-1">All</button>
          <button className="border rounded-full px-4 py-1 mx-1">English</button>
          <button className="border rounded-full px-4 py-1 mx-1">French</button>
          <button className="border rounded-full px-4 py-1 mx-1">Español - LA</button>
          <button className="border rounded-full px-4 py-1 mx-1">Spanish</button>
          <button className="border rounded-full px-4 py-1 mx-1">German</button>
          <button className="border rounded-full px-4 py-1 mx-1">Portuguese</button>
          <button className="border rounded-full px-4 py-1 mx-1">日本語</button>
        </div>
      </div>


      <h1 className="text-2xl font-bold mb-4">Events that match your search</h1>

      {/* Categories */}
      <div className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>

  {/* Card Template */}
  {[
    {
      title: "Alumni Stories: From bootcamp to the gaming industry",
      type: "Talk",
      date: "Tue, October 29 • 13:00 pm (Canada/Eastern Time)",
      location: "Online"
    },
    {
      title: "Data Science Foundations Free Online course",
      type: "Workshop",
      date: "Mon, November 4 • 19:00 pm (Asia/Tokyo Time)",
      location: "Online"
    },
    {
      title: "Growth Marketing bootcamp info session",
      type: "Info session",
      date: "Tue, November 5 • 18:30 pm (Europe/Paris Time)",
      location: "Online"
    },
    {
      title: "Tech Careers in Times of the AI Revolution",
      type: "Talk",
      date: "Wed, November 6 • 18:00 pm (Europe/Berlin Time)",
      location: "Online"
    },
    {
      title: "Online Q&A: Launching a career in data & AI",
      type: "Info session",
      date: "Thu, November 7 • 18:30 pm (Europe/Berlin Time)",
      location: "Online"
    }
  ].map((event, index) => (
    <div key={index} className="border p-4 rounded-lg mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-bold text-xl text-gray-700 mb-2">{event.title}</h3>
      <p className="text-gray-500">{event.type}</p>
      <p className="text-gray-500">{event.date}</p>
      <p className="text-gray-500 mb-4">{event.location}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
        Register Now
      </button>
    </div>
  ))}

  {/* Show More Button */}
  <button className="text-blue-500 font-semibold mt-4">Show more events</button>
</div>


      <button className="text-blue-500">Show more events</button>
    </div>
    </header>
 

   
    
  );
};

export default HeroSection;
