import React, { useEffect, useState } from "react";
import TeamImg1 from "../../../assets/TeamPic1.png";
import TeamImg2 from "../../../assets/TeamPic2.png";
import TeamImg3 from "../../../assets/TeamPic3.png";
import TeamImg4 from "../../../assets/TeamPic4.png";
import TeamImg5 from "../../../assets/TeamPic5.png";
import TeamImg6 from "../../../assets/TeamPic6.png";
import TeamImg7 from "../../../assets/TeamPic7.png";
import TeamImg8 from "../../../assets/TeamPic8.webp";
import OurTeamIcon from "../../../assets/OurTeamIcon.png";
import { X } from "lucide-react";

const teamList = [
  {
    img: TeamImg3,
    name: "Ashley Jenkins",
    position: "Director",
    review: `At JOptiman, we're more than an agency; we're a family dedicated to helping others build a lasting legacy. Planting the seed of wealth is at the heart of everything we do, as we work to make a difference in lives and families within our communities. Our top leaders are humble, mission-driven, and genuinely invested in every agent’s success. With a unique growth structure and a warm, welcoming environment, we’re here to empower each other and create a future that’s rich not only in prosperity but in purpose. Together, we're building a brighter tomorrow for ourselves, our clients, and the generations to come.`,
  },
  {
    img: TeamImg1,
    name: "Dr. Ben Jikong",
    position: "President",
    review: `Our consultants help people with a sense of inclusive stewardship, a well-cultivated self-awareness, and love. We value diversity and faith, as we create a loving environment for our consultants and clients. When our clients succeed and can go to bed with a calm sense of peace of mind because they have set their lives, legacy, and family finances in order, we take pride in that. Financial security means having enough money to cover your expenses, emergencies, retirement, and leaving a legacy for your loved ones. Just image: What if money were not an issue to you? The point we are making here is that if you did not come from a wealthy family, wealth can come from you. Together we will build generational wealth.`,
  },
  {
    img: TeamImg2,
    name: "Mercy Jikong ",
    position: "Vice President",
    review: `Our consultants help people with a sense of inclusive stewardship, a well-cultivated self-awareness, and love. We value diversity and faith, as we create a loving environment for our consultants and clients. When our clients succeed and can go to bed with a calm sense of peace of mind because they have set their lives, legacy, and family finances in order, we take pride in that. Financial security means having enough money to cover your expenses, emergencies, retirement, and leaving a legacy for your loved ones. Just image: What if money were not an issue to you? The point we are making here is that if you did not come from a wealthy family, wealth can come from you. Together we will build generational wealth.`,
  },
  {
    img: TeamImg4,
    name: "Sharlene Tullao",
    position: "CEO of Company",
    review: `I’d like to sincerely express my appreciation for JOptiman Consultancy and the opportunity to be part of this incredible team. The professionalism, innovative solutions, and commitment to client success demonstrated by everyone truly set the foundation for our achievements. I look forward to our continued growth and the positive impact we can make in the communities we serve.`,
  },
  {
    img: TeamImg5,
    name: "Mary Adenekan",
    position: "Designer",
    review: `I have been a financial consultant for 2 plus years and continue to learn and grow with the most amazing team here at JOptiman Consultancy.`,
  },
  {
    img: TeamImg6,
    name: "Gilbert Fang",
    position: "Insurance Manager",
    review: `At JOptiman Consultancy, you are home away from home. We are blessed with the best leadership in the industry. They invest so much time in training the agents. Thus, bringing the best out the best in them by sharpening their managerial/leadership skills, and above all shaping their moral judgements. JOptiman is contracted with the topmost trusted insurance companies. No matter where someone is on their journey or what their priorities are, our team of Professionals can help them develop the freedom and confidence to live the life they want.

`,
  },
  {
    img: TeamImg7,
    name: "Abisoye A. Adewunmi",
    position: "Insurance Manager",
    review: `Looking at the Insurance Industry as the best place to build a lifetime business after going through some of the other industries and having a very good time, it all stands as a place to acquire knowledge. I started as a public adjuster and, in 2023, I moved on to Life, Health, and Annuity, licensed in the state of Virginia. Knowing what I wanted in the insurance industry, I had a brief stay at some agencies. Since I could not get my place in these agencies, my search continued until I was introduced by a friend to the JOptiman Consultancy Agency LLC. Here I found what I was looking for to build my business with great support and with good people. The tradition, the culture, and the atmosphere of doing business the right way are what I was introduced to in this agency. You will always receive a loving welcome from every member and be introduced to a culture of support and mutual respect from the very first day.With this great support, I became a director in the agency – an opportunity one does not get easily in another agency. Unlike other agencies that may limit growth potential, JOptiman fosters an environment where you can succeed and develop your business with genuine encouragement. Because of these opportunities and their great support, I am looking forward to my second year in the agency with great expectations for my business.`,
  },
  {
    img: TeamImg8,
    name: "Peyton Cimino",
    position: "Insurance Manager",
    review: `I am thrilled at the opportunity to help those secure their own futures and their family's livelihood. Working with JOptiman helps me to provide sound financial solutions to individuals and families.`,
  },
];

