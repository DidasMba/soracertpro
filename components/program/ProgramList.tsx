/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Section from "../common/Section";
import {
  CategoryProgramOptions,
  dateEventFilter,
  LocationOptions,
} from "@/utils/constant";
import ProgramTile from "./ProgramTile";
import Radios from "./common/Radios";
import FilterButton from "./common/FilterButton";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProgram } from "@/lib/api/program";
import { IoWarningOutline } from "react-icons/io5";
import { getLanguage } from "@/lib/api/baseUrl";

const ProgramList = () => {
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("tous");

  const [category, setCategory] = useState("all");

  const [lang, setLang] = useState(getLanguage());

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedLang = getLanguage();
      setLang(updatedLang);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["programs", selectedDate, category, selectedLocation],
    queryFn: () => fetchAllProgram(selectedDate, category, selectedLocation),
  });

  return (
    <Section id="program-list">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-7 my-8">
        <div className="col-span-1 ">
          <div className="flex flex-col gap-3 py-8">
            <h4 className="text-lg md:text-base font-semibold">Filtrer</h4>
            <Radios
              name="date-filter"
              options={dateEventFilter}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <hr className="bg-gray-500" />
            <div>
              <h4 className="text-base font-semibold">Trouvees</h4>
              <Radios
                name="location-filter"
                options={LocationOptions}
                selectedDate={selectedLocation}
                setSelectedDate={setSelectedLocation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-6">
          <h2 className="text-sm lg:text-base font-bold text-customBlue">
            programmes et trouvez celui qui vous passionne.
          </h2>
          <FilterButton
            options={CategoryProgramOptions}
            selectedItem={category}
            setSelectedItem={setCategory}
          />
          {isLoading ? (
            <div className="flex justify-center min-h-[40svh] items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div>
              {data?.data.length !== 0 ? (
                <div className="flex flex-col gap-2">
                  {data?.data.map((item) => (
                    <ProgramTile
                      key={item.id}
                      title={item.title}
                      image={item.thumbnail}
                      location={item.location}
                      date={item.date_from}
                      slug={item.slug}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex  items-center w-full justify-center py-8">
                  <div className="flex flex-col items-center">
                    <IoWarningOutline size={40} />
                    <p className="text-base font-semibold text-center">
                      Pas Programme trouver
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ProgramList;
