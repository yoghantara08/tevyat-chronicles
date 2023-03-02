import { IWeapon } from "@/types";
import { API } from ".";

export const getAllWeapons = async () => {
  const response = await API.get("/weapons");
  const data = response.data;
  const weapons: IWeapon[] = [];

  await Promise.all(
    data.map(async (weaponId: string) => {
      const weapon = await getWeapon(weaponId);
      weapons.push({
        ...weapon,
        id: weaponId,
      });
    })
  );

  return weapons;
};

export const getWeapon = async (weaponId: string | string[] | undefined) => {
  const response = await API.get(`/weapons/${weaponId}`);
  const weapon: IWeapon = response.data;

  return weapon;
};
