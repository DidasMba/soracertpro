"use client";

// import { NextPage } from "next";
import Heading from "../common/Heading";
import HistorySec from "./HistorySec";
import { historyData } from "@/utils/constant";
import { useTranslation } from "react-i18next";

const History = () => {
  const [t] = useTranslation("global");
  return (
    <div className="bg-[#f1fbfe] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <Heading
              // text={`Notre Histoire`}
              text={t("aboutus.history.title")}
              noLine={true}
              uppercase={false}
              center={true}
            />

            <div className="mb-8 max-w-2xl mx-auto text-base md:text-lg py-8 font-medium">
              {t("aboutus.history.description")}
            </div>
          </div>
        </div>

        <ol className="grid grid-cols-1 lg:grid-cols-5">
          {historyData.map((step) => (
            <HistorySec
              key={step.id}
              title={step.title}
              date={step.date}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default History;
