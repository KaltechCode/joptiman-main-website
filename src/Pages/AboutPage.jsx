import React, { useEffect } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { HeroSection } from "../components/AboutusPage/HeroSection/HeroSection";
import { AboutInfo } from "../components/AboutusPage/AboutInfo/AboutInfo";
import { OurPartnersSection } from "../components/Homepage/OurPartners/OurPartnersSection";
import { WhyChooseus } from "../components/AboutusPage/WhyChooseus/WhyChooseus";
import { CoreValues } from "../components/AboutusPage/CoreValues/CoreValues";
import { SteperFormSection } from "../components/AgentRegistrationPage/SteperFormSection/SteperFormSection";
import { Whychooseus2 } from "../components/AboutusPage/Whychooseus2/Whychooseus2";
import { OurTeam } from "../components/AboutusPage/OurTeam/OurTeam";

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutInfo />
      <WhyChooseus />
      <CoreValues />
      <Whychooseus2 />

      {/* <div className="2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20">
        <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex justify-center items-center flex-col gap-4 my-8">
          <h3 className="font-secondaryFont font-[700] text-center text-[#F08613] 2xl:text-base xl:text-base lg:text-base 3k:text-base 4k:text-base md:portrait:text-base text-sm">
            WHY WAIT ?
          </h3>
          <h2 className="font-mainFont font-[700] 2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl 4k:text-3xl 3k:text-3xl text-xl">
            Join JOptiman Consultancy{" "}
          </h2>
        </div>
        <SteperFormSection />
      </div> */}


      <OurPartnersSection />
      <OurTeam />
      <Footer />
    </>
  );
};
