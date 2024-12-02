/** @format */

import { Metadata } from "next";
import DetailEvent from "@/components/events/details/Detail";

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

    return (
        <main className=''>
            <DetailEvent slug={slug} />
        </main>
    );
}
