import React from "react";
import AboutPageHeroBg from "../../../assets/AboutPageHeroBg.png";
import { Dot } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <div className="2xl:h-[25dvh] xl:h-[25dvh] lg:h-[15dvh] md:portrait:h-[20dvh] 4k:h-[20dvh] 3k:h-[20dvh] h-[20dvh] w-full relative flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={AboutPageHeroBg}
            alt="AboutHeroImgBg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1920px] mx-auto relative z-20 flex justify-center items-center w-full">
          <div className="w-[90%] mx-auto  flex justify-center items-center">
            <div className="w-[80%]">
              <h1 className="font-mainFont 2xl:text-5xl xl:text-5xl lg:text-5xl md:portrait:text-5xl 4k:text-5xl 3k:text-5xl text-2xl text-secondaryColor font-[600]">
                About Us
              </h1>
              <p className="text-base font-secondaryFont flex justify-start items-start gap-2 mt-2 font-[500]">
                <span className="text-[#F08613]">Home</span>
                <Dot />
                About JOptiman Consultancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
