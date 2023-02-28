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

export interface ICharacters {
  id: string;
  name: string;
}

export interface ICharacter {
  name: string;
  title: string;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  rarity: string;
  constellation: string;
  birthday: string;
  description: string;

  skillTalents: {
    name: string;
    unlock: string;
    description: string;
    upgrades: { name: string; value: string }[];
    type: string;
  }[];

  passiveTalents: {
    name: string;
    unlock: string;
    description: string;
    level?: number;
  }[];

  constellations: {
    name: string;
    unlock: string;
    description: string;
    level: number;
  }[];

  vision_key: string;
  weapon_type: string;
  outfits?: {
    type: string;
    name: string;
    description: string;
    rarity: number;
    price: number;
    image: string;
  }[];
}
