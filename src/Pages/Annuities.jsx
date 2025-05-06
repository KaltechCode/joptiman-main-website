import React,{useEffect} from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import { GetQuotes } from "../components/HealthInsurance/GetQuotes/GetQuotes";
import { Herosection } from "../components/Annuities/Herosection/Herosection";
import { GaranteedIncome } from "../components/Annuities/GaranteedIncome/GaranteedIncome";
import { WaysToAssists } from "../components/Annuities/WaysToAssist/WaysToAssist";
import { AnnuitiesService } from "../components/Annuities/AnnuitiesService/AnnuitiesService";

export const Annuities = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Herosection />
      <GaranteedIncome />
      <WaysToAssists />
      <AnnuitiesService />
      <GetQuotes label='annuities' contentOne='Whether you want to protect your savings from market volatility, we offer tailored annuity solutions that meet your unique needs' contentTwo='Contact us today to learn more about annuities.' contentThree='Protect your loved ones and secure their future with our comprehensive annuities solutions.' />
      <Footer />
    </>
  );
};
