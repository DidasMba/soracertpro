import type {Metadata} from 'next'
import "./globals.css";

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';

import  NextTopLoader  from "nextjs-toploader"
export const metadata: Metadata = {
  title: 'Soracert',
  description: 'Learn Next.js Tailwind By Components',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html lang="en">
       <body className="">
       <NextTopLoader color="#00224d"
 initialPosition={0.08}

 height={3}
 crawl={true}
 showSpinner={false}
 easing="ease"

 shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
         <Navbar />  
         {children}
          <Footer />


       </body>

       </html>
  );
}