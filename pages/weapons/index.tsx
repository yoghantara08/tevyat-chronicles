import MainHeader from "@/components/ui/MainHeader";
import WeaponCard from "@/components/weapons/WeaponCard";
import { getAllWeapons } from "@/lib/weapon-api";
import { IWeapon, IWeaponTypes } from "@/types/weapon";
import { GetStaticProps } from "next";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const { weapons, types } = await getAllWeapons();
  const releasedWeapons = weapons.filter((weap) => weap.beta !== true);

  return {
    props: { weapons: releasedWeapons, types },
  };
};

// PROPS
interface Props {
  weapons: IWeapon[];
  types: IWeaponTypes;
}

// COMPONENT
const WeaponsPage: React.FC<Props> = ({ weapons, types }) => {
  return (
    <section className="py-5">
      <MainHeader>Weapons</MainHeader>
      <div className="bg-layout py-3 px-6 rounded-xl">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-5 mt-3">
          {weapons.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponsPage;
