import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import TestimonialsBgImg from "../../../assets/TestimonialsBgImg.png";
import QuoteIcon from "../../../assets/quote-icon-1.png";
import { X } from "lucide-react";

export const testimonialData = [
  {
    image: QuoteIcon,
    name: `Sarah T.`,
    review: `“Working with JOptiman Consultancy was a game-changer for me and my family. I’d been putting off getting life insurance for years, but after sitting down with their team, I felt truly understood and confident in my decisions. They took the time to explain all my options in simple terms, addressing all my concerns. I never realized how much I needed to protect my loved ones until JOptiman made it so easy to see the bigger picture. Now, I can sleep easy knowing my family is taken care of, no matter what happens.”`,
  },
  {
    image: QuoteIcon,
    name: `David H.`,
    review: `“I had no idea where to start when it came to planning for retirement, but JOptiman Consultancy made it so much easier. Their annuity services helped me secure a steady stream of income for the future, which was exactly what I was looking for. The team was incredibly patient in explaining the different options, and they customized a plan that fits my retirement goals perfectly. I feel far more secure about my financial future now, thanks to JOptiman’s expert guidance.”`,
  },
  {
    image: QuoteIcon,
    name: `Anthony Jenkins`,
    review: `“Ashley was incredibly patient and thorough when assessing my retirement needs. She took the time to educate me, carefully examining the performance of my current retirement accounts and pointing out areas of concern. I was amazed to learn how much money was slipping away in fees and taxes, but Ashley’s genuine care and expertise put me at ease. She came back with personalized solutions to minimize taxes, eliminate risk, and greatly reduce fees—ensuring my retirement funds would grow safely. At 67, knowing my retirement is secure and can provide steady income means everything. Ashley made me feel confident and supported every step of the way, and I can’t thank her enough for her dedication.”`,
  },
  {
    image: QuoteIcon,
    name: `Amy Johnson, `,
    review: `“My husband and I are so grateful for Ashley’s guidance in setting up Indexed Universal Life policies for our family. She helped us design a plan to not only secure our future but also build a legacy for generations to come. My husband decided to max-fund our policies over a shorter period, so we’ll only be paying for 8 years on his policy and 12 years on mine. Despite coming from a healthy family, we don’t come from a very wealthy one, so this was our chance to start a wealth legacy for our children and future generations.Ashley walked us through every detail, showing us how this plan would offer tax-free growth, living benefits, and a guaranteed safety net for our family all with no downside risk. Knowing our children’s futures are secure and that they’ll have access to funds for college, retirement, and beyond is incredibly reassuring. Ashley made this all feel achievable, and we’re excited to keep our wealth-building journey going from here. Thank you, Ashley, for helping us start something meaningful and lasting.”`,
  },
  {
    image: QuoteIcon,
    name: `Ryan Cruz`,
    review: `“Sharlene did a great job of understanding our situation, presenting multiple options, being informative and pros/cons of said options, and handling the tons of questions we had over the course of multiple back-and-forth sessions. We ultimately landed with an option for our situation that we were good with, and that includes us scouting around other companies or providers. She was knowledgeable, knew her stuff, and got everything processed in a timely manner. While others can be extremely pushy and try to slide their clients in a particular direction, Sharlene was balanced and pragmatic, which is something I really appreciated, and placed a high value on. Kudos!”`,
  },
  {
    image: QuoteIcon,
    name: `Veronica Verdugo`,
    review: `“Sharlene was great to work with and is always available to take my questions. Her knowledge and expertise were greatly appreciated, I would definitely recommend her services.”`,
  },
  {
    image: QuoteIcon,
    name: `Dr. Clarisa K`,
    review: `“With less than 10 years to retire, I often struggled with balancing my day-to-day expenses while planning for my retirement days. These struggles kept me up at night and I wondered if I was ever going to afford the same lifestyle at retirement. Then, I got introduced to Gilbert by my friends (couple) who retired from the military 2 years ago to talk with Gilbert, a Licensed Financial Professionals. Gilbert helped show them financial options to boost their retirement income and long-term care needs 2 years ago. During our initial virtual meet with Gilbert, I could instantly tell that he was someone who deeply cares about helping his community. He was quite respectful, empathetic, and wow. what a keen listener he is. He made me felt like family and I was able to openly discuss my situation without holding back. Gilbert introduced me to 3 products: Fix Index Annuities, Index Universal life with a long-term care rider and Final Expense. He explained how they work. On our second meeting, Gilbert further explained why and how I should roll over our 401k that offered no guarantees into a Fixed Index Annuity that would guarantee a predictable stream of income for life. He also explained how Index Universal life account with long term care rider would not only enable me to leave a significant legacy (tax-free) for my loved ones, but how I could use it for my long-term care needs and cash accumulation, too. I’ve heard this stuff before, but just never tapped into how important they’d better prepare me and my family for a stress-free retirement. Gilbert patiently explained my options in plain language and illustrated different possible options which gave me a unique opportunity to make an informed decision. Then he helped opened a Fixed Index Annuity account for me that came with 16% bonus of my 401k Roll-Over. He also helps me open 2 Index Universal life policies. Gilbert continuously answered all my questions during the underwriting processes and still does today. Gilbert is a military veteran who served our country honorably and is still serving his community with those same VALUES today. I highly recommend his professionalism and dedication.”`,
  },
  {
    image: QuoteIcon,
    name: `Estella & Laudes Frubi`,
    review: `“My husband and I were both Life insurance policies holders when we got introduced to Gilbert. Haven seen how useless our policies were, I initially saw Gilbert as “just another insurance agent” looking for commission. But my husband, who is more pessimistic, was able to convince me to reluctantly meet with Gilbert the first time. But oh boy, I&#39;m glad we did! Gilbert used a care-driven approach, coupled with genuine politeness, and that really made a big difference to us. He was able to help us think of our finances and generational wealth building in ways never quite imagined. He did so by simply involving us in every step of his explanations or illustrations.What really moved us was his ability to ask simple life questions then use our feedback to better explain and illustrate scenarios that applied to our specific needs. He did this without knowing that we already owned policies. When we told him we did, he immediately told us how happy and proud he was of us for thinking of protecting our lives and that of our loved ones. The truth was that these policies were not doing what we were promised they’d do. So, a month later, my husband and I decided to contact Gilbert and tell him how disappointed we were with the performance of our policies. He looked at our policies and identified that we had selected the wrong product for our specific needs. (Term Life Insurance). He asked us if we plan on dying by the time the policy would expire? That got us thinking…, given that we’re both in our early thirties and very healthy, it an obvious question, yet soul-searching. Gilbert introduced us to Indexed universal life (IUL). An insurance policy that comes with death benefit protection that also provides the opportunity to build long-term cash value by earning interest that is linked to the movement of a selected stock market index. With our input, he did illustrations with 7 different insurance carriers, and we were able to find something that would suit our specific needs. You’d think it ended there, nope! It didn’t! He didn’t write these policies for us. He showed us how to become his business partners, helped us get our life insurance licenses, and showed us how to properly structure an IUL and then wrote each other’s policy. As his business partners, we do make passive income by helping our community add millions of dollars to their family estates. We can&#39;t thank God enough for Gilbert. Gilbert is the type of person you’d like to do business with. He is passionate about helping others. 100% recommended!”`,
  },
  {
    image: QuoteIcon,
    name: `Anthonia  .N. Okobi`,
    review: `“I’m so happy with Mary Adenekan working me through the life policy investment. Everything went smoothly with a torch of the best mentors Dr and Mrs. Jikong love u guys I will always recommend friends. Thanks again”
`,
  },
  {
    image: QuoteIcon,
    name: `Thomas Bini`,
    review: `“Mary Adenekan’s client referred me to her. She is so amazing and did  phenomenal educating , showing, and guiding me to make informed decisions while attaining an annuity.  I feel very blessed to know her. Mary is always readily available to answer questions when needed. Thank you for your trust.  Appreciate you very much Mary!”
`,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullReview, setShowFullReview] = useState({
    state: false,
    id: 0,
  });

  const handlePrev = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? testimonialData.length - 1 : curr - 1
    );
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) =>
      curr === testimonialData.length - 1 ? 0 : curr + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="2xl:min-h-[min(60dvh,920px)] xl:min-h-[min(60dvh,920px)] lg:min-h-[min(60dvh,920px)] 5k:min-h-[min(25dvh,720px)] 4k:min-h-[min(45dvh,920px)] 3k:min-h-[min(40dvh,920px)] py-3 relative flex justify-center items-center">
        <div className="absolute -top-[20%] right-0  w-full flex justify-end">
          <img
            src={TestimonialsBgImg}
            alt="background-vector-img"
            className="w-72 h-auto"
          />
        </div>
        <div className="max-w-[1920px] mx-auto w-full relative z-20">
          <div className="w-[95%] mx-auto  flex justify-center items-center flex-col ">
            <div className="2xl:w-[40%] xl:w-[40%] lg:w-[45%] 5k:w-[40%] md:portrait:w-[60%] w-[85%] mx-auto font-mainFont font-[700] text-[#040B1E] ">
              <h3 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:portrait:text-3xl 5k:text-4xl text-xl text-center">
                What Our Customers Say About Us
              </h3>
            </div>
            <div className="5k:w-[55%] 2xl:w-[70%] xl:w-[80%] lg:w-[90%] md:portrait:w-[90%] w-[95%] overflow-auto mx-auto  flex justify-start gap-4 my-10 px-2 py-5 ">
              {testimonialData.map((cur, id) => (
                <>
                  <div
                    style={{
                      transform: `translateX(-${currentIndex * 105}%) `,
                    }}
                    className="bg-mainColor customShadowCoreValue rounded-lg p-4 max-w-80 flex flex-col justify-center items-center flex-shrink-0 transition-all  duration-700 ease-in-out"
                  >
                    <div className="w-16 h-16 -translate-y-10">
                      <img
                        alt="QuoteIcon"
                        src={QuoteIcon}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="-mt-5 flex flex-col gap-2">
                      <p className="text-[16px] line-clamp-6 font-secondaryFont font-[400] text-[#767676] text-center">
                        {cur.review}
                      </p>
                      <button
                        onClick={() =>
                          setShowFullReview({
                            state: true,
                            id,
                          })
                        }
                        className="text-secondaryColor font-mainFont font-[700] text-[12px] ml-auto"
                      >
                        Read Full Review
                      </button>
                    </div>
                    <div className="my-4">
                      <h3 className="text-[#040B1E] font-mainFont font-[700] text-xl">
                        {cur.name}
                      </h3>
                    </div>
                  </div>
                </>
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
                {testimonialData[showFullReview.id].name}
              </h3>
              <p className="font-secondaryFont font-[500] text-base my-6">
                {testimonialData[showFullReview.id].review}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
