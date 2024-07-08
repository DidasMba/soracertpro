import type {Metadata} from 'next'
import "./globals.css";
<<<<<<< Updated upstream
import Footer from '../components/required/Footer';
import Navbar from '../components/required/navbar';
=======
import Footer from '@/components/required/Footer';
import Navbar from '@/components/required/navbar';

>>>>>>> Stashed changes


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


