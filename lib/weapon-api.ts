import { IWeapon, IWeaponTypes } from "@/types/weapon";
import { API } from ".";

export const getAllWeapons = async () => {
  const resp = await API.get("/weapon");
  const data = resp.data.data;

  const weapons: IWeapon[] = [];
  const types: IWeaponTypes = data.types;

  Object.keys(data.items).map((key) => {
    weapons.push({ ...data.items[key] });
  });

  return { weapons, types };
};
