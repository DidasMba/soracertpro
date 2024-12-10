/** @format */

import CareerDetail from "@/components/career/detail/CareerDetail";
import { getCcookie } from "@/lib";
import { Metadata } from "next";

/** @format */
type TJobPage = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params,
}: TJobPage): Promise<Metadata> {
    const slug = params.slug; // Access slug directly from params
    return {
        title: `Job Details - ${slug}`,
    };
}
export default function Career({ params }: TJobPage) {
    const isLogged = getCcookie();
    const slug = params.slug;
    return (
        <main>
            <CareerDetail slug={slug} isLogged={isLogged} />
        </main>
    );
}
