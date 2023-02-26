import { getDay } from "@/utils";
import { useState } from "react";
import FarmingTable from "./FarmingList";
import SelectDay from "./SelectDay";

const DailyFarming = () => {
  const day = getDay();
  const [selected, setSelected] = useState<string>(day);

  return (
    <div className="lg:col-span-2 bg-layout py-5 px-6 rounded space-y-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h3 className="font-bold text-xl text-gray-100 uppercase mb-2 sm:mb-0">
          Daily Farming
        </h3>
        <SelectDay selected={selected} setSelected={setSelected} />
      </div>
      <FarmingTable selectedDay={selected} />
    </div>
  );
};

export default DailyFarming;
