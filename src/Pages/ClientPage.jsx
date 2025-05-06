import React, { useEffect } from "react";
import { Herosection } from "../components/ClientPage/Herosection/Herosection";
import { Footer } from "../components/common/Footer/Footer";
import { Mainsection } from "../components/ClientPage/Mainsection/Mainsection";
import { Navbar } from "../components/common/Navbar/Navbar";

export const ClientPage = () => {
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
