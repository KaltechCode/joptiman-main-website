import React from "react";
import "./GetQuotes.css";

export const GetQuotes = () => {
  return (
    <>
      <div className="2xl:min-h-[60dvh] xl:min-h-[60dvh] lg:min-h-[60dvh] md:portrait:min-h-[60dvh] lg:portrait:min-h-[60dvh] min-h-[90dvh] 4k:min-h-[30dvh] 3k:min-h-[35dvh] flex justify-start items-center 2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8  2xl:p-4 xl:p-4 lg:p-4 md:portrait:p-4 4k:p-4 3k:p-4 p-2 rounded-lg">
            <div className="grid grid-cols-2 gap-5 w-full">
              <div className="flex flex-col justify-center items-center gap-5 py-6 px-4">
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  At JOptiman Consultancy, we prioritize your family’s financial
                  security and peace of mind. Our life insurance services are
                  designed to provide you with the coverage you need to protect
                  your loved ones while building a lasting legacy
                </p>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  Contact us today to learn more about how we can help you
                  choose the right life insurance policy and secure your
                  family’s
                </p>
              </div>
              <div className="w-full">
                <div className="getQuotesBg p-12 h-full rounded-lg flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg">
                    <p className="font-[500] font-secondaryFont text-secondaryColor test-base">
                      Protect your loved ones and secure their future with our
                      comprehensive life insurance policies. Whether you're
                      seeking term or whole life insurance, we provide
                      customized plans that suit your needs and give you peace
                      of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
