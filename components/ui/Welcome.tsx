import React from "react";
import SubHeader from "./SubHeader";

const Welcome = () => {
  return (
    <div className="bg-layout py-5 px-6 rounded space-y-3">
      <SubHeader>Welcome to Teyvat Chronicles </SubHeader>
      <p className="text-secondary">
        Teyvat Chronicles is a fanpage website that provides information about
        Genshin Impact, an open-world action RPG game developed and published by
        HoYoverse.
      </p>
    </div>
  );
};

export default Welcome;
