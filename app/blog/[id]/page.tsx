/** @format */

import React from "react";
import Landing from "@/components/blog/slag/landing";
import Blogdetails from "@/components/blog/slag/details";
import RaletedBlog from "@/components/blog/slag/raleted";
import { Params } from "next/dist/server/request/params";

export default function SingleBlogpage({ params }: { params: Params }) {
    return (
        <>
            <Landing />
            <Blogdetails />
            <RaletedBlog />
        </>
    );
}
