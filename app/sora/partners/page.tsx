import Image from "next/image";
import Banner from "@/components/partener/Banner";

// import FormPartner from "@/components/partener/FormPartner";
import Partners from "@/components/partener/partners";
import PartnerShip from "@/components/partener/PartnerShip";


export default function AboutUs() {
  return (
    <main className="">
  
   <Banner />
    {/* <FormPartner />  */}
    <PartnerShip />
    <Partners />
    </main>
  );
}
