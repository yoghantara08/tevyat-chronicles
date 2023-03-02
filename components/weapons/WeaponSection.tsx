import { IWeapon } from "@/types";
import SubHeader from "../ui/SubHeader";
import WeaponCard from "./WeaponCard";

interface Props {
  title: string;
  weapons: IWeapon[];
}

const WeaponSection: React.FC<Props> = ({ title, weapons }) => {
  return (
    <section className="mb-5">
      <SubHeader>{title}</SubHeader>
      <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-5 mt-3">
        {weapons.map((weapon) => (
          <WeaponCard
            key={weapon.id}
            weaponId={weapon.id}
            name={weapon.name}
            rarity={weapon.rarity}
          />
        ))}
      </div>
    </section>
  );
};

export default WeaponSection;
