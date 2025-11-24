import React, { useState } from "react";
import "./FAQ.css";
import FAQImg from "../../../assets/FAQImg.png";
import FAQImg2 from "../../../assets/FAQImg2.png";
import FAQImg3 from "../../../assets/FAQImg3.png";

const items = [
  {
    title: "What are the best financial options to consider?",
    content:
      "There is no one-size-fits-all solution. Your options will be determined by your needs. After a consultation session, you will have the opportunity to design options with the consultant that best meet your requirements.",
  },
  {
    title: "How much does JOptiman Consultants charge?",
    content: "You do not need to pay JOptiman Consultants for assistance.",
  },
  {
    title: "How can I join JOptiman Consultancy Agency?",
    content: `
    <b>Our process is simple:</b>
    <ul>
      - You must have legal work authorization to work with JOptiman. <br />
      - Click on 'Join Our Team' and complete the registration form. <br />
      - Pay your registration and administrative fee of $50.<br />
      - Welcome to the team!
    </ul>
  `,
  },

  {
    title: "What is the fee for joining JOptiman Consultancy?",
    content:
      "The registration and administrative processing fee to access our working portal is $50.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="py-8 5k:min-h-[min(25dvh,768px)]  2xl:min-h-[min(90dvh,1020px)] 4k:min-h-[min(50dvh,920px)] 3k:min-h-[min(50dvh,920px)] xl:min-h-[min(100dvh,920px)] lg:min-h-[min(60dvh,920px)] md:portrait:min-h-[min(35dvh,720px)] flex justify-center items-center">
      <div className="max-w-[1920px] mx-auto relative z-20">
        <div className="w-[95%] mx-auto flex justify-center gap-4">
          <div className="flex-1 2xl:flex xl:flex lg:flex 5k:flex justify-center items-center md:portrait:hidden hidden">
            <div className="w-[80%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src={FAQImg2}
                  alt="FAQImg2"
                />
              </div>
              <div className="h-96 relative">
                <img
                  className="h-full w-full object-contain"
                  src={FAQImg3}
                  alt="FAQImg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] 5k:w-[70%] md:portrait:w-[80%] md:portrait:mx-auto flex flex-col gap-5">
              <h2 className="text-[#040B1E] font-[700] font-mainFont 2xl:text-4xl xl:text-4xl lg:text-3xl md:portrait:text-3xl 5k:text-4xl text-xl">
                Frequently asked questions
              </h2>
              <div className="w-full flex flex-col gap-4">
                {items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    index={index}
                    title={item.title}
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
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, index, onToggle }) => {
  return (
    <div className="bg-transparent customShadowCoreValue ">
      <button
        style={{
          background: isOpen ? "#0C0544" : "#F4F4F4",
          color: isOpen ? "#fff" : "#0C0544",
        }}
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <span
          style={{
            color: isOpen ? "#fff" : "#0C0544",
          }}
          className="font-[700] font-mainFont text-[15px]"
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
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-linear ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-[#F4F4F4]">
          {/* ✅ Render HTML content correctly */}
          <div
            className="text-[#767676] font-secondaryFont font-[400] text-[16px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};
