import React from "react";
import AgentHeroBg from "../../../assets/AgentHeroBg.png";

export const HeroSection = () => {
  return (
    <>
      <div className="2xl:h-[min(20dvh,250px)] xl:h-[min(20dvh,250px)] lg:h-[min(15dvh,250px)] md:portrait:h-[min(20dvh,250px)] 4k:h-[min(15dvh,250px)] 3k:h-[min(15dvh,250px)] h-[min(20dvh,250px)] w-full relative flex justify-center items-center">
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
