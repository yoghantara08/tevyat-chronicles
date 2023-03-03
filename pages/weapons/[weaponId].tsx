import SubHeader from "@/components/ui/SubHeader";
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
  const weaponId: any = query.weaponId!;

  return (
    <section className="py-5 px-6 bg-layout rounded">
      <div className="flex gap-5">
        <picture
          className={`rounded-xl bg-rarity${weapon.rarity.toString()} flex justify-center min-w-[200px] min-h-[200px]`}
        >
          <img
            src={`/weapons/${weaponId
              .replaceAll("-", "_")
              .replaceAll("'", "")
              .replaceAll(" ", "")}.png`}
            alt={weaponId}
            className="w-full  h-full"
          />
        </picture>
        <div>
          <SubHeader>{weapon.name}</SubHeader>
          <div className="text-secondary">
            <p>Type: {weapon.type}</p>
            <p>Rarity: {weapon.rarity}-Star</p>
            <p>Base Attack: {weapon.baseAttack}</p>
            <p>Sub Stat: {weapon.subStat}</p>
            <p>Location: {weapon.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponPage;
