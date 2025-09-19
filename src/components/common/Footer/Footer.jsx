import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#040B1E] py-10 pt-24 4k:py-16 4k:pt-28">
        <div className="max-w-[1920px] mx-auto">
          <div className="w-[95%] mx-auto">
            <div className="2xl:w-[70%] xl:w-[75%] lg:w-[90%] md:portrait:w-[95%] w-[95%] 4k:w-[70%] mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-4 grid-cols-1 py-2 gap-4">
              <div className="flex flex-col justify-start items-start gap-3 pr-5">
                <div>
                  <img
                    alt="JOptiman logo"
                    src="/JOptimanlogo.png"
                    className="h-auto w-44"
                  />
                </div>
                <div className="flex flex-col gap-.5">
                  <Link
                    to="https://www.google.com/maps/place/675+Town+Square+Blvd+%23200,+Garland,+TX+75040/@32.9543979,-96.6118173,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1cfc98c95557:0x3ecd2db0662c965c!8m2!3d32.9543979!4d-96.6118173!16s%2Fg%2F11pvcw3yj5?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-base text-[#ABAFB5] font-secondaryFont font-[400]"
                  >
                    675 Town Square Blvd,
                  </Link>
                  <Link
                    to="https://www.google.com/maps/place/675+Town+Square+Blvd+%23200,+Garland,+TX+75040/@32.9543979,-96.6118173,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1cfc98c95557:0x3ecd2db0662c965c!8m2!3d32.9543979!4d-96.6118173!16s%2Fg%2F11pvcw3yj5?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-base text-[#ABAFB5] font-secondaryFont font-[400]"
                  >
                    Suite 200,
                  </Link>
                  <Link
                    to="https://www.google.com/maps/place/675+Town+Square+Blvd+%23200,+Garland,+TX+75040/@32.9543979,-96.6118173,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1cfc98c95557:0x3ecd2db0662c965c!8m2!3d32.9543979!4d-96.6118173!16s%2Fg%2F11pvcw3yj5?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-base text-[#ABAFB5] font-secondaryFont font-[400]"
                  >
                    Garland,
                  </Link>
                  <Link
                    to="https://www.google.com/maps/place/675+Town+Square+Blvd+%23200,+Garland,+TX+75040/@32.9543979,-96.6118173,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1cfc98c95557:0x3ecd2db0662c965c!8m2!3d32.9543979!4d-96.6118173!16s%2Fg%2F11pvcw3yj5?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-base text-[#ABAFB5] font-secondaryFont font-[400]"
                  >
                    Texas,
                  </Link>
                  <Link
                    to="https://www.google.com/maps/place/675+Town+Square+Blvd+%23200,+Garland,+TX+75040/@32.9543979,-96.6118173,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1cfc98c95557:0x3ecd2db0662c965c!8m2!3d32.9543979!4d-96.6118173!16s%2Fg%2F11pvcw3yj5?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-base text-[#ABAFB5] font-secondaryFont font-[400]"
                  >
                    TX 75040
                  </Link>
                </div>
                <Link
                  to="tel:+1(888) 491-7757"
                  className="text-base text-[#ABAFB5] font-secondaryFont font-[400] flex justify-start items-center gap-3"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        opacity="0.8"
                        d="M13.952 11.8738L13.4464 12.3534C13.4464 12.3534 12.2431 13.4927 8.95978 10.3819C5.67647 7.27103 6.87979 6.13173 6.87979 6.13173L7.19757 5.8289C7.98312 5.0856 8.05756 3.89124 7.37201 3.01876L5.97202 1.23675C5.12314 0.156737 3.48426 0.0137948 2.51205 0.934979L0.767613 2.58676C0.286505 3.04417 -0.0357153 3.635 0.00317331 4.29148C0.103173 5.97184 0.900945 9.58564 5.3498 13.8019C10.0687 18.2723 14.4964 18.4502 16.3064 18.2892C16.8797 18.2384 17.3775 17.961 17.7786 17.5798L19.3564 16.0847C20.423 15.0757 20.123 13.3445 18.7586 12.6383L16.6364 11.5381C15.7408 11.0754 14.652 11.2109 13.952 11.8738Z"
                        fill="#ABAFB5"
                      />
                    </svg>
                  </span>
                  +1 (888) 491-7757
                </Link>
              </div>

              <div>
                <h2 className="text-mainColor font-[700] font-mainFont text-xl">
                  Contact
                </h2>
                <ul className="flex flex-col justify-start items-start gap-3 my-3">
                  <li>
                    <Link
                      to="/"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-mainColor font-[700] font-mainFont text-xl">
                  Quick Links
                </h2>
                <ul className="flex flex-col justify-start items-start gap-3 my-3">
                  <li>
                    <Link
                      to="https://links.joptiman.com/widget/form/ziWPHtzQiDL1oa5rlRcu"
                      target="_blank"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Join us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/business"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/client"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Clients
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-mainColor font-[700] font-mainFont text-xl">
                  Our Services
                </h2>
                <ul className="flex flex-col justify-start items-start gap-3 my-3">
                  <li>
                    <Link
                      to="/health-insurance"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Health Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/life-insurance"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Life Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/annuities"
                      className="text-base font-[400] font-secondaryFont text-[#ABAFB5]"
                    >
                      Annuities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center gap-6 items-center w-full py-5 flex-wrap border-t border-paraColor/20 mt-10">
              <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5]  flex-shrink-0">
                Copyright © 2025 JOptiman Consultancy
              </p>
              <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
                {" "}
                All Rights Reserved
              </p>
              <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
                {" "}
                Privacy Policy
              </p>
              <p className="text-[14px] font-[400] font-secondaryFont text-[#ABAFB5] flex-shrink-0">
                {" "}
                Designed by{" "}
                <Link to="https://kaltechconsultancy.tech" target="_blank">
                  Kaltech
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
