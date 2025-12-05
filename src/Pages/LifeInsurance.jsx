import React, { useEffect } from "react";
import { Footer } from "../components/common/Footer/Footer";
import { Navbar } from "../components/common/Navbar/Navbar";
import { GetQuotes } from "../components/HealthInsurance/GetQuotes/GetQuotes";

import { Herosection } from "../components/LifeInsurancePage/Herosection/Herosection";
import { LifeInsuranceServices } from "../components/LifeInsurancePage/LifeInsuranceService/LifeInsuranceService";
import { ProtectingTomorrow } from "../components/LifeInsurancePage/ProtectingTomorrow/ProtectingTomorrow";
import { WaysToAssists } from "../components/LifeInsurancePage/WaysToAssist/WaysToAssist";

export const LifeInsurance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Herosection />
      <ProtectingTomorrow />
      <WaysToAssists />
      <LifeInsuranceServices />
      <GetQuotes
        label="life insurance"
        contentOne="Our life insurance services are designed to provide you with the coverage you need to protect your loved ones while building a lasting legacy. Our life insurance services are designed to provide you with the coverage you need to protect your loved ones while building a lasting legacy."
        contentTwo="Contact us today to learn more about how we can help you find the right life insurance coverage for your needs."
        contentThree="Contact us today to learn more about how we can help you navigate the complexities of life insurance policies and find the right coverage for your needs."
        link="/contact-us"
        toLink="https://www.joptiman.com/life-insurance-quote"
        btnLabel="Get Your Quote"
      />
      <Footer />
    </>
  );
};
