/** @format */

import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { Montserrat } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import QueryProvider from "@/lib/QueryProvider";
export const metadata: Metadata = {
    title: "Soracert",
    description: "",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <QueryProvider>
                <body
                    suppressHydrationWarning={true}
                    className={montserrat.className}
                >
                    <NextTopLoader
                        color='#00224d'
                        initialPosition={0.08}
                        height={3}
                        crawl={true}
                        showSpinner={false}
                        easing='ease'
                        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                    />
                    <Navbar />
                    <div className='mt-20'>{children}</div>
                    <Footer />
                </body>
            </QueryProvider>
        </html>
    );
}
