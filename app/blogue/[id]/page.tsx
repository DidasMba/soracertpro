/** @format */

import React from "react";
import Landing from "@/components/blog/slag/landing";
import Blogdetails from "@/components/blog/slag/details";
import RaletedBlog from "@/components/blog/slag/raleted";

type Params = Promise<{ rcdId: string }>

 async function SingleBlogpage(props:{params: Params}) {
    const param = await props.params
    const id = param.rcdId
    return (
        <>
            <Landing />
            <Blogdetails />
            <RaletedBlog />
        </>
    );
}

export default SingleBlogpage
