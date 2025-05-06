import React, { useEffect } from "react";
import { HeroSection } from "../components/Contactpage/Herosec/HeroSection";
import { Footer } from "../components/common/Footer/Footer";
import { Navbar } from "../components/common/Navbar/Navbar";
import { GetInTouch } from "../components/Contactpage/GetInTouch/GetInTouch";
import { ContactForm } from "../components/Contactpage/ContactForm/ContactForm";
import { FooterTwo } from "../components/common/Footer/FooterTwo";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <GetInTouch />
      <ContactForm />
      <FooterTwo />
    </>
  );
};
