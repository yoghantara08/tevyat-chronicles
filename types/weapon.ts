export interface IWeaponTypes {
  WEAPON_SWORD_ONE_HAND: string;
  WEAPON_CLAYMORE: string;
  WEAPON_POLE: string;
  WEAPON_CATALYST: string;
  WEAPON_BOW: string;
}

export interface IWeapon {
  id: number;
  rank: number;
  type: string;
  name: string;
  icon: string;
  route: string;
  beta?: boolean;
}
