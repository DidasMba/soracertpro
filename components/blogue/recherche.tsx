"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
import FilterButton from '../program/common/FilterButton';
import {
  blogueData,
  blogueWebOptions,

} from "@/utils/constant";
import BlogueTile from "@/components/blogue/BlogueTile";

function Recherche() {


  const [category, setCategory] = useState("tous");

  return (
    <Section id="">
      <FilterButton
        options={blogueWebOptions}
        selectedItem={category}
        setSelectedItem={setCategory}
      />

                      <div className='flex flex-col gap-2'>
                          {blogueData.map((item) => (
                            <BlogueTile
                                  key={item.id}
                                  title={item.title}
                                  titredescription={item.titredescription}
                                  image={item.thumbnail}
                                  location={item.location}
                                  date={item.date}
                                  id={item.id}
                              />
                          ))}
                      </div>
    </Section>
    

  );
}

export default Recherche;
