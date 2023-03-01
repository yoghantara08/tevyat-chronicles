import { ICharacter } from "@/types";
import SubHeader from "../ui/SubHeader";
import Skill from "./Skill";

interface Props {
  character: ICharacter;
  characterId: any;
}

const SkillTalents: React.FC<Props> = ({ character, characterId }) => {
  return (
    <section className="mt-5 py-5 px-6 bg-layout rounded">
      <SubHeader>Skill Talents</SubHeader>
      <div className="grid gap-5 mt-2 divide-y divide-gray-500">
        {character.skillTalents.map((talent, index) => (
          <Skill
            key={talent.name}
            id={characterId}
            talent={talent}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillTalents;
