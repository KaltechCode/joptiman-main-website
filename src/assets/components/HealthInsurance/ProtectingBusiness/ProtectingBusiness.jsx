import "./ProtectingBusiness.css";
import HealthInsuranceImg2 from "../../../assets/HealthInsuranceImg2.png";
import { useNavigate } from "react-router-dom";

export const ProtectingBusiness = () => {
  const navigte = useNavigate()
  return (
    <>
      <div className="2xl:min-h-[90dvh] xl:min-h-[90dvh] lg:min-h-[90dvh] md:portrait:min-h-[50dvh] lg:portrait:min-h-[90dvh] min-h-[90dvh] 4k:min-h-[60dvh] 3k:min-h-[65dvh] flex justify-start items-center 2xl:py-16 xl:py-16  4k:xl:py-20 3k:xl:py-20 md:portrait:py-20 lg:py-20 py-20">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col 2xl:gap-8 xl:gap-8 lg:gap-8 4k:gap-16 3k:gap-16 gap-8  2xl:p-4 xl:p-4 lg:p-4 md:portrait:p-4 4k:p-4 3k:p-4 p-2 rounded-lg">
            <div className="flex flex-col 2xl:gap-5 xl:gap-5 lg:gap-5 4k:gap-10 3k:gap-10 gap-5">
              <h2 className="text-4xl font-[700] font-mainFont text-secondaryColor">
                Protecting Your Business, Securing Your Future
              </h2>
              <p className="font-secondaryFont font-[500] text-base text-[#767676]">
                JOptiman Consultancy can protect your health and financial
                well-being offering health insurance services to clients by
                acting as a guide and facilitator, helping individuals and
                businesses navigate through the complex health insurance
                landscape. we understand the critical importance of health
                insurance in today’s world. Rising healthcare costs and the
                complexity of insurance options can make it difficult for
                individuals and businesses to find the right coverage. Our
                health insurance services are designed to simplify the process,
                providing you with the guidance and tools you need to select the
                most suitable plans for your health and financial needs.
              </p>
            </div>
            <div className="relative">
              <img
                src={HealthInsuranceImg2}
                alt="HealthInsuranceImg"
                className="rounded-lg"
              />



              <div className="absolute -bottom-14 left-0 w-full  flex justify-center items-center gap-4">
                <div className="w-[97%] 2xl:flex xl:flex lg:flex 4k:flex 3k:flex md:portrait:flex hidden  justify-center items-center gap-4 CTABgColor rounded-lg">
                  <div className="2xl:w-[40%] xl:w-[40%] lg:w-[45%] 4k:w-[40%] 3k:w-[40%] md:portrait:w-[40%] py-7 px-8">
                    <p className="font-secondaryFont font-[500] text-white 2xl:text-lg xl:text-lg lg:text-base md:portrait:sm 4k:text-lg 3k:text-lg my-1">
                      Do you need
                    </p>
                    <h3 className="font-mainFont font-[700] 2xl:text-2xl xl:text-2xl lg:text-xl md:portrait:text-lg 4k:text-2xl 3k:text-2xl text-white">
                      Health Insurance?
                    </h3>
                  </div>

                  <div className="flex-1 py-7 2xl:px-8 xl:px-8 lg:px-5 md:portrait:px-2 4k:px-8 3k:px-8 flex justify-around items-center">
                    <div className="flex-shrink-0">
                      <p className="text-right text-[#767676] font-secondaryFont font-[500] 2xl:text-lg xl:text-lg lg:text-base md:portrait:sm 4k:text-lg 3k:text-lg">Schedule a </p>
                      <h3 className="2xl:text-2xl xl:text-2xl lg:text-xl md:portrait:text-lg 4k:text-2xl 3k:text-2xl font-[700] font-mainFont text-[#00204A]">
                      <span className="text-[#F08613]">Free</span> assessment
                      </h3>
                    </div>
                    <button onClick={()=>navigte('/contact-us')} className="uppercase text-white font-secondaryFont font-[600] bg-[#1A73E9] text-base px-6 py-3 rounded-lg">
                    Schedule NOW
                    </button>
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
