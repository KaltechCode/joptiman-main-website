import React, { useEffect } from "react";
import { Footer } from "../components/common/Footer/Footer";
import { Navbar } from "../components/common/Navbar/Navbar";
import { GetQuotes } from "../components/HealthInsurance/GetQuotes/GetQuotes";
import { HealthServices } from "../components/HealthInsurance/HealthServices/HealthServices";
import { Herosection } from "../components/HealthInsurance/HeroSection/Herosection";
import { ProtectingBusiness } from "../components/HealthInsurance/ProtectingBusiness/ProtectingBusiness";
import { WaysToAssists } from "../components/HealthInsurance/WaysToAssist/WaysToAssists";

export const HealthInsurance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Herosection />
      <ProtectingBusiness />
      <WaysToAssists />
      <HealthServices />
      <GetQuotes
        label="health insurance"
        contentOne="With the right health insurance, you can protect both your
                  health and your finances. Whether you’re an individual looking
                  for the best personal health plan or a business providing
                  benefits for your employees, JOptiman Consultancy is here to
                  guide you every step of the way."
        contentTwo=" Contact us today to learn more about how we can help you
                  navigate the complexities of health insurance and find the
                  right coverage for your needs."
        contentThree="Protect your loved ones and secure their future with our
                      comprehensive health insurance policies that suit your
                      needs and give you peace of mind."
        link="https://www.healthsherpa.com/?_agent_id=JOptiman-Consultancy-trbdvq"
      />
      <Footer />
    </>
  );
};
