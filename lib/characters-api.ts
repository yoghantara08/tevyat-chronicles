import { ICharacter, ICharacters } from "@/types";
import { API } from ".";

export const getAllCharacters = async () => {
  const response = await API.get("/characters");
  const data = response.data;
  const characters: ICharacters[] = [];

  // wait for all the promises to finish
  await Promise.all(
    data.map(async (item: string) => {
      const character = await getCharacter(item);
      characters.push({
        id: item,
        name: character.name,
        rarity: character.rarity,
        vision: character.vision,
      });
    })
  );

  return characters;
};

export const getCharacter = async (name: string | string[] | undefined) => {
  const response = await API.get(`/characters/${name}`);
  const character: ICharacter = response.data;

  return character;
};
