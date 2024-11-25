"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
import FilterButton from '../program/common/FilterButton';
import {

  blogueWebOptions,

} from "@/utils/constant";

function Recherche() {


  const [category, setCategory] = useState("tous");

  return (
    <Section id="">
      <FilterButton
        options={blogueWebOptions}
        selectedItem={category}
        setSelectedItem={setCategory}
      />
    </Section>

  );
}

export default Recherche;