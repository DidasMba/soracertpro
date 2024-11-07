import React from 'react';

const Description: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center py-12 px-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mb-3 md:mb-0">
        <img
          width="465"
          height="463"
          alt="Student learning tech skills"
          className="img-fluid object-cover rounded-2xl shadow-lg mx-auto"
          // src="https://www-img.lewagon.com/J8lXJjaffP02agh-Ogi58iNZZhyOdXmRv1Q4ZtXWuIU/rs:fill:336:335/plain/s3://wagon-www/wwy0ql02s1w2m05flmdn06l6seoj"
          src="/latest property 1.png"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-3 md:mb-0">
        <h3 className="text-3xl font-bold text-black mb-5">Get solid foundations by working on real-world projects</h3>
        <p className="text-lg text-black">
          Join courses developed with industry experts and practice on hands-on projects to get actionable skills. 
          Develop a standout portfolio to be ready for your job search.
        </p>
      </div>
    </section>
  );
};

export default Description;
