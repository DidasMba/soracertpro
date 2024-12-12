/** @format */

import MemberMain from "@/components/membership/MemberMain";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "MemberShip - Soracert",
    };
}
export default function MemberShip() {
    return (
        <main>
            <MemberMain />
        </main>
    );
}
