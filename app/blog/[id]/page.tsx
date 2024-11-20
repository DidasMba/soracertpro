/** @format */

import React from "react";
import Landing from "@/components/blog/slag/landing";
import Blogdetails from "@/components/blog/slag/details";
import RaletedBlog from "@/components/blog/slag/raleted";
import { Params } from "next/dist/server/request/params";

type PageProps = {
    params: Params
}

export default function SingleBlogpage({params}: PageProps) {
    const { id } = params
    return (
        <>
            <Landing />
            <Blogdetails />
            <RaletedBlog />
        </>
    );
}
