import React from "react";
import AboutWhychooseusBg1 from "../../../assets/HealthServicesBg1.png";
import AboutWhychooseusBg3 from "../../../assets/HealthServicesBg2.png";
import AboutWhychooseusBg2 from "../../../assets/AboutWhychooseBg2.png";

export const AnnuitiesService = () => {
  const serviceList = [
    "Employee Annuities",
    "Fixed Index Annuities",
    "Single Premium Annuities",
    "Multiple Premium Annuity",
    "Deferred Annuities",
  ];
  return (
    <>
      <div className="2xl:min-h-[80dvh] xl:min-h-[90dvh] lg:min-h-[90dvh] md:portrait:min-h-[50dvh] min-h-[80dvh] bg-[#F4F4F4] 4k:min-h-[20dvh] 3k:min-h-[25dvh] flex justify-start items-center 2xl:py-16 xl:py-16  4k:xl:py-20 3k:xl:py-20 md:portrait:py-16 lg:py-20 py-12 relative">
        <div className="absolute top-0 left-0 w-[60%] h-full">
          <img className="w-full h-full opacity-20" src={AboutWhychooseusBg1} />
        </div>
        <div className="absolute top-0 right-0 w-[30%] h-auto">
          <img className="w-full h-full" src={AboutWhychooseusBg2} />
        </div>
        <div className="max-w-[1920px] mx-auto w-full relative z-20">
          <div className="2xl:w-[70%] xl:w-[70%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[70%] 3k:w-[70%] w-[95%] mx-auto flex flex-col gap-8 justify-center items-start rounded-lg 2xl:p-10 xl:p-10 lg:p-10 md:portrait:p-10 4k:p-10 3k:p-10 px-3 py-5 ">
            <h4 className="2xl:text-4xl xl:text-4xl lg:text-3xl 4k:text-4xl 3k:text-4xl md:portrait:text-4xl text-2xl font-[700] font-mainFont text-secondaryColor">
              Annuities Services We Provide
            </h4>
            <div className="relative bg-mainColor customShadow w-[100%] rounded-xl 2xl:p-16 xl:p-16 lg:p-14 4k:p-16 3k:p-16 md:portrait:p-14 p-8">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img
                  src={AboutWhychooseusBg3}
                  alt="AboutWhychooseusBg2"
                  className="h-full w-auto"
                />
              </div>
              <div className="relative flex flex-col gap-3">
                {serviceList.map((cur, id) => (
                  <>
                    <div
                      key={id}
                      className="flex justify-start items-center gap-4 border border-[#051E57] text-[#767676] rounded-lg px-3 py-1.5 hover:bg-[#F08613] hover:text-white transition-all duration-200 ease-linear"
                    >
                      <div>
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.75798 14.7461C6.45851 14.4076 6.18507 14.0788 5.93767 13.7598C5.69028 13.4408 5.4559 13.1185 5.23455 12.793C5.03923 12.5326 4.85043 12.2559 4.66814 11.9629C4.48585 11.67 4.31658 11.3607 4.16033 11.0352L4.1408 10.9766C4.04965 10.7813 3.99757 10.5925 3.98455 10.4102C3.97153 10.2279 4.06918 10.0716 4.27752 9.94144C4.86345 9.57686 5.27361 9.51175 5.50798 9.74613C5.74236 9.9805 6.02231 10.2995 6.34783 10.7032C6.53012 10.9506 6.74822 11.2435 7.00213 11.5821C7.25603 11.9206 7.46762 12.2201 7.63689 12.4805C7.80616 12.7149 7.98194 12.6986 8.16423 12.4317C8.34653 12.1647 8.47673 11.9727 8.55486 11.8555C8.84132 11.4258 9.28728 10.7911 9.89275 9.95121C10.4982 9.11136 10.9572 8.49613 11.2697 8.1055C11.4129 7.92321 11.6278 7.66931 11.9142 7.34379C12.2007 7.03129 12.4937 6.71227 12.7931 6.38675C13.0926 6.06123 13.3661 5.76175 13.6135 5.48832C13.8739 5.2279 14.0497 5.05212 14.1408 4.96097C14.284 4.83076 14.4956 4.66475 14.7756 4.46293C15.0555 4.2611 15.2997 4.24483 15.508 4.4141C15.7424 4.59639 15.9019 4.83076 15.9865 5.11722C16.0711 5.40368 16.0353 5.65759 15.8791 5.87894C15.5926 6.26957 15.2573 6.64717 14.8732 7.01175C14.4891 7.37634 14.1473 7.74092 13.8478 8.1055C13.2358 8.84769 12.6401 9.61267 12.0607 10.4004C11.4813 11.1882 10.9116 11.9792 10.3517 12.7735C10.1694 13.0339 9.95785 13.3627 9.71697 13.7598C9.47608 14.1569 9.27752 14.4987 9.12127 14.7852C8.80877 15.3321 8.4865 15.6315 8.15447 15.6836C7.82244 15.7357 7.35694 15.4232 6.75798 14.7461Z"
                              fill="#1A73E9"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-secondaryFont font-[400]">
                          {cur}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
