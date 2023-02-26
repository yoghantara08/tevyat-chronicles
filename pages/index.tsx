import Welcome from "@/components/card/Welcome";
import ResetTime from "@/components/countdown/ResetTime";
import DailyFarming from "@/components/farming/DailyFarming";
import YoutubeVideos from "@/components/youtube/YoutubeVideos";

const Home = () => {
  return (
    <section className="grid lg:grid-cols-3 w-full gap-5 text-gray-200 mb-5">
      <div className="grid lg:grid-cols-2 lg:col-span-2 gap-5 h-fit">
        <Welcome />
        <ResetTime />
        <DailyFarming />
      </div>
      <YoutubeVideos />
    </section>
  );
};

export default Home;
