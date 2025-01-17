/** @format */

"use client";
import React, { useEffect, useState } from "react";
import Eventregister from "./EventInfo";
import { useQuery } from "@tanstack/react-query";
import { getEventBySlug } from "@/lib/api/event";
import Separator from "@/components/homepage/components/Separator";
import Section from "@/components/common/Section";
import Image from "next/image";
import { getLanguage } from "@/lib/api/baseUrl";
import { get } from "http";

const DetailEvent: React.FC<{ slug: string; isLogged: boolean }> = ({
  slug,
  isLogged,
}) => {
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
    queryKey: ["event", slug, lang],
    queryFn: () => getEventBySlug(slug, lang),
  });

  return (
    <Section id="event-detail">
      <Separator
        description={``}
        title={``}
        imgUrl={data?.data.thumbnail!}
        imgUrlMob={data?.data.thumbnail!}
        id="how-it-work-separator"
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-[30svh]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <Eventregister
            isLogged={isLogged}
            id={data?.data.id!}
            title={data?.data.EventTranslation[0].theme!}
            location={data?.data.location!}
            dateEvent={data?.data?.start_date!}
            description={data?.data.EventTranslation[0].description!}
            price={data?.data.price!}
          />
          <div className="py-8 flex flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-customBlue">
              Sponsors de cette evenement
            </h1>
            <div className="flex flex-row flex-wrap gap-4">
              {data?.data.EventSponsor.map((sponsor) => (
                <Image
                  className="w-auto h-12"
                  key={sponsor.id}
                  src={sponsor.pattern.avatar}
                  alt={sponsor.pattern.company}
                  width={400}
                  height={40}
                />
              ))}
            </div>
          </div>
          <div className="py-8 flex flex-col gap-6">
            <h1 className="text-xl md:text-2xl font-bold text-customBlue">
              Nos Intervenants:
            </h1>
            <div className="flex flex-row flex-wrap gap-4">
              {data?.data.moderators.map((moderator) => (
                <div
                  key={moderator.id}
                  className="w-full border rounded-xl shadow-lg p-4 flex flex-col max-w-80 gap-1 justify-center items-center"
                >
                  <div className="w-40 h-40">
                    <Image
                      className="w-full h-full rounded-full object-cover"
                      src={moderator.avatar}
                      alt={moderator.firstname}
                      width={400}
                      height={40}
                    />
                  </div>
                  <p className="font-semibold">
                    {moderator.firstname} {moderator.lastname}
                  </p>
                  <p className="text-center text-gray-500 text-sm">
                    {moderator.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default DetailEvent;
