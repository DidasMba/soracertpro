import Image from "next/image";
import React from 'react';

export default function Fleets() {
  const imagesSection1 = [
    { src: "/bien.jpg", title: "Premier titre pour la première image", text: "Premier texte pour la première image" },
    { src: "/bien2.jpg", title: "Deuxième titre pour la deuxième image", text: "Deuxième texte pour la deuxième image" },
    { src: "/bien3.jpg", title: "Troisième titre pour la troisième image", text: "Troisième texte pour la troisième image" },
  ]; // Images, titres et textes pour la première section

  const imagesSection2 = [
    { src: "/bien4.JPG", title: "Premier titre pour la première image", text: "Premier texte pour la première image" },
    { src: "/latest property 1.png", title: "Deuxième titre pour la deuxième image", text: "Deuxième texte pour la deuxième image" },
    { src: "/bien5.JPG", title: "Troisième titre pour la troisième image", text: "Troisième texte pour la troisième image" },
  ]; // Images, titres et textes pour la deuxième section

  const imagesSection3 = [
    { src: "/blog-1.png", title: "Premier titre pour la première image", text: "Premier texte pour la première image" },
    { src: "/blog-2.png", title: "Deuxième titre pour la deuxième image", text: "Deuxième texte pour la deuxième image" },
    { src: "/blog-3.png", title: "Troisième titre pour la troisième image", text: "Troisième texte pour la troisième image" },
  ]; // Images, titres et textes pour la troisième section

  return (
    <div className='py-2'>
      <div className='container'>
        {/* Première section */}
        <div className="ok relative bg-customBlue h-10 px-6 py-2 text-white rounded-full">
          <a href="#">Workshop</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {imagesSection1.map((item, index) => (
            <div key={index} className=''>  {/*rounded-2xl shadow-lg Code pour le rounded et shadowe */}
              <div className='relative image-rounded overflow-hidden'>
                <div className="w-full h-64 relative">
                  <Image
                    className="imagepro object-cover"
                    src={item.src}
                    alt={`Pro ${index + 1}`}
                    layout="fill"
                  />
                </div>
                <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                  29 June 2024
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="texteone font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deuxième section */}
      <div className='container'>
        <div className="ok relative bg-customBlue h-10 px-6 py-2 text-white rounded-full">
          <a href="#">Workshop</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {imagesSection2.map((item, index) => (
            <div key={index} className=''>   {/*rounded-2xl shadow-lg Code pour le rounded et shadowe */}
              <div className='relative image-rounded overflow-hidden'>
                <div className="w-full h-64 relative">
                  <Image
                    className="imagepro object-cover"
                    src={item.src}
                    alt={`Pro ${index + 1}`}
                    layout="fill"
                  />
                </div>
                <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                  29 June 2024
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="texteone font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troisième section */}
      <div className='container'>
        <h1 className="px-10 py-6 font-bold text-3xl">Cours en ligne</h1>
        <div className="ok relative bg-customBlue md:h-10 h-auto px-4 py-4 md:py-2 text-white rounded-full workshop-list">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:h-full">
            <a href="#" className="px-2 md:px-4">Workshop</a>
            <a href="#" className="px-2 md:px-4">Workshop</a>
            <a href="#" className="px-2 md:px-4">Workshop</a>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {imagesSection3.map((item, index) => (
            <div key={index} className='rounded-2xl shadow-lg'>
              <div className='relative image-rounded overflow-hidden'>
                <div className="w-full h-64 relative">
                  <Image
                    className="imagepro object-cover"
                    src={item.src}
                    alt={`Pro ${index + 1}`}
                    layout="fill"
                  />
                </div>
                <div className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm">
                  29 June 2024
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-4 pr-3">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="texteone font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
