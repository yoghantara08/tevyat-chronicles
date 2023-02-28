import CharacterCard from "@/components/characters/CharacterCard";
import { getAllCharacters } from "@/lib/characters-api";
import { ICharacters } from "@/types";
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
  return (
    <section className="rounded py-5">
      <h2 className="font-bold text-4xl drop-shadow mb-2">Characters</h2>
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
