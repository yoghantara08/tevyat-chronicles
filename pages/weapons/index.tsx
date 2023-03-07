import Container from "@/components/layout/Container";
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
    <div className="py-5">
      <MainHeader>Weapons</MainHeader>
      <div className="bg-layout py-3 px-6 rounded-xl">
        <Container>
          {weapons.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default WeaponsPage;
