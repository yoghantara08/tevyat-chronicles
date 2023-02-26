import { getAllTalentBook, getAllWeaponAscension } from "@/lib/materials-api";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  selectedDay: string;
}

const FarmingTable: React.FC<Props> = ({ selectedDay }) => {
  const [talentBooks, setTalentBooks] = useState<any>();
  const [weaponAscensions, setWeaponAscensions] = useState<any>();

  useEffect(() => {
    getAllTalentBook().then((res) => {
      setTalentBooks(res.data);
    });

    getAllWeaponAscension().then((res) => {
      setWeaponAscensions(res.data);
    });
  }, []);

  return (
    <section className="w-full rounded-t overflow-hidden divide-y divide-gray-700 bg-layout">
      {talentBooks &&
        Object.keys(talentBooks)
          .filter((key) => {
            const item = talentBooks[key];
            if (!selectedDay) {
              return true;
            }
            return item.availability.includes(selectedDay);
          })
          .map((key) => {
            const item = talentBooks[key];
            return (
              <div key={key} className="py-2 px-4 text-lg flex space-x-3">
                <picture className="w-fit">
                  <Image
                    src={`https://api.genshin.dev/materials/talent-book/philosophies-of-${key}`}
                    alt={key}
                    width={44}
                    height={44}
                  />
                </picture>
                <div className="font-semibold mt-2">
                  <h4 className="align-baseline capitalize">
                    <span className="text-gray-100 font-bold">{key} </span>
                    <span className="text-gray-300">
                      ({item.source.replace("-", " ")})
                    </span>
                  </h4>
                  <div className="pb-2 pt-4 flex gap-6 flex-wrap">
                    {item.characters.map((character: any) => (
                      <Image
                        key={character}
                        src={`https://api.genshin.dev/characters/${character}/icon`}
                        alt={character}
                        width={50}
                        height={50}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

      {/* Weapon Ascension */}
      {/* {weaponAscensions &&
        Object.keys(weaponAscensions)
          .filter((key) => {
            const item = weaponAscensions[key];
            if (!selectedDay) {
              return true;
            }
            return item.availability.includes(selectedDay);
          })
          .map((key) => {
            const item = weaponAscensions[key];
            return (
              <div key={key} className="py-2 px-4 text-lg flex space-x-3">
                <picture>
                  <Image
                    src={`https://api.genshin.dev/materials/weapon-ascension/${item.items[3].id.replace(
                      "'",
                      "-"
                    )}`}
                    alt={key}
                    width={44}
                    height={44}
                  />
                </picture>
                <div className="font-semibold mt-2">
                  <h4 className="align-baseline capitalize">
                    <span className="text-gray-100 font-bold">{key} </span>
                    <span className="text-gray-300">
                      ({item.source.replace("-", " ")})
                    </span>
                  </h4>
                  <div className="pb-2 pt-4 flex gap-6 flex-wrap">
                    {item.weapons.map((weapon: any) => (
                      <Image
                        key={weapon}
                        src={`https://api.genshin.dev/weapons/${weapon}/icon`}
                        alt={weapon}
                        width={50}
                        height={50}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })} */}
    </section>
  );
};

export default FarmingTable;
