import React from "react";
import AgentHeroBg from "../../../assets/AgentHeroBg.png";

export const HeroSection = () => {
  return (
    <>
      <div className="2xl:h-[20dvh] xl:h-[20dvh] lg:h-[15dvh] md:portrait:h-[20dvh] 4k:h-[15dvh] 3k:h-[15dvh] h-[20dvh] w-full relative flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={AgentHeroBg}
            alt="ContactHeroImgBg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1920px] mx-auto relative z-20 flex justify-center items-center w-full">
          <div className="w-[90%] mx-auto  flex justify-center items-center">
            <div className="w-[80%]">
              <h1 className="font-mainFont 2xl:text-5xl xl:text-5xl lg:text-5xl md:portrait:text-5xl 4k:text-5xl 3k:text-5xl text-2xl text-secondaryColor font-[600]">
                Become an Agent
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
