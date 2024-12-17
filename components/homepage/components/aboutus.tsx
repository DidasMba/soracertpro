/** @format */
"use client";
import Section from "@/components/common/Section";
import HowWeWorkTile from "./HowWeWorkTile";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t] = useTranslation("global");
  return (
    <Section id="about">
      <HowWeWorkTile
        content={t("home.about.description")}
        imageURL="/blog-3.png"
        isReverted={true}
        title={t("home.about.title")}
      />
    </Section>
  );
};

export default AboutUs;
