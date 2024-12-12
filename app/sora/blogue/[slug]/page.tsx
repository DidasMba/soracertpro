/** @format */

import Blogone from "@/components/blogue/common/Blogone";
import { Metadata } from "next";

type TBlogDetailPage = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params,
}: TBlogDetailPage): Promise<Metadata> {
    const slug = params.slug; // Access slug directly from params
    return {
        title: `Blogs Details - ${slug}`,
    };
}

export default function BlogDetailPage({params}:TBlogDetailPage ) {
    const slug = params.slug
    return (
        <main>
            <Blogone 
              slug={slug}
            />
        </main>
    );
}
