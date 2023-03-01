import { ICharacters } from "@/types";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  character: ICharacters;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  let stars = [];

  for (let i = 0; i < character.rarity; i++) {
    stars.push(i);
  }

  return (
    <Link
      href={`/characters/${character.id}`}
      className="bg-layout rounded-xl px-3 hover:bg-mobileNav transition duration-200"
    >
      <div className="grid grid-cols-2">
        <div className="capitalize py-3">
          <p className="pl-1 mb-1 font-bold text-xl text-white">
            {character.id.replaceAll("-", " ")}
          </p>
          <div className="mb-2">
            {stars.map((s: number) => (
              <StarIcon key={s} className="text-[#ffcc32]" />
            ))}
          </div>
          <Image
            src={`/elements/${character.vision.toLowerCase()}.png`}
            alt={character.id}
            width={36}
            height={36}
          />
        </div>

        <div className=" flex justify-center py-3">
          <Image
            src={`/characters/${character.id.replaceAll("-", "_")}.png`}
            alt={character.id}
            width={106}
            height={106}
          />
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
