import Image from "next/image";
import LandiingPage from "@/components/membershi/landing";
import Pricing from "@/components/membershi/pricing";

import Formcon from "@/components/membershi/formcon"
export default function Home() {
  return (
    <main className="">
  
     <LandiingPage />
     <Pricing />

     <Formcon />
    </main>
  );
}
