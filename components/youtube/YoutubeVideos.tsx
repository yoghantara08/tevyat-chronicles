import { GENSHIN_VIDEOS } from "@/content";
import React from "react";

const YoutubeVideos = () => {
  return (
    <div className="bg-layout py-5 px-6 rounded space-y-3 h-fit">
      <h3 className="font-bold text-xl text-gray-100 uppercase">
        Latest Genshin Impact Videos
      </h3>

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
