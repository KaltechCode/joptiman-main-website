import React, { useEffect } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { HeroSection } from "../components/AgentRegistrationPage/HeroSection/HeroSection";
import { InfoSection } from "../components/AgentRegistrationPage/InfoSection/InfoSection";
import { SteperFormSection } from "../components/AgentRegistrationPage/SteperFormSection/SteperFormSection";


export const AgentRegistration = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <SteperFormSection />
      <Footer />
    </>
  );
};
