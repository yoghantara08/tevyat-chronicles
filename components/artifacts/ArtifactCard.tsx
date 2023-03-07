import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import { IArtifact } from "@/types/artifact";

interface Props {
  artifact: IArtifact;
}

const ArtifactCard: React.FC<Props> = ({ artifact }) => {
  const slug = artifact.name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("'", "");

  const rank = artifact.levelList[artifact.levelList.length - 1];

  const stars = [];
  for (let i = 0; i < rank; i++) {
    stars.push(i);
  }

  return (
    <Link href={`/artifacts/${artifact.id}/${slug}`} className="relative">
      <div
        className={`bg-rarity${rank.toString()} rounded-t-xl flex justify-center`}
      >
        <picture>
          <img
            src={`https://api.ambr.top/assets/UI/reliquary/${artifact.icon}.png`}
            alt={artifact.name}
            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
          />
        </picture>
      </div>
      <div className="flex justify-center items-center h-9 bg-gray-100 rounded-b-xl">
        <p className=" text-center text-sm text-gray-800 font-medium leading-none">
          {artifact.name}
        </p>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        {stars.map((s: number) => (
          <StarIcon
            key={s}
            className="text-yellow-400 text-xl md:text-2xl drop-shadow-2xl"
          />
        ))}
      </div>
    </Link>
  );
};

export default ArtifactCard;
