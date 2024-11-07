import React from 'react';

const Description = () => {
  return (
    <div className="container mx-auto px-4 lg:px-9 pt-10 py-8">
      {/* Header Section */}
      <div className="text-center flex flex-col items-center mb-8 md:mb-12">
        <span className="text-purple-400 font-bold uppercase text-sm mb-3">Formation & Accompagnement</span>
        <h2 className="text-black text-3xl lg:text-4xl font-semibold mb-4">
        Nous accompagnons les jeunes dans leur parcours de formation et de developpement
        </h2>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center text-black mb-8">
        <div className="order-2 md:order-1 w-full md:w-5/12 mb-8 md:mb-0">
          <img
           src="/latest property 1.png"
            alt="Student learning"
            className="object-cover rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '465px', height: 'auto' }}
          />
        </div>
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold pb-4">Formation & Accompagnements</h3>
          <p className="text-lg">
          Nous accompagnons les jeunes dans leur parcours de formation et de developpement
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row justify-between items-center text-black mb-8">
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <img
            src="/latest property 1.png"
            alt="Expert guidance"
            className="object-cover rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '465px', height: 'auto' }}
          />
        </div>
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold pb-4">Certification & Bourses</h3>
          <p className="text-lg">
          Nous offrons des Certification reconnues et des Bourses des formations internationales.
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row justify-between items-center text-black mb-8">
        <div className="order-2 md:order-1 w-full md:w-5/12 mb-8 md:mb-0">
          <img
           src="/latest property 1.png"
            alt="Career support"
            className="object-cover rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '465px', height: 'auto' }}
          />
        </div>
        <div className="w-full md:w-5/12 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold pb-4">Communaute</h3>
          <p className="text-lg">
          Nous sommes une Communaute des passionnes da la technologie et de innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
