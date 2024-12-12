/** @format */

"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
import FilterButton from "../program/common/FilterButton";
import BlogueTile from "@/components/blogue/BlogueTile";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogue } from "@/lib/api/blogue";
import { formatDateTimeToFrench } from "@/helper/funct";
import { blogueWebOptions } from "@/utils/constant";

function BlogList() {
    const [category, setCategory] = useState("all");
    const { data, isLoading } = useQuery({
        queryKey: ["blog", category],
        queryFn: () => fetchBlogue(category)
    })
    return (
        <Section id=''>
            <FilterButton
                options={blogueWebOptions}
                selectedItem={category}
                setSelectedItem={setCategory}
            />
            {isLoading ? (
                <div className='flex justify-center min-h-[40svh] items-center'>
                    <span className='loading loading-spinner loading-lg'></span>
                </div>
            ) : (
                <div className='flex flex-col gap-2'>
                    {data?.data?.map((item) => (
                        <BlogueTile
                            key={item.id}
                            title={item.title}
                            titredescription={item.content}
                            image={item.thumbnail}
                            date={formatDateTimeToFrench(item?.createAt!)!}
                            id={item.slug}
                        />
                    ))}
                </div>
            )}
        </Section>
    );
}

export default BlogList;
