import CharacterCard from "@/components/characters/CharacterCard";
import MainHeader from "@/components/ui/MainHeader";
import { getAllCharacters } from "@/lib/character-api";
import { ICharacter, ICharacterTypes } from "@/types/character";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const { characters, types } = await getAllCharacters();
  const releasedCharacters = characters.filter((char) => char.beta !== true);

  return {
    props: { characters: releasedCharacters, types },
  };
};

interface Props {
  characters: ICharacter[];
  types: ICharacterTypes;
}

const CharactersPage: React.FC<Props> = ({ characters, types }) => {
  return (
    <section className="rounded py-5">
      <MainHeader>Characters</MainHeader>
      <div></div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default CharactersPage;
