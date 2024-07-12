import Image from "next/image";
import LandingPage from "@/components/partener/landing";
import Contact from "@/components/partener/contact";
import Partners from "@/components/partener/partners";

export default function AboutUs() {
  return (
    <main className="">
  
   <LandingPage />
    <Contact />
    <Partners />
    </main>
  );
}
