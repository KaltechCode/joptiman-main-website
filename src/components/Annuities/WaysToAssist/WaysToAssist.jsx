import React from "react";

export const WaysToAssists = () => {
  return (
    <>
      <div className="2xl:min-h-[min(70dvh,920px)] xl:min-h-[min(70dvh,920px)] lg:min-h-[min(80dvh,920px)] md:portrait:min-h-[min(70dvh,920px)] lg:portrait:min-h-[90dvh] min-h-[90dvh] 4k:min-h-[30dvh] 3k:min-h-[35dvh] flex justify-start items-center 2xl:py-16 xl:py-16  4k:xl:py-20 3k:xl:py-20 md:portrait:py-10 lg:py-20 py-5">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8  2xl:p-4 xl:p-4 lg:p-4 md:portrait:p-4 4k:p-4 3k:p-4 p-2 rounded-lg">
            <h3 className="text-4xl font-[700] font-mainFont text-secondaryColor">
              Ways we Can Assist
            </h3>
            <div className="my-[2%] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-[#F08613] text-2xl font-mainFont font-[700]">
                  Personalized Annuity Consultations
                </h4>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  Annuities come in various forms, and the right choice depends
                  on your individual retirement goals, financial situation, and
                  risk tolerance. We start by understanding your personal needs
                  and objectives, offering tailored recommendations for the type
                  and structure of annuities that will provide the optimal
                  benefits for your retirement.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#F08613] text-2xl font-mainFont font-[700]">
                  Lifetime Income Riders
                </h4>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  Many annuity products offer lifetime income riders, which
                  guarantee income for life regardless of how the underlying
                  investments perform. We help clients evaluate the costs and
                  benefits of adding these riders to their annuity contracts,
                  ensuring that their income needs are met for the rest of their
                  lives, no matter what happens in the markets.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[#F08613] text-2xl font-mainFont font-[700]">
                  Retirement Income Planning
                </h4>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  As part of a broader retirement income strategy, annuities can
                  be combined with other income sources such as Social Security,
                  pensions, and investment portfolios. We work with you to
                  create a holistic retirement plan, ensuring that our annuity
                  plans fit into your overall strategy to provide you with
                  consistent income and reduce the risk of outliving your
                  savings.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[#F08613] text-2xl font-mainFont font-[700]">
                  Annuity Reviews and Adjustments
                </h4>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  Life changes, and so does your financial needs. We offer
                  ongoing annuity reviews to ensure that your annuity products
                  continue to meet your goals. Whether you need to adjust
                  beneficiaries, change payout options, or consider exchanging
                  an older annuity for a more modern product, we provide expert
                  guidance on making the necessary adjustments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#F08613] text-2xl font-mainFont font-[700]">
                  Annuity Rollovers
                </h4>
                <p className="font-[500] font-secondaryFont text-base text-[#767676]">
                  If you already have an existing annuity or looking to transfer
                  funds from a retirement account (like a 401(k) or IRA), we
                  offer assistance with annuity rollovers. We help you
                  transition your funds into a new annuity product without
                  triggering tax penalties, ensuring a seamless transfer while
                  optimizing the terms and benefits of the new annuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
