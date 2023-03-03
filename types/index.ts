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
  rarity: number;
  vision: string;
}

export interface ICharacter {
  name: string;
  title: string;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  rarity: number;
  constellation: string;
  birthday: string;
  description: string;

  skillTalents: ISkillTalents[];

  passiveTalents: IPassiveTalents[];

  constellations: IConstellations[];

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

export interface ISkillTalents {
  name: string;
  unlock: string;
  description: string;
  upgrades: { name: string; value: string }[];
  type: string;
}

export interface IPassiveTalents {
  name: string;
  unlock: string;
  description: string;
  level?: number;
}

export interface IConstellations {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface IWeapon {
  id: string;
  name: string;
  type: string;
  rarity: number;
  baseAttack: number;
  subStat: string;
  passiveName: string;
  passiveDesc: string;
  location: string;
  ascensionMaterial: string;
}
