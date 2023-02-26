import useDailyResetTime from "@/hooks/useDailyResetTime";
import useWeeklyResetTime from "@/hooks/useWeeklyResetTime";
import React from "react";
import Time from "./Time";

interface Props {
  type: "daily" | "weekly";
}

const ResetTime: React.FC<Props> = ({ type }) => {
  // ASIA GMT+8
  const asia = useDailyResetTime(20);
  const asiaWeek = useWeeklyResetTime(20);
  // EU GMT+1
  const eu = useDailyResetTime(3);
  const euWeek = useWeeklyResetTime(3);
  // NA GMT-5
  const na = useDailyResetTime(9);
  const naWeek = useWeeklyResetTime(9);

  if (type === "daily") {
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
  }

  return (
    <div className="bg-layout py-5 px-6 rounded space-y-3">
      <h3 className="font-semibold text-xl text-gray-100 uppercase">
        Weekly Reset Time
      </h3>
      <Time {...asiaWeek} region="ASIA" />
      <Time {...euWeek} region="EU" />
      <Time {...naWeek} region="NA" />
    </div>
  );
};

export default ResetTime;
