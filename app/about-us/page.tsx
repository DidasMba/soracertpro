import Image from "next/image";
import LandiingPage from "@/components/aboutus/landing";
import Aboutus from "@/components/aboutus/aboutus";
import MeetOurTeam from "@/components/aboutus/ourteam";
import TrustedCompany from "@/components/aboutus/trusted";

export default function AboutUs() {
  return (
    <main className="">  
     <LandiingPage />
    <Aboutus />
    <MeetOurTeam />
    <TrustedCompany />
    </main>
  );
}
