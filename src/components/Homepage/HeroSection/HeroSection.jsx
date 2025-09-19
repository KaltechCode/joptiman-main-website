import React, { useEffect, useState } from "react";
import HeroSliderImg1 from "../../../assets/HeroSliderImg1.png";
import HeroSliderImg2 from "../../../assets/HeroSliderImg2.png";
import HeroSliderImg3 from "../../../assets/HeroSliderImg3.png";
import HeroShape1 from "../../../assets/HeroShape1.png";
import HeroShape2 from "../../../assets/HeroShape2.png";
import HeroShape3 from "../../../assets/HeroShape3.png";
import "./HeroSection.css";
import { Link, useNavigate } from "react-router-dom";

const sliderImgs = [HeroSliderImg1, HeroSliderImg2, HeroSliderImg3];

export const HeroSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const router = useNavigate();
  const handelNext = (dataArray, setCurrentIndex) => {
    console.log("handelNext");
    setCurrentIndex((curr) => (curr === dataArray.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handelNext(sliderImgs, setCurrentImgIndex);
    }, 16000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="2xl:h-[70dvh] xl:h-[70dvh] lg:h-[100dvh] md:portrait:h-[50dvh] 5k:h-[60dvh] h-[70dvh] bg-paraColor/10  mx-auto w-full relative">
        <img
          src={HeroShape1}
          alt="HeroShape1"
          className="absolute top-0 h-full left-0 w-auto animate-pulse transition-opacity  duration-700 ease-in-out"
        />
        <img
          src={HeroShape2}
          alt="HeroShape1"
          className="absolute top-[5%] h-auto left-[55%] w-14 motion-safe:animate-bounce transition-all duration-700 ease-in-out"
        />
        <img
          src={HeroShape3}
          alt="HeroShape1"
          className="absolute bottom-1 h-auto left-[50%] w-44 animate-pulse transition-all duration-700 ease-in-out"
        />
        <div className="absolute top-0 right-0 2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:portrait:w-[75%] h-full flex justify-start overflow-hidden">
          {sliderImgs.map((cur, id) => (
            <>
              <img
                key={id}
                src={cur}
                alt="slider-img-1"
                style={{
                  transform: `translateX(-${currentImgIndex * 100}%) `,
                }}
                className={`w-full h-full object-cover  transition-all duration-[1000ms] ease-linear flex-shrink-0  ${
                  currentImgIndex === id ? "opacity-100" : "opacity-0"
                }`}
              />
            </>
          ))}
        </div>

        <div className="relative w-full h-full  z-20 flex justify-center items-center max-w-[1920px]  mx-auto">
          <div className="2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:portrait:w-[90%] w-[90%] mx-auto">
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:portrait:w-[60%] flex justify-center items-center ">
              <div className="max-w-[550px] py-8 pt-16 px-4 bg-white/20 backdrop-blur-md rounded-lg">
                <div>
                  <h3 className="font-mainFont font-[700] 2xl:text-3xl xl:text-3xl lg:text-2xl md:portrait:text-2xl text-base transition-all duration-200 ease-linear uppercase leading-normal">
                    Team Of Financial Consultants Helping People Take Control Of
                    Their Finances In Ways They Never Imagined Possible{" "}
                  </h3>
                </div>
                <p className="2xl:text-base xl:text-base lg:text-[14px] md:portrait:text-[13px] text-[15px]  transition-all duration-200 ease-linear font-secondaryFont font-[700] my-5 paraGraidentColor">
                  Your Success, Financial Independence, and Happiness are Our
                  Pride!
                </p>
                <Link
                  to={
                    "https://links.joptiman.com/widget/form/ziWPHtzQiDL1oa5rlRcu"
                  }
                  target="_blank"
                  className="bg-secondaryColor button text-mainColor 2xl:px-5 xl:px-5 lg:px-4 2xl:py-3 xl:py-3 lg:py-2 md:portrait:px-5 md:portrait:py-2 px-5 py-2 rounded-lg 2xl:text-[15px] xl:text-[15px] lg:text-[13px] md:portrait:text-[13px] text-[13px]  font-secondaryFont font-[700] uppercase"
                >
                  join our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
