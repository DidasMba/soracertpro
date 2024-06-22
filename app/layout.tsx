import type {Metadata} from 'next'
import "./globals.css";
import Footer from './components/Footer';
import Navbar from './components/navbar';


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
      <Navbar />  
       {children}
         <Footer />
       </body>

       </html>
  );
}


