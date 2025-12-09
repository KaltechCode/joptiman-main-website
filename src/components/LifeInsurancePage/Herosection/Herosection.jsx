import React from "react";
import "./Herosection.css";
import HeroGraphics1 from "../../../assets/Herograhics.png";
import HeroGraphics2 from "../../../assets/RightShapes.png";

export const Herosection = () => {
  return (
    <>
      <div className="2xl:h-[min(35dvh,230px)] xl:h-[min(35dvh,230px] lg:h-[min(25dvh,230px)] md:portrait:h-[min(30dvh,200px)] 4k:h-[min(30dvh,200px)] 3k:h-[min(30dvh,200px)] h-[min(30dvh,200px)] w-full relative flex justify-center items-center lifeInsurance__heroMainWrapper">
        <div className="absolute right-0 bottom-0 opacity-100 z-10">
          <img src={HeroGraphics2} alt="HeroGraphics2" className="h-44" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-70 bg-secondaryColor" />
        <div className="max-w-[1920px] mx-auto relative z-20 flex justify-center items-center w-full">
          <div className="w-[90%] mx-auto  flex justify-center items-center">
            <div className="w-[80%]">
              <h1 className="font-mainFont 2xl:text-6xl xl:text-5xl lg:text-4xl md:portrait:text-5xl 4k:text-5xl 3k:text-4xl text-2xl   text-mainColor font-[600]">
                Life Insurance
              </h1>
              <div className="mt-[1%]">
                <div>
                  <img
                    className="h-[min(15dvh,100px)]"
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
