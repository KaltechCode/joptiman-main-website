import React, { useState } from "react";

export const WhyChooseus = () => {
  const [currentInfo1, setCurrentInfo1] = useState(0);

  const infoData1 = [
    `We are committed to fostering the professional growth of our consultants. With continuous learning opportunities, access to a wealth of resources, and mentorship from experienced industry leaders, you'll be empowered to expand your skills and expertise. Our agency provides a clear career progression path, ensuring that you can evolve within the organization and reach your full potential as a professional financial consultant.`,
    `JOptiman is at the forefront of the financial services agency, leveraging cutting-edge technology and data-driven insights to provide personalized, high-impact financial solutions. By joining the team, you'll work with advanced tools and methodologies that allow you to create comprehensive, tailored strategies for clients—from investment management, health insurance, and annuities to financial planning. Your expertise will be part of a forward-thinking team focused on continuously evolving to meet the dynamic financial needs of clients.`,
    `At JOptiman, the client’s success is always the top priority. We thrive on building long-term relationships, offering transparent, thoughtful, and reliable financial advice. Joining our team means becoming part of a community that is committed to making a tangible difference in the lives of our clients, whether they're individuals, families, or businesses. Your work will have a real impact on shaping their financial futures.`,
    `We value collaboration and believe that collective intelligence leads to superior results. As part of the team, you’ll work closely with like-minded professionals who are passionate about their craft. The agency’s culture is one of support and camaraderie, where knowledge-sharing and teamwork are essential for solving complex financial challenges. Whether you're learning from peers or contributing to team-driven projects, you'll always have the resources and encouragement needed to thrive.`,
    `We understand the importance of work-life balance. The agency offers flexible work arrangements that allow you to balance your career and personal life effectively. JOptiman creates an environment where you can thrive both professionally and personally.`,
    `We offer a highly competitive compensation packages, including performance-based incentives and a range of benefits designed to support our agents.`,
    `We recognize the importance of diversity and inclusion in creating a dynamic, innovative, and effective team. We actively fosters a diverse work environment where individuals of all backgrounds, experiences, and perspectives are valued. Joining JOptiman agency means becoming part of a team that celebrates diversity and works together to drive success in a collaborative and inclusive environment.`,
    `Our agency is led by a team of seasoned financial experts who bring decades of industry experience to the table. Our vision is built around integrity, professionalism, and a commitment to excellence in all aspects of financial consulting. By joining us, you’ll have the opportunity to learn and collaborate with leaders who are passionate about their work and dedicated to the success of both our clients and our agents.`,
    `As a financial consultant at JOptiman, you will tackle some of the most critical financial challenges faced by individuals, families, and businesses today. From guiding clients through complex investments and retirement planning to offering insights on health insurance, life insurance annuities, and tax strategies, your work will create a meaningful and lasting impact. Your expertise won’t just benefit your clients—it will contribute to shaping the broader financial community.`,
    `JOptiman is a growing independent financial agency offering expanding opportunities across diverse sectors and markets. As part of our team of financial consultants, you'll have the chance to build your professional network, work with a diverse clientele, and deepen your understanding of financial markets and strategies. With the agency's rapid growth, your career potential is boundless.`,
  ];

  return (
    <div className="2xl:min-h-[100dvh] xl:min-h-[100dvh] lg:min-h-[100dvh] md:portrait:min-h-[90dvh] 4k:min-h-[70dvh] 3k:min-h-[75dvh] flex justify-start items-center 2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-16">
          <div className="flex-1 w-full flex flex-col gap-10">
            <div className="w-[100%]">
              <div className="flex justify-start items-center bg-mainColor 2xl:h-20 xl:h-20 lg:h-20 lg:landscape:h-[4.5rem] md:portrait:h-20 5k:h-20 4k:landscape:h-24 h-14">
                <div className="h-full 2xl:w-40 xl:w-40 lg:w-40 lg:landscape:w-24 md:portrait:w-44 5k:w-44 4k:w-32 3k:w-28 w-32 bg-secondaryColor rounded-tr-[50px]"></div>
                <div className="flex flex-col justify-center items-center border-b-2 border-secondaryColor h-full w-full">
                  <div className=" py-2.5">
                    <p className="font-[700] text-[#0C0544]  2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl 4k:text-3xl 3k:text-3xl text-xl font-mainFont">
                      Why Join Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6">
              <p className="font-[400] text-paraColor font-secondaryFont text-base">
                Joining JOptiman Consultancy’s agency means becoming part of an
                innovative, client-centric team that is redefining the landscape
                of financial consulting. Whether you're an experienced
                professional or a newcomer eager to start a rewarding career in
                finance, JOptiman consultancy offers an environment where
                growth, excellence, and impact come together. Here are several
                reasons why you should consider joining JOptiman: JOptiman is
                committed to fostering the professional growth of its
                consultants. With continuous learning opportunities, access to a
                wealth of resources, and mentorship from experienced industry
                leaders, you'll be empowered to expand your skills and
                expertise. The firm provides a clear career progression path,
                ensuring that you can evolve within the organization and reach
                your full potential as a financial consultant.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full  flex  justify-center gap-16">
            <div className="flex-1 flex  justify-center">
              <div className="flex-1 flex 2xl:flex-row xl:flex-row lg:flex-row lg:portrait:flex-col 4k:flex-row 3k:flex-row md:portrait:flex-row flex-col justify-center  rounded-lg customShadowCoreValue overflow-hidden">
                <div className="flex-1 w-full bg-secondaryColor p-8">
                  <ul className="flex flex-col  gap-3 p-4 rounded-lg">
                    <li
                      onClick={() => setCurrentInfo1(0)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 0 ? "text-[#F08613]" : "text-white"
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
                              currentInfo1 === 0 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Professional Growth
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(1)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 1 ? "text-[#F08613]" : "text-white"
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
                              currentInfo1 === 1 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Innovative Solutions
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(2)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 2
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 2 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Client Centric Culture
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(3)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 3
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 3 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Collaborative Team
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(4)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 4
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 4 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Flexibility of Work
                    </li>

                    <li
                      onClick={() => setCurrentInfo1(5)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 5 ? "text-[#F08613]" : "text-white"
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
                              currentInfo1 === 5 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Competitive Benefits
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(6)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 6 ? "text-[#F08613]" : "text-white"
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
                              currentInfo1 === 6 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Commitment to Diversity
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(7)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 7
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 7 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Leadership and Vision
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(8)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 8
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 8 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      Impactful Work
                    </li>
                    <li
                      onClick={() => setCurrentInfo1(9)}
                      className={`flex justify-start items-center gap-4 font-[700] font-mainFont 2xl:text-base xl:text-base lg:text-base lg:landscape:text-[14px] md:portrait:text-base text-base  ${
                        currentInfo1 === 9
                          ? "text-[#F08613]"
                          : "text-white "
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
                              currentInfo1 === 9 ? "#F08613" : "#fff"
                            }`}
                          />
                        </svg>
                      </span>{" "}
                      A Growing Firm
                    </li>
                  </ul>
                </div>
                <div className="flex-1  borde border-[#F08613 rounded-md p-6 ">
                  <p className="text-[#767676] font-[400] text-[16px] font-secondaryFont">
                    {infoData1[currentInfo1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
