import React from "react";
import SubHeader from "../ui/SubHeader";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

interface Props {
  id: any;
  name: string;
  rarity: number;
  vision: string;
}

const CharacterPreview: React.FC<Props> = ({ id, name, rarity, vision }) => {
  let stars = [];

  for (let i = 0; i < rarity; i++) {
    stars.push(i);
  }

  return (
    <div className="md:col-span-2 bg-layout rounded relative overflow-hidden">
      <div className="flex flex-wrap gap-x-3 2xl:flex-col px-6 py-6 pb-0 rounded 2xl:absolute">
        <div>
          <h2 className="text-3xl 2xl:text-4xl font-bold uppercase pl-1 mb-1 ">
            {name}
          </h2>
          <div className="mb-3">
            {stars.map((s: number) => (
              <StarIcon key={s} className="text-[#ffcc32] 2xl:text-4xl" />
            ))}
          </div>
        </div>
        <Image
          src={`/elements/${vision.toLowerCase()}.png`}
          alt={id}
          width={64}
          height={64}
          className="w-10 h-fit 2xl:w-16"
        />
      </div>

      <picture className="flex justify-center py-3 2xl:pl-20">
        <img
          src={`/characters/full/${id.replaceAll("-", "_")}.png`}
          alt={name}
          className="object-cover max-w-[550px] max-h-[700px] h-[calc(100vh-4rem)]"
        />
      </picture>
    </div>
  );
};

export default CharacterPreview;
