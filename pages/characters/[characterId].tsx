import { ICharacter } from "@/types/character";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

// STATIC PROPS
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

// STATIC PATHS
// export const getStaticPaths: GetStaticPaths = async () => {
//   const characters = await getAllCharacters();

//   const paths = characters.map((character) => ({
//     params: { characterId: character.id },
//   }));

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// PROPS
interface Props {
  character: ICharacter;
}

// COMPONENT
const CharacterPage: React.FC<Props> = ({ character }) => {
  let characterId: any;
  const { query } = useRouter();

  if (query.characterId) {
    characterId = query.characterId;
  }

  return (
    <>
      {/* <section>
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
      <SkillTalents character={character} characterId={characterId} />
      <PassiveTalents character={character} characterId={characterId} />
      <Constellations character={character} characterId={characterId} /> */}
    </>
  );
};

export default CharacterPage;
