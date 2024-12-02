/** @format */

import React from "react";

const FormGroup: React.FC<{
    children: React.ReactNode;
    col?: "col-1" | "col-2";
}> = ({ children, col = "col-1" }) => {
    return (
        <div
            className={`grid ${
                col === "col-1"
                    ? "grid-cols-1 md:grid-cols-1"
                    : "grid-cols-1 md:grid-cols-2"
            } gap-3`}
        >
            {" "}
            {children}
        </div>
    );
};

export default FormGroup;
