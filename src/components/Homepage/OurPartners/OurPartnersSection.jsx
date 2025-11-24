import React from "react";
import PartnerSecBg from "../../../assets/PartnersSectionBg.png";
import Marquee from "react-fast-marquee";
import PartnerImg1 from "../../../assets/PartnerImg-1.png";
import PartnerImg2 from "../../../assets/PartnerImg-2.png";
import PartnerImg3 from "../../../assets/PartnerImg-3.png";
import PartnerImg4 from "../../../assets/PartnerImg-4.png";
import PartnerImg5 from "../../../assets/PartnerImg-5.png";
import PartnerImg6 from "../../../assets/PartnerImg-6.png";
import PartnerImg7 from "../../../assets/PartnerImg-7.png";
import PartnerImg8 from "../../../assets/PartnerImg-8.png";
import PartnerImg9 from "../../../assets/PartnerImg-9.png";
import PartnerImg10 from "../../../assets/PartnerImg-10.png";
import PartnerImg11 from "../../../assets/PartnerImg-11.png";
import PartnerImg12 from "../../../assets/PartnerImg-12.png";

const partnersSlider = [
  PartnerImg1,
  PartnerImg2,
  PartnerImg3,
  PartnerImg4,
  PartnerImg5,
  PartnerImg6,
  PartnerImg7,
  PartnerImg8,
  PartnerImg9,
  PartnerImg10,
  PartnerImg11,
  PartnerImg12,
];

export const OurPartnersSection = () => {
  return (
    <>
      <div className="2xl:min-h-[min(30dvh,720px)] xl:min-h-[min(30dvh,720px)] lg:min-h-[min(30dvh,720px)] md:portrait:min-h-[min(30dvh,720px)] h-[min(30dvh, 720px)] 5k:min-h-[min(20dvh, 720px)] 4k:min-h-[min(25dvh, 720px)] 3k:min-h-[min(30dvh, 720px)]  relative flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={PartnerSecBg}
            alt="PartnerSecBg"
            className="w-full h-full"
          />
        </div>
        <div className="max-w-[1920px] mx-auto  relative z-40 w-full">
          <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-10">
            <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:portrait:w-[80%] w-full flex justify-center items-center">
              <h3 className="text-white font-mainFont font-[700] 2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl text-lg">
                OUR BUSSINESS PARTNERS
              </h3>
            </div>
            <MaqueeSlider />
          </div>
        </div>
      </div>
    </>
  );
};

const MaqueeSlider = () => {
  return (
    <>
      <Marquee speed={70} direction="left">
        <div className="flex justify-start gap-3 ml-3">
          {partnersSlider.map((img, id) => (
            <>
              <img
                src={img}
                alt="cur"
                className="w-48 h-full aspect-auto object-contain"
              />
            </>
          ))}
        </div>
      </Marquee>
    </>
  );
};
