import { ITalentBooks, IWeaponAscension } from "@/types";
import { API } from ".";

export const getAllTalentBook = async () => {
  const response = await API.get("/materials/talent-book");
  const data = response.data;
  const items: ITalentBooks[] = [];

  for (const key in data) {
    items.push({
      id: key,
      ...data[key],
    });
  }

  return items;
};

export const getAllWeaponAscension = async () => {
  const response = await API.get("/materials/weapon-ascension");
  const data = response.data;
  const items: IWeaponAscension[] = [];

  for (const key in data) {
    items.push({
      id: key,
      ...data[key],
    });
  }

  return items;
};
