export interface INav {
  title: string;
  link: string;
}

export interface ITalentBooks {
  id: string;
  availability: string[];
  characters: string[];
  items: { id: string; name: string; rarity: number }[];
  source: string;
}

export interface IWeaponAscension {
  id: string;
  availability: string[];
  weapons: string[];
  items: { id: string; name: string; rarity: number }[];
  source: string;
}
