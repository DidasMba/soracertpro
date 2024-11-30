// import { NextPage } from "next";
import HistorySec from "./HistorySec";
import { historyData } from "@/utils/constant";
const History = () => {
  return (
    <div className="p-8 bg-[#f1fbfe] dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ol className="items-center sm:flex">
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















