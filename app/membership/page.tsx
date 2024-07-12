import Image from "next/image";
import LandiingPage from "@/components/membership/landing";
import Pricing from "@/components/membership/pricing";

import Formcon from "@/components/membership/formcon"
export default function Membership() {
  return (
    <main className="">
  
     <LandiingPage />
     <Pricing />

     <Formcon />
    </main>
  );
}
