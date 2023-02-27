import Image from "next/image";

const NavIcon: React.FC<{ icon: string }> = ({ icon }) => {
  let selectedIcon;

  switch (icon) {
    case "Home":
      selectedIcon = (
        <Image
          src="/logo/home.png"
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
          src="/logo/characters.png"
          alt="characters"
          width={30}
          height={30}
        />
      );
      break;
    case "Weapons":
      selectedIcon = (
        <Image src="/logo/weapons.png" alt="weapons" width={32} height={32} />
      );
      break;
    case "Artifacts":
      selectedIcon = (
        <Image
          src="/logo/artifacts.png"
          alt="artifacts"
          width={32}
          height={32}
        />
      );
      break;
    case "Materials":
      selectedIcon = (
        <Image
          src="/logo/materials.png"
          alt="materials"
          width={32}
          height={32}
        />
      );
      break;
    case "Consumables":
      selectedIcon = (
        <Image
          src="/logo/consumables.png"
          alt="consumables"
          width={32}
          height={32}
        />
      );
      break;
    case "Elements":
      selectedIcon = (
        <Image
          src="/logo/elements.png"
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
          src="/logo/enemies.png"
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
