export interface IMaterialTypes {
  forgingOre: string;
  cookingIngredient: string;
  material: string;
  localSpecialtyMondstadt: string;
  localSpecialtyLiyue: string;
  localSpecialtyInazuma: string;
  localSpecialtySumeru: string;
  potion: string;
  characterLevelUpMaterial: string;
  characterAscensionMaterial: string;
  weaponAscensionMaterial: string;
  characterandWeaponEnhancementMaterial: string;
  questItem: string;
  characterTalentMaterial: string;
  adventureItem: string;
  consumable: string;
  gadget: string;
  systemAccess: string;
  increasesFriendship: string;
  specialCurrency: string;
  commonCurrency: string;
  superiorVoucher: string;
  commonVoucher: string;
  limitedWishingItem: string;
  wishingItem: string;
  cityStatesSigil: string;
  characterEXPMaterial: string;
  weaponEnhancementMaterial: string;
  challengeResultItem: string;
}

export interface IMaterials {
  id: number;
  name: string;
  type: string;
  recipe: boolean;
  mapMark: boolean;
  icon: string;
  rank: number;
  route: string;
  beta?: boolean;
}

export interface IMaterial {
  name: string;
  description: string;
  type: string;
  recipe: boolean;
  mapMark: boolean;
  source: ISource[];
  icon: string;
  rank: number;
  route: string;
}

export interface ISource {
  name: string;
  type: string;
  days?: string[];
}

export interface IWeaponAscensionMaterial {
  materials: IMaterials;
  material: IMaterial;
}
