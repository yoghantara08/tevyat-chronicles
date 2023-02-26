import useDailyResetTime from "@/hooks/useDailyResetTime";
import React from "react";
import Time from "./Time";

const ResetTime = () => {
  // ASIA GMT+8
  const asia = useDailyResetTime(20);

  // EU GMT+1
  const eu = useDailyResetTime(3);

  // NA GMT-5
  const na = useDailyResetTime(9);

  return (
    <div className="bg-layout py-5 px-6 rounded space-y-3">
      <h3 className="font-bold text-xl text-gray-100 uppercase">
        Daily Reset Time
      </h3>
      <Time {...asia} region="ASIA" />
      <Time {...eu} region="EU" />
      <Time {...na} region="NA" />
    </div>
  );
};

export default ResetTime;
