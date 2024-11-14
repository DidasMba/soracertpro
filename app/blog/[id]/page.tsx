/** @format */

import React from "react";
import Landing from "@/components/blog/slag/landing";
import Blogdetails from "@/components/blog/slag/details";
import RaletedBlog from "@/components/blog/slag/raleted";

export default function SingleBlogpage({ params }: { params: { id: string } }) {
    return (
        <>
            <Landing />
            <Blogdetails />
            <RaletedBlog />
        </>
    );
}
