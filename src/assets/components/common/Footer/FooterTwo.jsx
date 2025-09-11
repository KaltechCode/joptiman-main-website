import React from "react";
import FooterLogo from "../../../assets/FooterLogo.png";
import { Link } from "react-router-dom";

export const FooterTwo = () => {
  return (
    <>
      <footer className="bg-[#040B1E] py-10 4k:py-16">
        <div className="max-w-[1920px] mx-auto flex justify-center items-center gap-4 flex-wrap">
          <div>
            <img alt="FooterLogo" src={FooterLogo} className="h-auto w-44" />
          </div>
          <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5]  flex-shrink-0">
            Copyright © 2025 JOptiman Consultancy
          </p>
          <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
            {" "}
            All Rights Reserved
          </p>
          <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
            {" "}
            Privacy Policy
          </p>
          <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
            {" "}
            Designed by{" "}
            <Link to="https://kaltechconsultancy.tech" target="_blank">
              Kaltech
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};
