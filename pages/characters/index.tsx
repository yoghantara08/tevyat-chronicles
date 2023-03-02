import CharacterCard from "@/components/characters/CharacterCard";
import MainHeader from "@/components/ui/MainHeader";
import { getAllCharacters } from "@/lib/characters-api";
import { ICharacters } from "@/types";
import { sortCharacters } from "@/utils";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getAllCharacters();

  return {
    props: { characters },
  };
};

interface Props {
  characters: ICharacters[];
}

const CharactersPage: React.FC<Props> = ({ characters }) => {
  const sortedCharacters = sortCharacters(characters);

  return (
    <section className="rounded py-5">
      <MainHeader>Characters</MainHeader>
      <div></div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {sortedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default CharactersPage;
