/** @format */

import DetailProgram from "@/components/program/detail/DetailProgram";
import { getCcookie } from "@/lib";
import { Metadata } from "next";
import React from "react";

type TProgram = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params,
}: TProgram): Promise<Metadata> {
    const slug = params.slug;
    return {
        title: `Programme Details - ${slug}`,
    };
}

export default async function ProgramDetail({ params }: TProgram) {
    const { slug } = params;
    const isLogged = getCcookie();
    return (
        <div>
            <DetailProgram isLogged={isLogged} slug={slug} />
        </div>
    );
}
