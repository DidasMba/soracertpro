import React from 'react';

const speakers = [
  {
    name: 'Steven McHail',
    title: 'Designer at Globex Corporation',
    image: '/path/to/steven-mchail.jpg',
  },
  {
    name: 'Jaquelin Isch',
    title: 'UX Design at InGen',
    image: '/path/to/jaquelin-isch.jpg',
  },
  {
    name: 'Dianne Guilianelli',
    title: 'General Manager at Initech',
    image: '/path/to/dianne-guilianelli.jpg',
  },
  {
    name: 'Ronni Cantadore',
    title: 'Product Manager at Technologix',
    image: '/path/to/ronni-cantadore.jpg',
  },
];

const SpeakerCard: React.FC<{ speaker: typeof speakers[0] }> = ({ speaker }) => (
  <div className="group relative h-[17.5rem] overflow-hidden rounded-4xl shadow-lg">
    <div className="absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-blue-300"></div>
    <div className="absolute inset-0 bg-indigo-50">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
        style={{ clipPath: 'url(#clip-path)' }}
      />
    </div>
    <div className="relative z-10 p-6 bg-white bg-opacity-80 rounded-4xl">
      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">{speaker.name}</h3>
      <p className="mt-1 text-base tracking-tight text-slate-500">{speaker.title}</p>
    </div>
  </div>
);

const SpeakerPanel = () => (
  <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
    {speakers.map((speaker, index) => (
      <div key={index}>
        <SpeakerCard speaker={speaker} />
      </div>
    ))}
  </div>
);



export default SpeakerPanel;
