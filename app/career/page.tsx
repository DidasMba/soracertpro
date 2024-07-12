import Image from "next/image";
import LandiingPage from "@/components/career/landing";
import Sample from "@/components/career/sample";
import Featured from "@/components/career/featured";

export default function Home() {
  return (
    <main className="">
  
     <LandiingPage />
    <Sample />
    <Featured />
    </main>
  );
}
