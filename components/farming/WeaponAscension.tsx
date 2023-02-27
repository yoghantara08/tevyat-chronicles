import { IWeaponAscension } from "@/types";
import Image from "next/image";

const WeaponAscension: React.FC<{
  ascension: IWeaponAscension;
}> = ({ ascension }) => {
  return (
    <div className="py-3 px-4 text-lg flex space-x-3">
      <Image
        src={`/items/${ascension.items[3].id
          .replaceAll("'", "")
          .replaceAll("-", "_")}.png`}
        alt={ascension.id}
        width={32}
        height={32}
        className="w-fit h-fit pr-2"
        title={ascension.id}
      />

      <div className="font-semibold mt-2">
        <h4 className="align-baseline capitalize">
          <span className="text-gray-100 font-bold">{ascension.id} </span>
          <span className="text-gray-300">
            ({ascension.source.replace("-", " ")})
          </span>
        </h4>
        <div className="pb-2 pt-4 flex gap-6 flex-wrap w-full">
          {ascension.weapons.map((weapon: any) => (
            <Image
              key={weapon}
              src={`/weapons/${weapon
                .replaceAll("-", "_")
                .replaceAll("'", "")}.png`}
              alt={weapon.replaceAll("-", "_").replaceAll("'", "")}
              width={46}
              height={46}
              className="w-fit h-fit"
              title={weapon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeaponAscension;
