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
  return <div>WeaponsPage</div>;
};

export default WeaponsPage;
