interface Props {
  region: "ASIA" | "EU" | "NA";
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Time: React.FC<Props> = ({ region, days, hours, minutes, seconds }) => {
  return (
    <p className="font-medium">
      <span className="font-robotoMono">[{region}] </span>
      {days && days > 0 ? <span>{days}d </span> : ""}
      <span>{hours}h </span>
      <span>{minutes}m </span>
      <span>{seconds}s</span>
    </p>
  );
};

export default Time;
