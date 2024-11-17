/** @format */

import React from "react";

const Heading: React.FC<{ text: string; variant?: "black" | "white"; noLine?: boolean; uppercase?: boolean; center?: boolean }> = ({
    text,
    variant = "black",
    noLine = false,  // Par défaut, la ligne sera présente
    uppercase = false,  // Par défaut, pas de texte en majuscules
    center = false,  // Par défaut, texte non centré
}) => {
    return (
        <div>
            <h2
                className={`text-2xl md:text-3xl font-bold py-4 ${
                    variant === "white" ? "text-white" : "text-customBlue"
                } ${uppercase ? "uppercase" : ""} ${center ? "text-center" : ""}`}
            >
                {text}
            </h2>
            {!noLine && <div className='mb-3 h-1 w-24 bg-customBlue'></div>} {/* Affiche la ligne si `noLine` est false */}
        </div>
    );
};

export default Heading;

