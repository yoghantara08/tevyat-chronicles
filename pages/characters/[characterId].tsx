import CharacterPreview from "@/components/characters/CharacterPreview";
import CharacterProfile from "@/components/characters/CharacterProfile";
import SubHeader from "@/components/ui/SubHeader";
import { getAllCharacters, getCharacter } from "@/lib/characters-api";
import { ICharacter } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// STATIC PROPS
export const getStaticProps: GetStaticProps = async (context) => {
  let characterId;
  if (context.params) {
    characterId = context.params.characterId;
  }

  const character: ICharacter = await getCharacter(characterId);

  return {
    props: { character },
  };
};

// STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await getAllCharacters();

  const paths = characters.map((character) => ({
    params: { characterId: character.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

// PROPS
interface Props {
  character: ICharacter;
}

// COMPONENT
const CharacterPage: React.FC<Props> = ({ character }) => {
  let characterId;
  const { query } = useRouter();

  if (query.characterId) {
    characterId = query.characterId;
  }

  return (
    <section>
      <div className="grid xl:grid-cols-3 gap-5">
        <CharacterPreview
          id={characterId}
          name={character.name}
          rarity={character.rarity}
          vision={character.vision}
        />
        <CharacterProfile character={character} />
      </div>
    </section>
  );
};

export default CharacterPage;
