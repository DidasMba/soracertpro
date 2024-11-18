/** @format */

import { Params } from "next/dist/server/request/params";
import React from "react";

type TProgram = {
    params: Params;
};

export default function Program({ params }: TProgram) {
    const { id } = params;
    return (
        <div>
            <h1>Program {id}</h1>
        </div>
    );
}
