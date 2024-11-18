/** @format */

import Header from "@/components/program/Header";
import ProgramList from "@/components/program/ProgramList";
import React from "react";

export default function Program() {
    return (
        <main className='w-full min-h-[50svh] flex flex-col gap-8'>
            <Header />
            <ProgramList />
        </main>
    );
}