export const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullReview, setShowFullReview] = useState({
    state: false,
    id: 0,
  });
  const handlePrev = () => {
    setCurrentIndex((curr) => (curr === 0 ? teamList.length - 1 : curr - 1));
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) => (curr === teamList.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="2xl:min-h-[100dvh] 4k:min-h-[80dvh] 3k:min-h-[85dvh] xl:min-h-[90dvh] lg:min-h-[90dvh] md:portrait:min-h-[90dvh] flex justify-start items-center 2xl:py-28 4k:py-28 3k:py-28 xl:py-28 md:portrait:py-28 py-20 bg-[#F5F5F8]">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[80%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col  bg-[#040B1E] text-white 2xl:p-8 xl:p-8 4k:p-16 3k:p-14 md:portrait:p-8 p-4 rounded-lg">
            <div className="mx-auto 2xl:w-[65%] xl:w-[65%] lg:w-[75%] md:portrait:w-[85%] 4k:w-[65%] 3k:w-[65%] w-[95%] flex flex-col justify-center items-center gap-8">
            {/*  <h4 className="text-[#F08613] font-secondaryFont font-[800] 2xl:text-base xl:text-base lg:text-base 3k:text-base 4k:text-base md:portrait:text-base text-sm uppercase">
                OUR TEAM MEMBER
              </h4>*/}
              <div>
                <h2 className="font-mainFont font-[700] 2xl:text-4xl xl:text-4xl lg:text-3xl md:portrait:text-4xl 4k:text-4xl 3k:text-4xl text-2xl text-center">
                  Our Talented Team Members Behind JOptiman Consultancy
                </h2>
              </div>
            </div>

            <div className="flex justify-start 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-3 4k:gap-5 3k:gap-5 gap-3.5 overflow-x-auto my-16">
              {teamList.map((team, id) => (
                <div
                  style={{
                    transform: `translateX(-${currentIndex * 105}%) ${
                      currentIndex + 1 == id ? "scale(1.04)" : "scale(.9)"
                    } `,
                  }}
                  key={id}
                  className={`2xl:w-80 4k:w-[26rem] 3k:w-[26rem] xl:w-[22rem] lg:w-[21rem] md:portrait:w-[14rem] w-[22rem] flex-shrink-0  transition-all  duration-700 ease-in-out`}
                >
                  <div className="w-full ">
                    <img
                      src={team.img}
                      alt="TeamImg1"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-white relative flex justify-between items-center p-2">
                    <div className="max-w-[70%]">
                      <h3 className="font-mainFont font-[700] text-lg text-[#040B1E]">
                        {team.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => {
                        setShowFullReview({
                          state: true,
                          id,
                        });
                      }}
                      className="font-mainFont font-[700] text-[#040B1E] text-sm"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showFullReview.state && (
        <div className="bg-[#000]/10 backdrop-blur-md w-full h-[100dvh] fixed z-50 top-0 left-0 flex 2xl:justify-center xl:justify-center lg:justify-center md:portrait:justify-center 4k:justify-center 3k:justify-center  justify-start 2xl:items-center xl:items-center lg:items-center md:portrait:items-center 4k:items-center 3k:items-center items-start transition-all duration-300 ease-in-out overflow-y-auto py-10">
          <div className="max-w-[1920px] w-full mx-auto flex justify-center items-center">
            <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:portrait:w-[80%] 4k:w-[70%] 3k:w-[70%] w-[90%] bg-white rounded-md p-8 relative">
              <button
                onClick={() =>
                  setShowFullReview({
                    state: false,
                    id: null,
                  })
                }
                className="h-9 w-9 text-white border-none outline-none top-2 rounded-full absolute right-2 bg-secondaryColor flex justify-center items-center"
              >
                <X />
              </button>
              <h3 className="text-2xl font-mainFont font-[700]">
                {teamList[showFullReview.id].name}
              </h3>
              <p className="font-secondaryFont font-[500] text-base my-6">
                {teamList[showFullReview.id].review}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
