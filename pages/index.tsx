import ResetTime from "@/components/countdown/ResetTime";
import Welcome from "@/components/ui/Welcome";
import YoutubeVideos from "@/components/youtube/YoutubeVideos";
import { getDailyFarming } from "@/lib/daily-farming-api";
import { GetStaticProps } from "next";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const weaponAscension = await getDailyFarming();

  return {
    props: { weaponAscension },
  };
};

// PROPS
interface Props {
  weaponAscension: any;
}

const Home: React.FC<Props> = ({ weaponAscension }) => {
  // Filter Weapon Ascension Types

  console.log(weaponAscension.monday);

  return (
    <div className="grid lg:grid-cols-3 w-full gap-5 text-gray-200 mb-5">
      <div className="grid lg:grid-cols-2 lg:col-span-2 gap-5 h-fit">
        <Welcome />
        <ResetTime />
        {/* <DailyFarming
          talentBooks={talentBooks}
          weaponAscension={weaponAscension}
        /> */}
      </div>
      <YoutubeVideos />
    </div>
  );
};

export default Home;
