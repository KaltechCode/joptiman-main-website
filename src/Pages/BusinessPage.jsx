import React, { useEffect } from "react";
import {Navbar} from '../components/common/Navbar/Navbar'
import { Herosection } from "../components/BusinessPage/Herosection/Herosection";
import { Footer } from "../components/common/Footer/Footer";
import { Mainsection } from "../components/BusinessPage/Mainsection/Mainsection";

export const BusinessPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Herosection />
      <Mainsection />
      <Footer />
    </>
  );
};
