import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import AboutShape1 from "../../../assets/AboutShape1.png";
import AboutShape2 from "../../../assets/AboutShape2.png";
import AboutShape3 from "../../../assets/AboutShape3.png";
import { useAnimate, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const AboutSection = () => {
  const [scope, animate] = useAnimate();
  const navigate = useNavigate();
  const isInView = useInView(scope);
  const [animationCounter, setAnimationCounter] = useState(0);
  const [currentImgSet, setCurrentImgSet] = useState({
    img1: "/AnimateImg1-1.png",
    img2: "/AnimateImg2-2.png",
    img3: "/AnimateImg3-2.png",
    img4: "/AnimateImg4-2.png",
    img5: "/AnimateImg6-2.png",
    img6: "/AnimateImg5-2.png",
  });
  const [currentInfo, setCurrentInfo] = useState(0);

  const infoData = [
    ` JOptiman provides a clear career progression path,
                      ensuring that you can evolve within the organization and
                      reach your full potential as a financial consultant
                      through continuous learning opportunities, access to a
                      wealth of resources, and mentorship from experienced
                      industry leaders.`,
    `At JOptiman, we understand the importance of work-life balance. The agency offers flexible work arrangements that allow you to balance your career and personal life effectively. JOptiman creates an environment where you can thrive both professionally and personally`,
    `We offer a highly competitive compensation packages, including performance-based incentives and a range of benefits designed to support their agents `,
  ];

  const handleAnimationAbout = async () => {
    animate(
      "#imgBox1",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox1_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox2",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox2_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox3",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox3_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox4",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox4_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox5",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox5_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox6",
      {
        zIndex: 30,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    animate(
      "#imgBox6_2",
      {
        zIndex: 10,
        opacity: 1,
      },
      { duration: 0, ease: "anticipate" }
    );
    // for set one start
    // for image box 1 start

    animate(
      "#imgBox1_mainWrapper",
      {
        rotateY: ["0deg", "360deg"],
      },
      {
        duration: 0.8,
        ease: "anticipate",
        onComplete: () => {
          animate("#imgBox1_mainWrapper", { rotateY: "0deg" }, { duration: 0 });
          console.log("on amimation completed");
        },
      }
    );
    animate(
      "#imgBox1",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox1_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    // for image box 1 end

    // for image box 2 start
    animate(
      "#imgBox2_mainWrapper",
      {
        rotateX: ["0deg", "360deg"],
      },
      { duration: 0.8, ease: "anticipate", delay: 0.2 }
    );
    animate(
      "#imgBox2",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox2_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    // for image box 2 end

    // for image box 3 start
    animate(
      "#imgBox3_mainWrapper",
      {
        rotateY: ["0deg", "360deg"],
      },
      { duration: 0.8, ease: "anticipate", delay: 0.15 }
    );
    animate(
      "#imgBox3",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox3_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    // for image box 3 end

    // for image box 4 start
    animate(
      "#imgBox4_mainWrapper",
      {
        rotateY: ["0deg", "360deg"],
      },
      { duration: 0.8, ease: "anticipate", delay: 0.1 }
    );
    animate(
      "#imgBox4",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox4_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    // for image box 4 end
    // for image box 5 start
    animate(
      "#imgBox5_mainWrapper",
      {
        rotateX: ["0deg", "360deg"],
      },
      { duration: 0.8, ease: "anticipate", delay: 0.25 }
    );
    animate(
      "#imgBox5",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox5_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    // for image box 5 end

    // for image box 6 start
    animate(
      "#imgBox6_mainWrapper",
      {
        rotateY: ["0deg", "360deg"],
      },
      { duration: 0.8, ease: "anticipate", delay: 0.18 }
    );
    animate(
      "#imgBox6",
      {
        zIndex: [30, 10],
        opacity: [1, 0],
      },
      { duration: 0.8, ease: "anticipate" }
    );
    await animate(
      "#imgBox6_2",
      {
        zIndex: [10, 30],
        opacity: [0, 1],
      },
      { duration: 0.8, ease: "anticipate" }
    );
  };

  useEffect(() => {
    // handleAnimationAbout();

    const animateTimer = setInterval(() => {
      setAnimationCounter(animationCounter + 1);

      handleAnimationAbout();
      if (animationCounter === 1) {
        setCurrentImgSet({
          img1: "/AnimationImgSet2-1.png",
          img2: "/AnimationImgSet2-2.png",
          img3: "/AnimationImgSet2-3.png",
          img4: "/AnimationImgSet2-4.png",
          img5: "/AnimationImgSet2-5.png",
          img6: "/AnimationImgSet2-6.png",
        });
        console.log(animationCounter, "in the interval");
      }
    }, 5000);
    if (animationCounter === 2) {
      clearInterval(animateTimer);
    }

    return () => clearInterval(animateTimer);
  }, [isInView, animationCounter]);
  return (
    <>
      <div className="relative w-full 2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[50dvh] 5k:min-h-[40dvh] 4k:min-h-[45dvh] 3k:min-h-[55dvh]  flex justify-center items-center 2xl:py-10 xl:py-10 lg:py-10 md:portrait:py-10 py-10 4k:py-16 ">
        <div className="absolute top-[5%] 2xl:left-[15%] xl:left-[15%] lg:left-[15%] md:portrait:left-[15%] 4k:left-[15%] 3k:left-[15%] right-[15%]">
          <img
            className="2xl:h-14 xl:h-14 lg:h-14 md:portrait:h-14 4k:h-14 3k:h-14 h-8"
            src={AboutShape1}
            alt="AboutShape1"
          />
        </div>
        <div className="absolute top-0 right-0">
          <img
            className="2xl:h-72 xl:h-72 lg:h-72 md:portrait:h-72 4k:h-72 3k:h-72 h-44"
            src={AboutShape2}
            alt="AboutShape1"
          />
        </div>
        <div className="max-w-[1920px] h-full mx-auto relative z-40  flex justify-center items-center py-8">
          <div className="w-[95%]  flex justify-center md:portrait:flex-col 2xl:gap-10 xl:gap-10 lg:gap-10 lg:landscape:gap-4 5k:gap-10 gap-7 flex-col 2xl:flex-row xl:flex-row lg:flex-row">
            <div
              ref={scope}
              className="flex-1 2xl:flex xl:flex lg:flex 5k:flex hidden justify-center items-center md:portrait:hidden"
            >
              <div className="2xl:w-[500px] xl:w-[500px] lg:w-[500px] lg:landscape:w-[400px] md:portrait:w-[500px] 5k:w-[500px] w-[350px] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] lg:landscape:h-[400px] 5k:h-[500px] h-[350px] 4k:landscape:w-[600px] 4k:landscape:h-[600px] 3k:landscape:w-[500px] 3k:landscape:h-[500px] grid grid-cols-4 2xl:gap-3 xl:gap-3 lg:gap-3 5k:gap-3 gap-2 p-2 aboutSection_leftWrapper">
                <div
                  id="imgBox1_mainWrapper"
                  className=" col-span-2 row-span-2 rounded-xl relative overflow-hidden"
                >
                  {/* for first set of of image start*/}
                  <div
                    id="imgBox1"
                    className="absolute z-30 top-0 left-0 w-full h-full  flex justify-center items-center text-xl"
                  >
                    <img
                      src="/AnimateImg1.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox1_2"
                    className="absolute z-10 top-0 left-0 w-full h-full  flex justify-center items-center text-xl"
                  >
                    <img
                      src={currentImgSet.img1}
                      // src="/AnimateImg1-1.png"

                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for first set of of image end*/}

                  {/* for second set of image start */}
                  <div
                    id="imgBoxSet2"
                    className="absolute z-30 top-0 left-0 w-full h-full  flex justify-center items-center text-xl bg-teal-400 opacity-0"
                  >
                    <img
                      src="/AnimateImg1.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBoxSet2_1"
                    className="absolute z-10 top-0 left-0 w-full h-full  flex justify-center items-center text-xl bg-yellow-500 opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-1.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>

                  {/* for second set of image end */}
                </div>
                <div
                  id="imgBox2_mainWrapper"
                  className=" overflow-hidden relative rounded-xl"
                >
                  {/* for first set image box 2 start */}
                  <div
                    id="imgBox2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src="/AnimateImg2.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox2_2"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src={currentImgSet.img2}
                      // src="/AnimateImg2-2.png"

                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for first set image box 2 end */}
                  {/* for second set image box 2 start */}
                  <div
                    id="imgBox2Set2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap bg-teal-500 opacity-0"
                  >
                    <img
                      src="/AnimateImg2.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox2Set2-1"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap bg-yellow-500 opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-2.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for second set image box 2 end */}
                </div>
                <div
                  id="imgBox3_mainWrapper"
                  className="bg-cyan-200  rounded-xl relative overflow-hidden"
                >
                  {/* for set first start */}
                  <div
                    id="imgBox3"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src="/AnimateImg3.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox3_2"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src={currentImgSet.img3}
                      // src="/AnimateImg3-2.png"

                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for set first end */}

                  {/* for set second start */}
                  <div
                    id="imgBox3Set2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimateImg3.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox3Set2-1"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-3.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for set second end */}
                </div>
                <div
                  id="imgBox4_mainWrapper"
                  className="bg-cyan-200 col-span-2 rounded-xl relative overflow-hidden"
                >
                  {/* for set first start */}
                  <div
                    id="imgBox4"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src="/AnimateImg4.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox4_2"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src={currentImgSet.img4}
                      // src="/AnimateImg4-2.png"

                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for set first end */}

                  {/* for set second start */}
                  <div
                    id="imgBox4Set2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimateImg4.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox4Set2-1"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-4.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for set second end */}
                </div>
                <div
                  id="imgBox5_mainWrapper"
                  className="bg-cyan-200 col-span-1 rounded-xl relative overflow-hidden"
                >
                  {/* for first set start */}
                  <div
                    id="imgBox5"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src="/AnimateImg5.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox5_2"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src={currentImgSet.img5}
                      // src="/AnimateImg6-2.png"

                      className="object-fill w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for first set end */}
                  {/* for second set start */}
                  <div
                    id="imgBox5Set2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimateImg5.png"
                      className="object-cover w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox5Set2-1"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-5.png"
                      className="object-fill w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for second set end */}
                </div>

                <div
                  id="imgBox6_mainWrapper"
                  className="bg-cyan-200  col-span-3 rounded-xl relative overflow-hidden"
                >
                  {/* for first set start */}
                  <div
                    id="imgBox6"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src="/AnimateImg6.png"
                      className="object-fill w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox6_2"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap"
                  >
                    <img
                      src={currentImgSet.img6}
                      // src="/AnimateImg5-2.png"

                      className="object-fill object-right w-full h-full"
                      alt="box-image"
                    />
                  </div>
                  {/* for first set end */}
                  {/* for second set start */}
                  <div
                    id="imgBox6Set2"
                    className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimateImg6.png"
                      className="object-fill"
                      alt="box-image"
                    />
                  </div>
                  <div
                    id="imgBox6Set2-1"
                    className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center  flex-wrap opacity-0"
                  >
                    <img
                      src="/AnimationImgSet2-6.png"
                      className="object-fill object-right"
                      alt="box-image"
                    />
                  </div>
                  {/* for second set end */}
                </div>
              </div>
            </div>

            <div className="flex-1   flex 2xl:justify-start xl:justify-start lg:justify-start 5k:justify-start justify-center md:portrait:justify-center">
              <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] lg:landscape:w-[90%] 5k:w-[70%] w-[95%] md:portrait:w-[90%] flex flex-col gap-3">
                <h3 className="font-secondaryFont font-[700] 2xl:text-base xl:text-base lg:text-base md:portrait:text-base 5k:text-base text-[14px] text-secondaryColor">
                  ABOUT US
                </h3>
                <h2 className="text-secondaryColor font-mainFont font-[700] 2xl:text-3xl xl:text-3xl lg:text-3xl lg:landscape:text-2xl md:portrait:text-3xl 5k:text-3xl text-xl">
                  Providing Financial Options
                </h2>
                <p className="text-[#767676] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:portrait:text-[14px] 5k:text-[14px] text-[16px] font-[400]  font-secondaryFont leading-normal">
                  JOptiman Consultancy agency is a team of experienced
                  independent financial professionals united by a shared
                  mission, vision, and core values. We are committed to
                  empowering a diverse clientele across all 50 states of the
                  U.S.A. by providing tailored financial solutions. Leveraging a
                  broad spectrum of financial products from a wide array of
                  trusted companies, we help our clients take control of their
                  financial future.
                </p>

                <div className="flex justify-start items-center bg-mainColor 2xl:h-20 xl:h-20 lg:h-20 lg:landscape:h-[4.5rem] md:portrait:h-20 5k:h-20 4k:landscape:h-24 h-14">
                  <div className="h-full 2xl:w-44 xl:w-44 lg:w-44 lg:landscape:w-32 md:portrait:w-44 5k:w-44 4k:w-32 3k:w-28 w-32 bg-secondaryColor rounded-tr-[50px]"></div>
                  <div className="flex flex-col justify-center items-start border-b-2 border-secondaryColor h-full w-full">
                    <div className=" py-2.5 pl-4">
                      <p className="font-[700] text-[#0C0544] font-secondaryFont 2xl:text-[17px] xl:text-[17px] lg:text-[17px] lg:landscape:text-[14px] 5k:text-[17px] 4k:landscape:text-2xl md:portrait:text-base text-[12px]">
                        Why Join Our team of financial consultants?{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row flex-col justify-center items-center gap-4 mt-4">
                  <div className="flex-1 w-full">
                    <ul className="flex flex-col  gap-3">
                      <li
                        onClick={() => setCurrentInfo(0)}
                        className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                          currentInfo === 0
                            ? "text-[#F08613]"
                            : "text-[#0C0544]"
                        } transition-all duration-200 ease-linear cursor-pointer`}
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25C12.25 0.25 15.75 3.75 15.75 8ZM7.09375 12.125L12.8438 6.375C13.0312 6.1875 13.0312 5.84375 12.8438 5.65625L12.125 4.96875C11.9375 4.75 11.625 4.75 11.4375 4.96875L6.75 9.65625L4.53125 7.46875C4.34375 7.25 4.03125 7.25 3.84375 7.46875L3.125 8.15625C2.9375 8.34375 2.9375 8.6875 3.125 8.875L6.375 12.125C6.5625 12.3125 6.90625 12.3125 7.09375 12.125Z"
                              fill={`${
                                currentInfo === 0 ? "#F08613" : "#0C0544"
                              }`}
                            />
                          </svg>
                        </span>{" "}
                        Innovative Solutions
                      </li>
                      <li
                        onClick={() => setCurrentInfo(1)}
                        className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                          currentInfo === 1
                            ? "text-[#F08613]"
                            : "text-[#0C0544]"
                        } transition-all duration-200 ease-linear cursor-pointer`}
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25C12.25 0.25 15.75 3.75 15.75 8ZM7.09375 12.125L12.8438 6.375C13.0312 6.1875 13.0312 5.84375 12.8438 5.65625L12.125 4.96875C11.9375 4.75 11.625 4.75 11.4375 4.96875L6.75 9.65625L4.53125 7.46875C4.34375 7.25 4.03125 7.25 3.84375 7.46875L3.125 8.15625C2.9375 8.34375 2.9375 8.6875 3.125 8.875L6.375 12.125C6.5625 12.3125 6.90625 12.3125 7.09375 12.125Z"
                              fill={`${
                                currentInfo === 1 ? "#F08613" : "#0C0544"
                              }`}
                            />
                          </svg>
                        </span>{" "}
                        Flexibility of work
                      </li>
                      <li
                        onClick={() => setCurrentInfo(2)}
                        className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                          currentInfo === 2
                            ? "text-[#F08613]"
                            : "text-[#0C0544] "
                        } transition-all duration-200 ease-linear cursor-pointer`}
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25C12.25 0.25 15.75 3.75 15.75 8ZM7.09375 12.125L12.8438 6.375C13.0312 6.1875 13.0312 5.84375 12.8438 5.65625L12.125 4.96875C11.9375 4.75 11.625 4.75 11.4375 4.96875L6.75 9.65625L4.53125 7.46875C4.34375 7.25 4.03125 7.25 3.84375 7.46875L3.125 8.15625C2.9375 8.34375 2.9375 8.6875 3.125 8.875L6.375 12.125C6.5625 12.3125 6.90625 12.3125 7.09375 12.125Z"
                              fill={`${
                                currentInfo === 2 ? "#F08613" : "#0C0544"
                              }`}
                            />
                          </svg>
                        </span>{" "}
                        Competitive Benefits
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#F08613] rounded-md p-3 4k:h-52 5k:h-52 2xl:h-60 h-72">
                    <p className="text-[#767676] font-[400] text-[16px] font-secondaryFont">
                      {infoData[currentInfo]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row flex-col mt-2 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-[90%] 5k:w-[80%] w-full gap-5 2xl:gap-0 xl:gap-0 lg:gap-0 md:portrait:gap-0 5k:gap-0">
                  <button
                    onClick={() => navigate("/about")}
                    className="bg-secondaryColor button text-white px-6 py-2 rounded-lg text-base font-[400] font-secondaryFont w-full 2xl:w-auto xl:w-auto lg:w-auto md:portrait:w-auto 5k:w-auto    "
                  >
                    Discover More
                  </button>
                  <div className="flex justify-center items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-[#333D54]  flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_582_122)">
                          <path
                            d="M4.08203 13.3008C4.57682 13.8867 5.09115 14.4401 5.625 14.9609C6.17188 15.4948 6.73828 15.9928 7.32422 16.4551C7.91016 16.9173 8.52214 17.3438 9.16016 17.7344C9.79818 18.138 10.4557 18.5026 11.1328 18.8281C11.6536 19.0755 12.2493 19.3197 12.9199 19.5605C13.5905 19.8014 14.3099 19.9479 15.0781 20C15.1302 20 15.179 20 15.2246 20C15.2702 20 15.319 20 15.3711 20C15.8789 20 16.3444 19.9089 16.7676 19.7266C17.1908 19.5443 17.5716 19.2708 17.9102 18.9062C17.9102 18.9062 17.9102 18.903 17.9102 18.8965C17.9102 18.89 17.9102 18.8867 17.9102 18.8867C18.0404 18.7435 18.1706 18.6035 18.3008 18.4668C18.431 18.3301 18.5677 18.1966 18.7109 18.0664C18.8151 17.9753 18.916 17.8809 19.0137 17.7832C19.1113 17.6855 19.2057 17.5846 19.2969 17.4805C19.7396 17.0247 19.9609 16.5267 19.9609 15.9863C19.9609 15.446 19.7396 14.9479 19.2969 14.4922L16.7969 12.0117C16.5885 11.7904 16.3607 11.6243 16.1133 11.5137C15.8659 11.403 15.612 11.3477 15.3516 11.3477C15.0781 11.3477 14.8177 11.403 14.5703 11.5137C14.3229 11.6243 14.0885 11.7904 13.8672 12.0117L12.3828 13.4961C12.3177 13.457 12.2493 13.418 12.1777 13.3789C12.1061 13.3398 12.0378 13.3073 11.9727 13.2812C11.8945 13.2292 11.8164 13.1836 11.7383 13.1445C11.6602 13.1055 11.5885 13.0664 11.5234 13.0273C10.8464 12.5977 10.1986 12.0996 9.58008 11.5332C8.96159 10.9668 8.35938 10.3255 7.77344 9.60938C7.47396 9.23177 7.22005 8.88021 7.01172 8.55469C6.80339 8.22917 6.63411 7.91016 6.50391 7.59766C6.69922 7.41536 6.88802 7.23307 7.07031 7.05078C7.2526 6.86849 7.42839 6.6862 7.59766 6.50391C7.66276 6.4388 7.72786 6.3737 7.79297 6.30859C7.85807 6.24349 7.92318 6.17839 7.98828 6.11328C8.20964 5.89193 8.37891 5.6543 8.49609 5.40039C8.61328 5.14648 8.67188 4.88932 8.67188 4.62891C8.67188 4.36849 8.61328 4.11133 8.49609 3.85742C8.37891 3.60352 8.20964 3.36588 7.98828 3.14453L6.75781 1.89453C6.67969 1.82943 6.60482 1.76107 6.5332 1.68945C6.46159 1.61784 6.39323 1.54297 6.32812 1.46484C6.19792 1.33463 6.0612 1.19792 5.91797 1.05469C5.77474 0.911459 5.63151 0.77474 5.48828 0.644531C5.27995 0.436197 5.05208 0.276693 4.80469 0.166016C4.55729 0.0553379 4.29688 0 4.02344 0C3.76302 0 3.50911 0.0553379 3.26172 0.166016C3.01432 0.276693 2.77995 0.436197 2.55859 0.644531L0.996094 2.1875C0.722656 2.47396 0.504557 2.78646 0.341797 3.125C0.179036 3.46354 0.0846354 3.83463 0.0585938 4.23828C0.0195312 4.73307 0.0455729 5.25065 0.136719 5.79102C0.227865 6.33138 0.390625 6.91406 0.625 7.53906C0.807292 8.03385 1.01562 8.52214 1.25 9.00391C1.47135 9.47266 1.72526 9.94466 2.01172 10.4199C2.29818 10.8952 2.61068 11.3737 2.94922 11.8555C3.28776 12.3242 3.66536 12.806 4.08203 13.3008ZM1.07422 4.31641C1.10026 4.04297 1.16536 3.78906 1.26953 3.55469C1.3737 3.32031 1.52344 3.10547 1.71875 2.91016L3.26172 1.36719C3.39193 1.25 3.51888 1.16211 3.64258 1.10352C3.76628 1.04492 3.89323 1.01562 4.02344 1.01562C4.15365 1.01562 4.2806 1.04492 4.4043 1.10352C4.52799 1.16211 4.65495 1.25 4.78516 1.36719C4.91536 1.4974 5.04883 1.63086 5.18555 1.76758C5.32227 1.9043 5.46224 2.04427 5.60547 2.1875C5.67057 2.26562 5.73893 2.34049 5.81055 2.41211C5.88216 2.48372 5.95703 2.55859 6.03516 2.63672L7.26562 3.86719C7.39583 3.9974 7.49349 4.1276 7.55859 4.25781C7.6237 4.38802 7.65625 4.51172 7.65625 4.62891C7.65625 4.75911 7.6237 4.88932 7.55859 5.01953C7.49349 5.14974 7.39583 5.27995 7.26562 5.41016C7.20052 5.47526 7.13542 5.54036 7.07031 5.60547C7.00521 5.67057 6.9401 5.73568 6.875 5.80078C6.67969 5.99609 6.49089 6.1849 6.30859 6.36719C6.1263 6.54948 5.9375 6.73177 5.74219 6.91406C5.72917 6.91406 5.72266 6.91732 5.72266 6.92383C5.72266 6.93034 5.71615 6.93359 5.70312 6.93359C5.53385 7.10286 5.44922 7.26888 5.44922 7.43164C5.44922 7.5944 5.46875 7.73438 5.50781 7.85156C5.50781 7.86458 5.50781 7.87109 5.50781 7.87109C5.50781 7.87109 5.50781 7.8776 5.50781 7.89062C5.67708 8.26823 5.87565 8.64909 6.10352 9.0332C6.33138 9.41732 6.62109 9.82422 6.97266 10.2539C7.59766 11.0221 8.23893 11.7057 8.89648 12.3047C9.55404 12.9036 10.2474 13.431 10.9766 13.8867C11.0547 13.9518 11.1426 14.0072 11.2402 14.0527C11.3379 14.0983 11.4323 14.1471 11.5234 14.1992C11.6016 14.2383 11.6797 14.2773 11.7578 14.3164C11.8359 14.3555 11.9076 14.3945 11.9727 14.4336C11.9857 14.4466 11.9954 14.4531 12.002 14.4531C12.0085 14.4531 12.0117 14.4596 12.0117 14.4727C12.0768 14.4987 12.1452 14.5215 12.2168 14.541C12.2884 14.5605 12.3568 14.5703 12.4219 14.5703C12.5911 14.5703 12.7279 14.5312 12.832 14.4531C12.9362 14.375 13.0013 14.3164 13.0273 14.2773L14.5898 12.7344C14.707 12.6172 14.8307 12.526 14.9609 12.4609C15.0911 12.3958 15.2214 12.3633 15.3516 12.3633C15.5078 12.3633 15.6478 12.4023 15.7715 12.4805C15.8952 12.5586 15.9961 12.6432 16.0742 12.7344L18.5742 15.2344C18.8216 15.4818 18.9453 15.7389 18.9453 16.0059C18.9453 16.2728 18.8151 16.5365 18.5547 16.7969C18.4766 16.888 18.3919 16.9792 18.3008 17.0703C18.2096 17.1615 18.112 17.2526 18.0078 17.3438C17.8646 17.487 17.7181 17.6302 17.5684 17.7734C17.4186 17.9167 17.2786 18.0729 17.1484 18.2422C16.9141 18.5026 16.6504 18.6947 16.3574 18.8184C16.0645 18.9421 15.7357 19.0039 15.3711 19.0039C15.332 19.0039 15.2962 19.0007 15.2637 18.9941C15.2311 18.9876 15.1953 18.9844 15.1562 18.9844C14.4792 18.9453 13.8314 18.8151 13.2129 18.5938C12.5944 18.3724 12.0508 18.1445 11.582 17.9102C10.931 17.6107 10.306 17.2721 9.70703 16.8945C9.10807 16.5169 8.52539 16.1068 7.95898 15.6641C7.39258 15.2214 6.85547 14.7526 6.34766 14.2578C5.82682 13.75 5.33203 13.2161 4.86328 12.6562C4.09505 11.7318 3.44401 10.8236 2.91016 9.93164C2.3763 9.03971 1.93359 8.13151 1.58203 7.20703C1.3737 6.63411 1.22721 6.11328 1.14258 5.64453C1.05794 5.17578 1.03516 4.73307 1.07422 4.31641Z"
                            fill="#0C0544"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_582_122">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="matrix(1 0 0 -1 0 20)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-start gap-1">
                      <p className="text-[#767676] text-[14px] font-[400] font-secondaryFont">
                        Call Us Free
                      </p>
                      <Link
                        to="tel:+1 (888) 491-7757"
                        className="text-[#040B1E] font-[700] font-secondaryFont text-[15px]"
                      >
                        +1 (888) 491-7757
                      </Link>
                    </div>
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
