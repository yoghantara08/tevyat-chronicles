import MainHeader from "@/components/ui/MainHeader";
import SubHeader from "@/components/ui/SubHeader";
import WeaponCard from "@/components/weapons/WeaponCard";
import WeaponSection from "@/components/weapons/WeaponSection";
import { getAllWeapons } from "@/lib/weapons-api";
import { IWeapon } from "@/types";
import { GetStaticProps } from "next";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const weapons = await getAllWeapons();

  return {
    props: { weapons },
  };
};

// PROPS
interface Props {
  weapons: IWeapon[];
}

// COMPONENT
const WeaponsPage: React.FC<Props> = ({ weapons }) => {
  const weaponRarity1 = weapons.filter((weapon) => weapon.rarity === 1);
  const weaponRarity2 = weapons.filter((weapon) => weapon.rarity === 2);
  const weaponRarity3 = weapons.filter((weapon) => weapon.rarity === 3);
  const weaponRarity4 = weapons.filter((weapon) => weapon.rarity === 4);
  const weaponRarity5 = weapons.filter(
    (weapon) => weapon.rarity === 5 && weapon.id !== "eberlasting-moonglow"
  );

  return (
    <section className="py-5">
      <MainHeader>Weapons</MainHeader>

      <div className="bg-layout py-5 px-6 rounded">
        <WeaponSection title="5-Star Weapons" weapons={weaponRarity5} />
        <WeaponSection title="4-Star Weapons" weapons={weaponRarity4} />
        <WeaponSection title="3-Star Weapons" weapons={weaponRarity3} />
        <WeaponSection title="2-Star Weapons" weapons={weaponRarity2} />
        <WeaponSection title="1-Star Weapons" weapons={weaponRarity1} />
      </div>
    </section>
  );
};

export default WeaponsPage;
