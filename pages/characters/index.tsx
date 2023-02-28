import { getAllCharacters } from "@/lib/characters-api";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getAllCharacters();

  return {
    props: { characters },
  };
};

const CharactersPage = ({
  characters,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return <div>CharactersPage</div>;
};

export default CharactersPage;
