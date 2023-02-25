import Image from "next/image";

const NavIcon: React.FC<{ icon: string }> = ({ icon }) => {
  let selectedIcon;

  switch (icon) {
    case "Home":
      selectedIcon = (
        <Image
          src="/images/home.png"
          alt="home"
          width={28}
          height={28}
          className="mr-[2px]"
        />
      );
      break;
    case "Characters":
      selectedIcon = (
        <Image
          src="/images/characters.png"
          alt="characters"
          width={30}
          height={30}
        />
      );
      break;
    case "Weapons":
      selectedIcon = (
        <Image src="/images/weapons.png" alt="weapons" width={32} height={32} />
      );
      break;
    case "Artifacts":
      selectedIcon = (
        <Image
          src="/images/artifacts.png"
          alt="artifacts"
          width={32}
          height={32}
        />
      );
      break;
    case "Materials":
      selectedIcon = (
        <Image
          src="/images/materials.png"
          alt="materials"
          width={32}
          height={32}
        />
      );
      break;
    case "Consumables":
      selectedIcon = (
        <Image
          src="/images/consumables.png"
          alt="consumables"
          width={32}
          height={32}
        />
      );
      break;
    case "Elements":
      selectedIcon = (
        <Image
          src="/images/elements.png"
          alt="elements"
          width={32}
          height={32}
          className="text-white"
        />
      );
      break;
    case "Enemies":
      selectedIcon = (
        <Image
          src="/images/enemies.png"
          alt="enemies"
          width={28}
          height={28}
          className="ml-[2px]"
        />
      );
      break;
  }

  return <>{selectedIcon}</>;
};

export default NavIcon;
