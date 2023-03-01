import { ICharacter } from "@/types";
import SubHeader from "../ui/SubHeader";
import Constellation from "./Constellation";

interface Props {
  character: ICharacter;
  characterId: any;
}

const Constellations: React.FC<Props> = ({ character, characterId }) => {
  return (
    <section className="mt-5 py-5 px-6 bg-layout rounded">
      <SubHeader>Constellations</SubHeader>
      <div className="grid gap-5 mt-2 divide-y divide-gray-500">
        {character.constellations.map((cons) => (
          <Constellation key={cons.name} id={characterId} cons={cons} />
        ))}
      </div>
    </section>
  );
};

export default Constellations;
