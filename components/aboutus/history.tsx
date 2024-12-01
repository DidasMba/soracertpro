// import { NextPage } from "next";
import Heading from "../common/Heading";
import HistorySec from "./HistorySec";
import { historyData } from "@/utils/constant";
const History = () => {
  return (
    <div className="p-8 bg-[#f1fbfe] dark:bg-gray-900">
       <div>
      <Heading 
        text = {`Notre Histoire`}
      />
       <div className="mt-4 max-w-2xl mx-auto text-base md:text-lg py-2 font-medium">
          
          Chez Soracert, notre leadership repose sur une équipe dévouée de professionnels expérimentés et passionnés. 
      </div> 

    </div>
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
  );
};

export default History;















