import React from "react";
import "./CoreValues.css";

export const CoreValues = () => {
  return (
    <>
      <div className="2xl:min-h-[min(90dvh,920px)] xl:min-h-[min(90dvh,920px)] lg:min-h-[min(90dvh,920px)] md:portrait:min-h-[90dvh] lg:portrait:min-h-[min(90dvh,920px)] min-h-[90dvh] 4k:min-h-[60dvh] 3k:min-h-[65dvh] flex justify-start items-center 2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8 customShadowCoreValue 2xl:p-10 xl:p-10 lg:p-10 md:portrait:p-10 4k:p-10 3k:p-10 p-5 rounded-lg">
            <div className="flex-1 w-full flex flex-col gap-10">
              <div className="w-full">
                <div className="flex justify-start items-center bg-mainColor 2xl:h-20 xl:h-20 lg:h-20 lg:landscape:h-[4.5rem] md:portrait:h-20 5k:h-20 4k:landscape:h-24 h-14">
                  <div className="h-full 2xl:w-40 xl:w-40 lg:w-40 lg:landscape:w-24 md:portrait:w-44 5k:w-44 4k:w-32 3k:w-28 w-32 bg-[#0C0544] rounded-tr-[50px]"></div>
                  <div className="flex flex-col justify-center items-center border-b-2 border-[#0C0544] h-full w-full">
                    <div className=" py-2.5 ">
                      <p className="font-[700] text-[#0C0544]  2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl 4k:text-3xl 3k:text-3xl text-xl font-mainFont">
                        Our Core Values
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row 4k:flex-row 3k:flex-row justify-center  gap-6">
              <div className="flex-1 flex flex-col gap-6">
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="bg-[#0C0544] flex justify-center items-center py-3 w-full">
                    <h3 className="font-mainFont font-[700] text-white text-xl">
                      Our Mission
                    </h3>
                  </div>
                  <div className="flex justify-center items-center py-5 px-5 bg-white">
                    {/* <p className="text-paraColor font-secondaryFont font-[400] text-base">
                      Our mission is to help provide financial professionals
                      with empowering optimal managerial skills and real
                      successful entrepreneurial mindset to build and grow their
                      business as they strive to provide the most trusted
                      financial consultations to a diverse clientele.
                    </p> */}
                    <p className="text-paraColor font-secondaryFont font-[400] text-base">
                      At JOptiman Consultancy, our mission is clear: <br />
                      <strong>Empower agents to grow.</strong> <br />
                      <strong>
                        Equip clients to take control of their finances in ways
                        they never imagined possible.{" "}
                      </strong>
                      <br />
                      <strong>
                        Promote health and wellness through financial
                        empowerment.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="bg-[#0C0544] flex justify-center items-center py-3 w-full">
                    <h3 className="font-mainFont font-[700] text-white text-xl">
                      Our Vision
                    </h3>
                  </div>
                  <div className="flex justify-center items-center py-5 px-5 bg-white">
                    <p className="text-paraColor font-secondaryFont font-[400] text-base">
                      Our vision is to reach everyone in the communities we
                      serve with empowering financial options that will help
                      them take control of their financial future in ways that
                      they never imagined possible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="bg-[#0C0544] flex justify-center items-center py-3 w-full">
                    <h3 className="font-mainFont font-[700] text-white text-xl">
                      Our Values
                    </h3>
                  </div>
                  <div className="flex h-full flex-col justify-start items-start gap-4 py-5 px-5 bg-white">
                    <p className="text-paraColor font-secondaryFont font-[400] text-base">
                      At JOptiman, our clients’ success, financial independence,
                      and happiness are our pride.
                    </p>

                    <p className="font-secondaryFont font-[400] text-paraColor text-base">
                      Embodied in our core values of:
                    </p>
                    <ul className="flex flex-col justify-start items-start gap-2 px-6">
                      <li className="text-base font-secondaryFont font-[500] list-disc">
                        Trust
                      </li>
                      <li className="text-base font-secondaryFont font-[500] list-disc">
                        Transparency
                      </li>

                      <li className="text-base font-secondaryFont font-[500] list-disc">
                        Long Term Value
                      </li>
                    </ul>
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
