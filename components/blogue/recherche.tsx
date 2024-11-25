"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
import FilterButton from '../program/common/FilterButton';
import {
  locationOptions,
  programmData,
  blogueWebOptions,
  TimmingOptions,
} from "@/utils/constant";


function Recherche() {
  const [selectedDate, setSelectedDate] = useState("tous");
  const [selectedLocation, setSelectedLocation] = useState("tous");

  const [category, setCategory] = useState("tous");

  return (
                        <FilterButton
                          options={blogueWebOptions}
                          selectedItem={category}
                          setSelectedItem={setCategory}
                        />
  );
}

export default Recherche;
