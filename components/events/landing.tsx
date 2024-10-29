"use client";

const HeroSection = () => {
  return (
    <header className="container mt-3">
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
    </header>
  );
};

export default HeroSection;
