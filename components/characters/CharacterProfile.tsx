import { ICharacter } from "@/types";
import SubHeader from "../ui/SubHeader";
import ProfileText from "./ProfileText";

interface Props {
  character: ICharacter;
}

const CharacterProfile: React.FC<Props> = ({ character }) => {
  return (
    <div className="bg-layout rounded py-5 px-6 h-fit">
      <SubHeader>Profile</SubHeader>
      <div className="mt-2 divide-y divide-gray-600">
        <ProfileText label="title" text={character.title} />
        <ProfileText label="vision" text={character.vision} />
        <ProfileText label="weapon" text={character.weapon} />
        <ProfileText label="nation" text={character.nation} />
        <ProfileText label="affiliation" text={character.affiliation} />
        <ProfileText label="birthday" text={character.birthday} />
        <ProfileText label="constellation" text={character.constellation} />
        {/* <ProfileText label="description" text={character.description} /> */}
      </div>
    </div>
  );
};

export default CharacterProfile;
