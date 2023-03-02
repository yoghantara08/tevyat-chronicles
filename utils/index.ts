import { ICharacters, IWeapon } from "@/types";

export const getDay = (): string => {
  let day = "";
  const now = new Date();
  const today = now.getDay();

  switch (today) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  return day;
};

export const getBirthday = (birthday: string) => {
  const d = new Date(birthday);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[d.getMonth()];
  let date = d.getDate();

  return `${date} ${month}`;
};

export const sortWeapons = (weapons: IWeapon[]) => {
  const sortedWeapons = weapons.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortedWeapons;
};

export const sortCharacters = (characters: ICharacters[]) => {
  const sortedCharacters = characters.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return sortedCharacters;
};
