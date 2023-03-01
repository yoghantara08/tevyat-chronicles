import { ICharacter } from "@/types";
import React from "react";
import SubHeader from "../ui/SubHeader";
import Passive from "./Passive";

interface Props {
  character: ICharacter;
  characterId: any;
}

const PassiveTalents: React.FC<Props> = ({ character, characterId }) => {
  return (
    <section className="mt-5 py-5 px-6 bg-layout rounded">
      <SubHeader>Passive Talents</SubHeader>
      <div className="grid gap-5 mt-2 divide-y divide-gray-500">
        {character.passiveTalents.map((talent, index) => (
          <Passive
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

export default PassiveTalents;
