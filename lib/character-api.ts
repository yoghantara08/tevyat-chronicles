import { ICharacter, ICharacterTypes } from "@/types/character";
import { API } from ".";

export const getAllCharacters = async () => {
  const resp = await API.get("/avatar");
  const data = resp.data.data;

  const characters: ICharacter[] = [];
  const types: ICharacterTypes = data.types;

  // Transform objects into array of object
  Object.keys(data.items).map((key) => {
    characters.push({ ...data.items[key] });
  });

  return { characters, types };
};
