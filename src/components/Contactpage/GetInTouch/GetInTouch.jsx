import React from "react";
import { Link } from "react-router-dom";
import ContactImg from "../../../assets/ContactImg.png";

export const GetInTouch = () => {
  return (
    <>
      <div className="2xl:min-h-[min(70dvh,920px)] xl:min-h-[min(70dvh,920px)] lg:min-h-[min(70dvh,920px)] md:portrait:min-h-[50dvh] 4k:min-h-[40dvh] 3k:min-h-[40dvh]  flex justify-center items-center py-16">
        <div className="max-w-[1920px] mx-auto flex justify-center items-center w-full">
          <div className="2xl:w-[70%] xl:w-[80%] lg:w-[85%] 4k:w-[70%] md:portrait:w-[80%] w-[90%] flex justify-between gap-5 flex-col md:portrait:flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row">
            <div className="flex-1 w-full ">
              <h2 className="font-mainFont 2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl 4k:text-3xl text-xl font-[700] text-[#0C0544]">
                Get in Touch
              </h2>
              <div className="my-3 w-[95%]">
                <p className="text-[16px] font-secondaryFont font-[400] text-[#767676]">
                  You can get the support and information you need from our
                  agents from specific provider network management to a specific
                  product or service, we are always here to assist as best as we
                  can.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="font-mainFont font-[700] 2xl:text-xl xl:text-xl lg:text-xl md:portrait:text-xl 4k:text-xl text-lg text-[#0C0544]">
                  Contact Info
                </h3>
                <div>
                  <h4 className="font-mainFont font-[700] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-base text-[#040B1E]">
                    Address
                  </h4>
                  <Link
                    to="/"
                    className="text-[16px] font-secondaryFont font-[500] text-[#767676] flex flex-col gap-.5"
                  >
                    <Link
                      to="https://maps.app.goo.gl/fdykDgwtyHqRovC76"
                      target="_blank"
                    >
                      675 Town Square Blvd,
                    </Link>
                    <Link
                      to="https://maps.app.goo.gl/fdykDgwtyHqRovC76"
                      target="_blank"
                    >
                      Suite 200,
                    </Link>
                    <Link
                      to="https://maps.app.goo.gl/fdykDgwtyHqRovC76"
                      target="_blank"
                    >
                      Garland,
                    </Link>
                    <Link
                      to="https://maps.app.goo.gl/fdykDgwtyHqRovC76"
                      target="_blank"
                    >
                      Texas,
                    </Link>
                    <Link
                      to="https://maps.app.goo.gl/fdykDgwtyHqRovC76"
                      target="_blank"
                    >
                      TX 75040
                    </Link>
                  </Link>
                </div>

                <div>
                  <h4 className="font-mainFont font-[700] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-base text-[#040B1E]">
                    Phone
                  </h4>
                  <Link
                    to="tel:+1(888) 491-7757"
                    className="text-[16px] font-secondaryFont font-[500] text-[#767676]"
                  >
                    +1 (888) 491-7757
                  </Link>
                </div>

                <div>
                  <h4 className="font-mainFont font-[700] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-base text-[#040B1E]">
                    Email
                  </h4>
                  <Link
                    to="mailto:info@joptimanconsultancy.com"
                    className="text-[15px] font-secondaryFont font-[500] text-[#767676]"
                  >
                    info@joptimanconsultancy.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1  2xl:w-full xl:w-full lg:w-full md:portrait:w-[75%] 4k:w-full 3k:w-full w-[75%] mx-auto">
              <img
                className="w-full h-auto"
                src={ContactImg}
                alt="ContactImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
