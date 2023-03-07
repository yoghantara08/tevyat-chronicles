import ArtifactCard from "@/components/artifacts/ArtifactCard";
import Container from "@/components/layout/Container";
import MainHeader from "@/components/ui/MainHeader";
import { getAllArtifacts } from "@/lib/artifact-api";
import { IArtifact } from "@/types/artifact";
import { GetStaticProps } from "next";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const artifacts = await getAllArtifacts();
  const releasedArtifacts = artifacts.filter(
    (artifact) => artifact.beta !== true
  );

  return {
    props: { artifacts: releasedArtifacts },
  };
};

// PROPS
interface Props {
  artifacts: IArtifact[];
}

const ArtifactsPage: React.FC<Props> = ({ artifacts }) => {
  return (
    <div className="py-5">
      <MainHeader>Artifacts</MainHeader>
      <div className="bg-layout py-3 px-6 rounded-xl">
        <Container>
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ArtifactsPage;
