import { ITalentBooks, IWeaponAscension } from "@/types";
import { getDay } from "@/utils";
import { useState } from "react";
import SelectDay from "./SelectDay";
import TalentBooks from "./TalentBooks";
import WeaponAscension from "./WeaponAscension";

interface Props {
  talentBooks: ITalentBooks[];
  weaponAscension: IWeaponAscension[];
}

const DailyFarming = ({ talentBooks, weaponAscension }: Props) => {
  const day = getDay();
  const [selectedDay, setSelected] = useState<string>(day);

  // Filter Talent Books based on selected day
  let filteredTalentBooks: ITalentBooks[] = talentBooks.filter(
    (talent: ITalentBooks) => {
      return talent.availability.includes(selectedDay);
    }
  );

  // Filter Weapon Ascension based on selected day
  let filteredWeaponAscension: IWeaponAscension[] = weaponAscension.filter(
    (weapon: IWeaponAscension) => {
      return weapon.availability.includes(selectedDay);
    }
  );

  return (
    <div className="lg:col-span-2 bg-layout py-5 px-6 rounded space-y-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h3 className="font-bold text-xl text-gray-100 uppercase mb-2 sm:mb-0">
          Daily Farming
        </h3>
        <SelectDay selected={selectedDay} setSelected={setSelected} />
      </div>
      <section className="w-full rounded-t overflow-hidden divide-y divide-gray-700 bg-layout">
        <TalentBooks filteredTalentBooks={filteredTalentBooks} />
        <WeaponAscension filteredWeaponAscension={filteredWeaponAscension} />
      </section>
    </div>
  );
};

export default DailyFarming;
