import Image from "next/image";
import { IConstellations } from "@/types";

interface Props {
  id: any;
  cons: IConstellations;
}

const Constellation: React.FC<Props> = ({ cons, id }) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={`/skills/${id.replaceAll("-", "_")}/constellation_${
          cons.level
        }.png`}
        alt={id}
        width={64}
        height={64}
      />
      <div>
        <p className="font-semibold text-xl">{cons.name}</p>
        <p className="text-secondary">{cons.description}</p>
      </div>
    </div>
  );
};

export default Constellation;
