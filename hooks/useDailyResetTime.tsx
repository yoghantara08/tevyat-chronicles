import { useState, useEffect } from "react";

export interface DailyReset {
  hours: number;
  minutes: number;
  seconds: number;
}

const useDailyResetTime = (UTC: number): DailyReset => {
  const [dailyReset, setDailyReset] = useState<DailyReset>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const target = new Date();

      // Set the target time with given parameter
      // e.g 20 means 20 PM UTC equivalent to GMT+8 at 4AM
      target.setUTCHours(UTC);
      target.setUTCMinutes(0);
      target.setUTCSeconds(0);
      target.setUTCMilliseconds(0);

      // Check if the current time already past the target time then add 1 day to reset the timer
      if (now.getTime() > target.getTime()) {
        target.setUTCDate(target.getUTCDate() + 1);
      }

      // Divide the time difference by the number of milliseconds
      // Transform it to second first
      const diff = target.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setDailyReset({
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();

    const intervalId = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [UTC]);

  return dailyReset;
};

export default useDailyResetTime;
