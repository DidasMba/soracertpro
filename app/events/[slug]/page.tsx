/** @format */

import { Params } from "next/dist/server/request/params";
import DetailEvent from "@/components/events/details/Detail";

type TEvent = {
    params: Params;
};

export default function EventDetail({ params }: TEvent) {
    const { slug } = params;
    return (
        <main className=''>
            <DetailEvent slug={slug?.toString()!} />
        </main>
    );
}
