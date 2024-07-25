import Image from "next/image";
import Mainevensts from "@/components/membership/mainevents";
import Pevents from "@/components/membership/pevents";


export default function Home() {
  return (
    <main className="">
  
     <Mainevensts />
     <Pevents  />

 
    </main>
  );
}
