import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllTalentBook, getAllWeaponAscension } from "@/lib/materials-api";
import Welcome from "@/components/ui/Welcome";
import ResetTime from "@/components/countdown/ResetTime";
import DailyFarming from "@/components/farming/DailyFarming";
import YoutubeVideos from "@/components/youtube/YoutubeVideos";

export const getStaticProps: GetStaticProps = async () => {
  const talentBooks = await getAllTalentBook();
  const weaponAscension = await getAllWeaponAscension();

  return {
    props: { talentBooks, weaponAscension },
  };
};

const Home = ({
  talentBooks,
  weaponAscension,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <section className="grid lg:grid-cols-3 w-full gap-5 text-gray-200 mb-5">
      <div className="grid lg:grid-cols-2 lg:col-span-2 gap-5 h-fit">
        <Welcome />
        <ResetTime />
        <DailyFarming
          talentBooks={talentBooks}
          weaponAscension={weaponAscension}
        />
      </div>
      <YoutubeVideos />
    </section>
  );
};

export default Home;
