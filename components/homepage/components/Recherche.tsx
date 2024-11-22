import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

function Recherche() {
  return (
    <div className="relative w-full items-center max-w-lg transform px-4 transition-all">
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="relative">
          {/* Input pour la recherche */}
          <input
            className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            placeholder="Rechercher tous les sujets..."
            aria-label="Search components"
            role="combobox"
            type="text"
          />
          {/* Icône de recherche */}
             
            <IoSearchSharp className="absolute right-4 top-4 w-6 h-6"/>
                
        </div>
      </div>
    </div>
  );
}

export default Recherche;
