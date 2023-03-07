export interface ICharacterTypes {
  WEAPON_SWORD_ONE_HAND: string;
  WEAPON_CATALYST: string;
  WEAPON_CLAYMORE: string;
  WEAPON_BOW: string;
  WEAPON_POLE: string;
}

export interface ICharacter {
  id: number | string;
  rank: number;
  name: string;
  element: string;
  weaponType: string;
  icon: string;
  birthday: number[];
  route: string;
  release?: number;
  beta?: boolean;
}
