import { API } from ".";

export const getAllTalentBook = async () => {
  return await API.get("/materials/talent-book");
};

export const getAllWeaponAscension = async () => {
  return await API.get("/materials/weapon-ascension");
};
