import React from "react";
import "./Herosection.css";
import HeroGraphics1 from "../../../assets/Herograhics.png";
import HeroGraphics2 from "../../../assets/RightShapes.png";

export const Herosection = () => {
  return (
    <>
      <div className="2xl:h-[35dvh] xl:h-[35dvh] lg:h-[25dvh] md:portrait:h-[30dvh] 4k:h-[30dvh] 3k:h-[30dvh] h-[30dvh] w-full relative flex justify-center items-center lifeInsurance__heroMainWrapper">
      <div className="absolute right-0 bottom-0 opacity-100 z-10">
          <img src={HeroGraphics2} alt="HeroGraphics2" className="h-44" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-70 bg-secondaryColor" />
        <div className="max-w-[1920px] mx-auto relative z-20 flex justify-center items-center w-full">
          <div className="w-[90%] mx-auto  flex justify-center items-center">
            <div className="w-[80%]">
              <h1 className="font-mainFont 2xl:text-6xl xl:text-5xl lg:text-5xl md:portrait:text-5xl 4k:text-6xl 3k:text-6xl text-2xl text-mainColor font-[600]">
                Life Insurance
              </h1>
              <div className="mt-[1%]">
                <div>
                  <img
                    className="h-[15dvh] w-auto"
                    src={HeroGraphics1}
                    alt="HeroGraphics"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
