import React, { useEffect } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { HeroSection } from "../components/Homepage/HeroSection/HeroSection";
import { ABCSection } from "../components/Homepage/ABCSection/ABCSection";
import { AboutSection } from "../components/Homepage/AboutSection/AboutSection";
import { OurPartnersSection } from "../components/Homepage/OurPartners/OurPartnersSection";
import { OurServices } from "../components/Homepage/OurServices/OurServices";
import { WhyChooseUs } from "../components/Homepage/WhyChooseUs/WhyChooseUs";
import { OurProcess } from "../components/Homepage/OurProcess/OurProcess";
import { FAQ } from "../components/Homepage/FAQ/FAQ";
import { Testimonials } from "../components/Homepage/Testimonials/Testimonials";
import { ContactSection } from "../components/Homepage/Contact/ContactSection";
import { Footer } from "../components/common/Footer/Footer";
import { BlogSection } from "../components/Homepage/BlogSection/BlogSection";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <ABCSection />
      <AboutSection />
      <OurPartnersSection />
      <OurServices />
      <WhyChooseUs />
      <OurProcess />
      <FAQ />
      <Testimonials />
      <ContactSection />
      {/* <BlogSection /> */}
      <Footer />
    </>
  );
};
