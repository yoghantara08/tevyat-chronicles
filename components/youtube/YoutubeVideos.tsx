import { GENSHIN_VIDEOS } from "@/content";
import React from "react";
import SubHeader from "../ui/SubHeader";

const YoutubeVideos = () => {
  return (
    <div className="bg-layout py-5 px-6 rounded space-y-3 h-fit">
      <SubHeader>Latest Genshin Impact Videos</SubHeader>

      {GENSHIN_VIDEOS.map((video) => (
        <iframe
          loading="lazy"
          key={video.id}
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      ))}
    </div>
  );
};

export default YoutubeVideos;
