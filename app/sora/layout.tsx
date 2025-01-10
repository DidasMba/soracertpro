/** @format */

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function SoraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}
