/** @format */

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { getCcookie } from "@/lib";
import React from "react";

export default function SoraLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isLogged = getCcookie();
    return (
        <div>
            <Navbar isLogged={isLogged} />
            <div className='mt-20'>{children}</div>
            <Footer />
        </div>
    );
}
