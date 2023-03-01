import { ICharacter } from "@/types";
import SubHeader from "../ui/SubHeader";

interface Props {
  character: ICharacter;
}

const CharacterProfile: React.FC<Props> = ({ character }) => {
  return (
    <div className="">
      <SubHeader>Profile</SubHeader>
    </div>
  );
};

export default CharacterProfile;
