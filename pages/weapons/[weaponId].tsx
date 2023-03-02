import { getAllWeapons, getWeapon } from "@/lib/weapons-api";
import { IWeapon } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (context) => {
  let weaponId;
  if (context.params) {
    weaponId = context.params.weaponId;
  }

  const weapon = await getWeapon(weaponId);

  return {
    props: { weapon },
  };
};

// GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const weapons = await getAllWeapons();

  const paths = weapons.map((weapon) => ({
    params: { weaponId: weapon.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

// PROPS
interface Props {
  weapon: IWeapon;
}

const WeaponPage: React.FC<Props> = ({ weapon }) => {
  const { query } = useRouter();
  const weaponId = query.weaponId;

  return <div>WeaponPage</div>;
};

export default WeaponPage;
