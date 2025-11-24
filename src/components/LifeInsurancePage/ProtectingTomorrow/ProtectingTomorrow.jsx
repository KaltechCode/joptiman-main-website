import React, { useRef, useState } from "react";
import "./ProtectingTomorrow.css";
import { Link, useNavigate } from "react-router-dom";
import LifeInsuranceImg2 from "../../../assets/LifeInsuranceImg2.png";
import PlayIconImg from "../../../assets/PlayIcon.png";

export const ProtectingTomorrow = () => {
  const navigte = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handlePlay = async () => {
    setIsPlaying(true);
    if (videoRef.current) await videoRef.current.play();
  };
  const handlePuse = () => {
    setIsPlaying(false);
  };
  return (
    <>
      <div className="2xl:min-h-[min(90dvh,920px)] xl:min-h-[min(90dvh,920px)] lg:min-h-[min(90dvh,920px)] md:portrait:min-h-[50dvh] lg:portrait:min-h-[min(90dvh,920px)] min-h-[90dvh] 4k:min-h-[60dvh] 3k:min-h-[65dvh] flex justify-start items-center 2xl:py-16 xl:py-16  4k:xl:py-20 3k:xl:py-20 md:portrait:py-20 lg:py-20 py-20">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col 2xl:gap-8 xl:gap-8 lg:gap-8 4k:gap-16 3k:gap-16 gap-8  2xl:p-4 xl:p-4 lg:p-4 md:portrait:p-4 4k:p-4 3k:p-4 p-2 rounded-lg">
            <div className="flex flex-col 2xl:gap-5 xl:gap-5 lg:gap-5 3k:gap-10 4k:gap-10 gap-5">
              <h2 className="text-4xl font-[700] font-mainFont text-secondaryColor">
                Protecting Your Tomorrow, Today
              </h2>
              <p className="font-secondaryFont font-[500] text-base text-[#767676]">
                We are here to help secure your future and safeguard your loved
                ones. We understand the vital role life insurance plays in
                protecting your family’s financial well-being. It’s not just a
                safety net—it’s a way to ensure your loved ones are cared for,
                even when you can’t be there. Our life insurance services are
                tailored to meet your unique needs and goals, providing you and
                your family with the peace of mind you deserve. At JOptiman
                Consultancy, we prioritize your family’s financial security and
                peace of mind. Our life insurance services are designed to
                provide you with the coverage you need to protect your loved
                ones while building a lasting legacy.
              </p>
            </div>
            <div className="relative">
              {isPlaying ? (
                <video
                  ref={videoRef}
                  src="https://cdn.bfldr.com/86JM1UOD/as/658hsb775c87wcbk47hckjg/IUL_Consumer_Video"
                  controls
                  playsInline
                  autoPlay
                  className="w-full h-auto transition-all  duration-500 ease-linear"
                  onEnded={handlePuse}
                >
                  <source
                    src="https://cdn.bfldr.com/86JM1UOD/as/658hsb775c87wcbk47hckjg/IUL_Consumer_Video"
                    type="video/mp4"
                  />
                </video>
              ) : (
                <>
                  <div className="relative w-full transition-all  duration-500 ease-linear">
                    <img
                      src={LifeInsuranceImg2}
                      alt="HealthInsuranceImg"
                      className="rounded-lg"
                    />
                    <div className="absolute h-full w-full flex justify-center items-center z-20 top-0 left-0">
                      <button
                        onClick={handlePlay}
                        className="playBtnBg 2xl:w-[15%] xl:w-[15%] lg:w-[20%] 4k:w-[15%] 3k:w-[15%] md:portrait:w-[20%] w-[40%] py-6 rounded-xl flex justify-center items-center"
                      >
                        <img
                          className="w-16"
                          src={PlayIconImg}
                          alt="play-vector"
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div
                className={`absolute -bottom-14 left-0 w-full ${
                  isPlaying ? "hidden" : "flex"
                }  justify-center items-center gap-4 transition-all  duration-500 ease-linear`}
              >
                <div className="w-[97%] 2xl:flex xl:flex lg:flex 4k:flex 3k:flex md:portrait:flex hidden justify-center items-center gap-4 CTABgColor rounded-lg">
                  <div className="2xl:w-[40%] xl:w-[40%] lg:w-[45%] 4k:w-[40%] 3k:w-[40%] md:portrait:w-[40%] py-7 px-8">
                    <p className="font-secondaryFont font-[500] text-white 2xl:text-lg xl:text-lg lg:text-base md:portrait:sm 4k:text-lg 3k:text-lg my-1">
                      Do you need
                    </p>
                    <h3 className="font-mainFont font-[700] 2xl:text-2xl xl:text-2xl lg:text-xl md:portrait:text-lg 4k:text-2xl 3k:text-2xl text-white">
                      Life Insurance?
                    </h3>
                  </div>

                  <div className="flex-1 py-7 2xl:px-8 xl:px-8 lg:px-5 md:portrait:px-2 4k:px-8 3k:px-8 flex justify-between items-center">
                    <div className="flex-shrink-0">
                      <p className="text-right text-[#767676] font-secondaryFont font-[500] 2xl:text-lg xl:text-lg lg:text-base md:portrait:sm 4k:text-lg 3k:text-lg">
                        Schedule a{" "}
                      </p>
                      <h3 className="2xl:text-2xl xl:text-2xl lg:text-xl md:portrait:text-lg 4k:text-2xl 3k:text-2xl font-[700] font-mainFont text-[#00204A]">
                        <span className="text-[#F08613]">Free</span> assessment
                      </h3>
                    </div>
                    <Link
                      to={
                        "https://links.joptimanconsultancy.com/widget/bookings/jopt-consultation"
                      }
                      target="_blank"
                      className="uppercase text-white font-secondaryFont font-[600] bg-[#1A73E9] text-base px-6 py-3 rounded-lg"
                    >
                      Schedule NOW
                    </Link>
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
