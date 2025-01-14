/** @format */
"use client";
import React from "react";
import Section from "../../common/Section";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { fetchPartners } from "@/lib/api/partners";

const OurPartner = () => {
  const [t] = useTranslation("global");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const { data, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: fetchPartners,
  });

  const fallbackLogo = [
    "/Google.png",
    "/Pinterest.png",
    "/Twitch.png",
    "/YouTube.png",
  ];

  return (
    <Section id="partner">
      <div className="relative">
        <div className="absolute left-0 w-full flex items-center max-w-[300px] backdrop-blur-md bg-white bg-opacity-40 top-0 z-20 bottom-0 px-2">
          <h1 className="text-xl font-bold text-[#05264f] mb-1 py-4">
            {t("home.partner.title")}
          </h1>
        </div>
        <div className="">
          <div className="slider-container">
            <Slider {...settings}>
              {isLoading
                ? fallbackLogo.map((item, index) => (
                    <div className="h-10 w-40" key={index}>
                      <Image
                        className="h-full object-contain"
                        src={item}
                        alt={`partner-logo-${index}`}
                        width={150}
                        height={40}
                      />
                    </div>
                  ))
                : data?.data.map((item) => (
                    <div className="h-10 w-40" key={item.id}>
                      <Image
                        className="h-full object-contain"
                        src={item.avatar}
                        alt={item.company}
                        width={150}
                        height={40}
                      />
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurPartner;
