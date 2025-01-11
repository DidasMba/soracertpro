"use client";

import type { NextPage } from "next";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragrah";
import { useTranslation } from "react-i18next";

const FrameComponent6: NextPage = () => {
  const [t] = useTranslation("global");
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center py-12 px-4"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div
          className="w-full md:w-1/2 space-y-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            alt="Event Stadium"
            className="object-cover rounded-lg shadow-lg mx-auto animated"
            src="/aboutus.png"
            style={{
              height: "auto",
              maxWidth: "600px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          className="w-full md:w-1/2 flex"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="py-3 p-3 max-w-2xl">
            <Heading text={t("aboutall.abouttitle.title")} />

            <Paragraph text={t("aboutall.abouttitle.description")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
