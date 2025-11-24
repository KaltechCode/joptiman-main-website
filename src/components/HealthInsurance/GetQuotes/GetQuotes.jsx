import React from "react";
import "./GetQuotes.css";
import { Link } from "react-router-dom";

export const GetQuotes = ({
  label,
  contentOne,
  contentTwo,
  contentThree,
  link,

  btnLabel,
  toLink,
}) => {
  return (
    <>
      <div className="2xl:min-h-[min(60dvh,920px)] xl:min-h-[min(60dvh,920px)] lg:min-h-[min(60dvh,920px)] md:portrait:min-h-[50dvh] lg:portrait:min-h-[min(60dvh,920px)] min-h-[80dvh] 4k:min-h-[30dvh] 3k:min-h-[35dvh] flex justify-start items-center 2xl:py-20 xl:py-20  4k:py-24 3k:py-20 md:portrait:py-16 lg:py-28 py-20 4k:pb-36 3k:pb-32 xl:pb-32 lg:pb-32 md:portrait:pb-32 2xl:pb-32 pb-40">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8  2xl:p-4 xl:p-4 lg:p-4 md:portrait:p-4 4k:p-4 3k:p-4 p-2 rounded-lg relative">
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 4k:grid-cols-2 3k:grid-cols-2 md:portrait:grid-cols-1 gap-5 w-full">
              <div className="flex flex-col justify-center items-center gap-5 py-6 px-4">
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  {/* With the right health insurance, you can protect both your
                  health and your finances. Whether you’re an individual looking
                  for the best personal health plan or a business providing
                  benefits for your employees, JOptiman Consultancy is here to
                  guide you every step of the way. */}
                  {contentOne}
                </p>
                <p className="font-[500] font-secondaryFont text-base text-[#767676] text-start self-start">
                  {/* Contact us today to learn more about how we can help you
                  navigate the complexities of health insurance and find the
                  right coverage for your needs. */}
                  {contentTwo}
                </p>
              </div>
              <div className="w-full">
                <div className="getQuotesBg 2xl:p-12 xl:p-12 lg:p-12 md:portrait:p-20 p-10 4k:p-28 3k:p-24 h-full rounded-lg flex justify-center items-center">
                  <div className="bg-white 2xl:p-5 xl:p-5 lg:p-5 md:portrait:p-10 p-5 4k:p-10 3k:p-10 rounded-lg">
                    <p className="font-[500] font-secondaryFont text-secondaryColor test-base">
                      {/* Protect your loved ones and secure their future with our
                      comprehensive health insurance policies that suit your
                      needs and give you peace of mind. */}
                      {contentThree}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute 2xl:-bottom-[25dvh]  2xl:landscape:-bottom-[25dvh] xl:-bottom-[25vh] lg:-bottom-[22vh] lg:landscape:-bottom-[24vh] md:portrait:-bottom-[17vh] -bottom-[30dvh] 4k:landscape:-bottom-[15dvh]  3k:landscape:-bottom-[13dvh] 5k:landscape:-bottom-[10dvh] mobile-landscape:-bottom-[65dvh] md:landscape:-bottom-[55dvh] w-full bg-white getQuoteBottom__Wrapper rounded flex  justify-center items-center gap-5 2xl:p-5 xl:p-5 lg:p-4 md:portrait:p-5 p-3">
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row 4k:flex-row 3k:flex-row justify-center items-center gap-5 2xl:w-[90%] xl:w-[90%] lg:w-[95%] md:portrait:w-[95%] w-[90%]">
                <div className="flex-1">
                  <h2 className="2xl:text-3xl xl:text-3xl lg:text-2xl 4k:text-3xl 3k:text-3xl md:portrait:text-2xl text-xl font-mainFont font-[700]">
                    Get your {label}{" "}
                    <span className="text-[#1A73E9]">Quote</span> Today
                  </h2>
                  <p className="font-secondaryFont font-[500] text-base text-paraColor my-3">
                    Try us risk free
                  </p>
                </div>
                <div>
                  <Link
                    to={toLink ? toLink : link}
                    target="_blank"
                    className="bg-[#F08613] py-3 px-6  rounded-md text-white font-secondaryFont font-[500] text-base uppercase"
                  >
                    {btnLabel ? btnLabel : "GET in touch today"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
