import Image from "next/image";
import LandiingPage from "@/components/homepage/components/landingpage";
import FrameComponent6 from "@/components/homepage/components/aboutus";
import Mission from "@/components/homepage/components/mission";
import Client from "@/components/homepage/components/client";
import UpcomingEvents from "@/components/homepage/components/events";

export default function Home() {
  return (
    <main className="">
     <LandiingPage />
     <FrameComponent6 />
     <Mission />
     <Client />
     <UpcomingEvents />
  
    </main>
  );
}
