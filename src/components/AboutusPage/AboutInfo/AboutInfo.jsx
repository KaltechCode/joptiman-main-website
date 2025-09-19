import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AboutInfoBg from "../../../assets/AboutInfoBg.png";
import AboutInfoImg1 from "../../../assets/AboutInfoImg1.png";
import AboutInfoImg2 from "../../../assets/AboutInfoImg2.png";
import AboutImgNew3 from "../../../assets/AboutImgNew3.jpg";

export const AboutInfo = () => {
  const router = useNavigate();
  return (
    <div className="bg-[#F5F5F8] 4k:min-h-[65dvh] 3k:min-h-[65dvh] 2xl:min-h-[80dvh] xl:min-h-[80dvh] lg:min-h-[80dvh] lg:portrait:min-h-[90dvh] md:portrait:min-h-[100dvh] min-h-[100dvh] flex justify-center items-center 2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20">
      <div className="max-w-[1920px] mx-auto w-full flex flex-col justify-center items-center">
        <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] flex 2xl:flex-row xl:flex-row 4k:flex-row 3k:flex-row md:portrait:flex-col lg:landscape:flex-row lg:portrait:flex-col flex-col justify-center items-center gap-10">
          <div className="px-5 lg:px-0 4k:w-[80%] 3k:w-[80%] 2xl:w-[95%] xl:w-full lg:w-full flex flex-col gap-4">
            <h2 className="font-mainFont font-[700] 4k:text-3xl 3k:text-3xl 2xl:text-2xl xl:text-xl lg:text-xl md:portrait:text-2xl text-[#040B1E]">
              Team Of Independent Financial Consultants
            </h2>
            <p className="font-secondaryFont font-[400] text-[#767676] text-base">
              <strong>JOptiman Consultancy</strong>, is an independent financial
              consulting agency that supports contracted independent consultants
              in helping individuals, families, and businesses optimize
              financial outcomes and reduce inefficiencies in their finances.
            </p>
            <p className="font-secondaryFont font-[400] text-[#767676] text-base">
              We specialize in providing{" "}
              <strong>innovative insurance solutions</strong> such as{" "}
              <strong>
                Annuities, Indexed Universal Life (IUL), Retirement Income
                Planning, College Funding, and Final Expense Protection
              </strong>
              . Every service we deliver is built on the core principles of
              <strong> trust, transparency, and long-term value</strong>,
              ensuring that individuals, families, and businesses can secure
              their financial futures with confidence.
            </p>
          </div>
        </div>

        {/* about image and content container*/}
        <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] flex 2xl:flex-row xl:flex-row 4k:flex-row 3k:flex-row md:portrait:flex-col lg:landscape:flex-row lg:portrait:flex-col flex-col justify-center items-center gap-10 mt-10">
          {/* about info images */}
          <div className="flex-1 relative p-5 md:portrait:w-[70%] lg:portrait:w-[60%] 2xl:w-full xl:w-full 4k:w-full 3k:w-full w-[80%]">
            <div className=" absolute top-0 left-0 w-full h-full">
              <img
                src={AboutInfoBg}
                alt="AboutInfoBg"
                className="w-full h-full"
              />
            </div>
            <div className="relative flex justify-center items-center gap-5 w-full">
              <div className="flex flex-col gap-5 flex-1">
                <img src={AboutInfoImg1} alt="AboutInfoImg1" />
                <img src={AboutInfoImg2} alt="AboutInfoImg2" />
              </div>
              <div className="flex-1">
                <img
                  src={AboutImgNew3}
                  alt="AboutInfoImg3"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* about info content */}
          <div className="flex-1 p-5">
            <div className="4k:w-[80%] 3k:w-[80%] 2xl:w-[95%] xl:w-full lg:w-full flex flex-col gap-4">
              {/* <h2 className="font-mainFont font-[700] 4k:text-3xl 3k:text-3xl 2xl:text-2xl xl:text-xl lg:text-xl md:portrait:text-2xl text-[#040B1E]">
                Team Of Independent Financial Consultants
              </h2> */}
              <p className="font-secondaryFont font-[400] text-[#767676] text-base">
                But JOptiman is more than just a client-focused consultancy — we
                are a{" "}
                <strong>growth partner for agents and agency leaders.</strong>{" "}
                Our unique model combines industry expertise with{" "}
                <strong>
                  ongoing training, compliance support, and cutting-edge
                  automation tools,
                </strong>
                giving agents the confidence to serve clients effectively while
                scaling their business.
              </p>
              <p className="font-secondaryFont font-[400] text-[#767676] text-base">
                Through{" "}
                <strong>
                  monthly training programs, tailored workshops, and CRM-driven
                  marketing systems,
                </strong>{" "}
                we help agents master product knowledge, sharpen sales
                techniques, and stay ahead of regulatory changes. This ensures
                that every professional within JOptiman Consultancy is equipped
                not only to succeed individually, but also to contribute to a
                thriving, compliant, and client-first agency culture.
              </p>

              {/* <p className="font-secondaryFont font-[400] text-[#767676] text-base">
                At JOptiman Consultancy, our mission is clear: <br />
                <strong>Empower agents to grow.</strong> <br />
                <strong>
                  Equip clients to take control of their finances in ways they
                  never imagined possible.{" "}
                </strong>
                <br />
                <strong>
                  Promote health and wellness through financial empowerment.
                </strong>
              </p> */}

              <Link
                to="https://links.joptiman.com/widget/form/ziWPHtzQiDL1oa5rlRcu"
                target="_blank"
                className="bg-secondaryColor button text-mainColor 2xl:px-5 xl:px-5 lg:px-4 2xl:py-3 xl:py-3 lg:py-2 md:portrait:px-5 md:portrait:py-2 px-5 py-2 rounded-lg 2xl:text-[15px] xl:text-[15px] lg:text-[13px] md:portrait:text-[13px] text-[13px]  font-secondaryFont font-[700] uppercase mt-10"
              >
                join our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
