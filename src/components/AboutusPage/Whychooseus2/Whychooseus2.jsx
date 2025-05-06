import React, { useState } from "react";
import AboutWhychooseusBg1 from "../../../assets/AboutWhychooseusBg1.png";
import AboutWhychooseusBg2 from "../../../assets/AboutWhychooseBg2.png";

const items = [
  {
    title: "1. Tailored Financial Strategies with a Personal Touch",
    smallInfo: `JOptiman Consultancy goes beyond the generic approach of many financial services companies.`,
    content: `We go beyond the generic approach of many financial services companies. Each client receives a personalized strategy crafted to fit their specific goals, whether it's securing the right insurance coverage, planning for retirement, or growing wealth. By focusing on customization, JOptiman ensures that every recommendation aligns perfectly with clients’ needs and aspirations.`,
  },
  {
    title: "2. Comprehensive and Integrated Services",
    smallInfo: `Unlike companies that focus on either insurance or financial services, JOptiman offers a fully integrated approach. `,
    content: `Unlike companies that focus on either insurance or financial services, we offer a fully integrated approach. This means clients can handle all their financial planning needs—such as insurance, investment planning, retirement strategies, and risk management—in one place. This streamlined approach not only saves time but ensures that every aspect of a client’s financial plan works in harmony.`,
  },
  {
    title: "3. Ethics-Driven, Transparent Guidance",
    smallInfo: `At JOptiman Consultancy, integrity is not just a value—it’s the foundation of every client interaction.`,
    content: `At JOptiman Consultancy, integrity is not just a value—it’s the foundation of every client interaction. Our team prioritizes transparency, offering clear explanations and empower our clients with knowledge to make informed decisions. With us, there are no hidden fees, no unnecessary policies, and no pressure—just ethical, client-first service.`,
  },
  {
    title: "4. A Team of Experts with a Client-Centric Approach",
    smallInfo: `JOptiman’s team combines deep expertise in insurance and financial services with a genuine commitment to helping clients succeed.`,
    content: `Our team combines deep expertise in insurance and financial services with a genuine commitment to helping our clients succeed. What sets us apart is our ability to simplify complex financial concepts while maintaining a supportive, relationship-focused approach. Our clients aren’t just accounts—they’re valued partners in a shared journey towards financial security and success.`,
  },
];

export const Whychooseus2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="2xl:min-h-[90dvh] xl:min-h-[90dvh] lg:min-h-[90dvh] md:portrait:min-h-[90dvh] min-h-[100dvh] bg-[#F4F4F4] 4k:min-h-[80dvh] 3k:min-h-[85dvh] flex justify-start items-center 2xl:py-24 xl:py-24  4k:xl:py-28 3k:xl:py-28 md:portrait:py-28 lg:py-28 py-20 relative">
        <div className="absolute top-0 left-0 w-[60%] h-full">
          <img className="w-full h-full opacity-20" src={AboutWhychooseusBg1} />
        </div>
        <div className="absolute top-0 right-0 w-[30%] h-auto">
          <img className="w-full h-full" src={AboutWhychooseusBg2} />
        </div>
        <div className="max-w-[1920px] mx-auto w-full relative z-20">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8 border border-[#cdcdcd] customShadow rounded-lg 2xl:p-10 xl:p-10 lg:p-10 md:portrait:p-10 4k:p-10 3k:p-10 px-3 py-5">
            <div className="mx-auto 2xl:w-[45%] xl:w-[45%] lg:w-[45%] 4k:w-[45%] 3k:w-[45%] w-full flex flex-col justify-center items-center gap-8">
              <h4 className="text-[#F08613] font-secondaryFont font-[800] text-center 2xl:text-base xl:text-base lg:text-base 3k:text-base 4k:text-base md:portrait:text-base text-sm uppercase">
                WHY CHOOSE Joptiman consultancy
              </h4>
              <div>
                <h2 className="font-mainFont font-[700] 2xl:text-4xl xl:text-4xl lg:text-3xl md:portrait:text-4xl 4k:text-4xl 3k:text-4xl text-2xl  text-center">
                  What Makes Us Different From Others
                </h2>
              </div>
            </div>

            <div>
              <div className="w-full flex flex-col gap-4">
                {items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    index={index}
                    title={item.title}
                    smallInfo={item.smallInfo}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AccordionItem = ({
  title,
  smallInfo,
  content,
  isOpen,
  index,
  onToggle,
}) => {
  return (
    <div className="bg-transparent">
      <button
        style={{
          background: isOpen ? "#0C0544" : "#F4F4F4",
          color: isOpen ? "#fff" : "#0C0544",
        }}
        className="flex flex-col justify-start items-start w-full gap-4 py-4 px-6 text-left  focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <div className="flex justify-between items-center w-full">
          <span
            style={{
              color: isOpen ? "#fff" : "#0C0544",
            }}
            className="font-[700] font-mainFont 2xl:text-xl xl:text-xl lg:text-xl md:portrait:text-xl 3k:text-xl 4k:text-xl text-sm"
          >
            {title}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p className="text-sm line-clamp-1">{smallInfo}</p>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-linear ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-[#F4F4F4]">
          <p className="text-[#767676] font-secondaryFont font-[400] text-[16px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
