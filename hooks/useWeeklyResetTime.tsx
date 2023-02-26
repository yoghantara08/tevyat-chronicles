import { useState, useEffect } from "react";

export interface WeeklyReset {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useWeeklyResetTime = (UTC: number): WeeklyReset => {
  const [weeklyReset, setWeeklyReset] = useState<WeeklyReset>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculateTime() {
      const now = new Date();
      const target = new Date();

      function setToMonday(date: Date) {
        var day = date.getDay() || 7;
        if (day !== 1) date.setHours(-24 * (day - 1));
        return date;
      }

      setToMonday(target);

      // Set the target time

      target.setUTCHours(UTC);
      target.setUTCMinutes(0);
      target.setUTCSeconds(0);
      target.setUTCMilliseconds(0);

      // Check if the current time already past the target time then add 1 day to reset the timer
      if (now.getTime() > target.getTime()) {
        target.setUTCDate(target.getUTCDate() + 7);
      }

      // Calculate the time difference in milliseconds
      const diff = target.getTime() - now.getTime();

      // Calculate the days, hours, minutes, and seconds remaining
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setWeeklyReset({
        days,
        hours,
        minutes,
        seconds,
      });
    }

    calculateTime();

    const intervalId = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [UTC]);

  return weeklyReset;
};

export default useWeeklyResetTime;
