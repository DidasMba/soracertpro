/** @format */

import { Metadata } from "next";
import DetailEvent from "@/components/events/details/Detail";
import { getCcookie } from "@/lib";

type TEvent = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: TEvent): Promise<Metadata> {
    const slug = params.slug; // Access slug directly from params
    return {
        title: `Event Details - ${slug}`,
    };
}

export default async function EventDetail({ params }: TEvent) {
    const slug = params.slug; // `params` is awaited in server-side rendering.
    const isLogged = getCcookie();
    return (
        <main className=''>
            <DetailEvent isLogged={isLogged} slug={slug} />
        </main>
    );
}
