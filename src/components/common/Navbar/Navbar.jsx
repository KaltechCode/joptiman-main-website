import React from "react";
import JOptimanLogog from "../../../assets/JOptimanlogo.png";
import { AlignLeft, X } from "lucide-react";
import { stagger, useAnimate } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Health insurance",
    path: "/health-insurance",
  },
  {
    title: "Life Insurance",
    path: "/life-insurance",
  },
  {
    title: "Annuities",
    path: "/annuities",
  },
  {
    title: "Contact US",
    path: "/contact-us",
  },
];

export const Navbar = () => {
  const [scope, animate] = useAnimate();
  const router = useNavigate();
  const handleOpenMenu = async () => {
    animate(
      scope.current,
      {
        opacity: [0, 1],
        zIndex: 50,
        display: ["none", "flex"],
      },
      {
        duration: 0.3,
        ease: "anticipate",
      }
    );
    await animate(
      ".menuMainWrapper",
      {
        opacity: [0, 1],
        height: ["0%", "100%"],
        y: ["-20dvh", "0dvh"],
      },
      {
        duration: 0.6,
        ease: "circInOut",
      }
    );
    animate(
      ".menuMainWrapper .menuChildWrapper",
      {
        opacity: [0, 1],
        x: ["-50%", "0%"],
      },
      {
        duration: 0.6,
        ease: "circInOut",
        delay: stagger(0.2),
      }
    );
  };

  const handleCloseMenu = async () => {
    await animate(
      ".menuMainWrapper .menuChildWrapper",
      {
        opacity: [1, 0],
        x: ["0%", "-50%"],
      },
      {
        duration: 0.6,
        ease: "circInOut",
        delay: stagger(0.2),
      }
    );

    animate(
      ".menuMainWrapper",
      {
        opacity: [1, 0],
        height: ["100%", "0%"],
        y: ["0dvh", "-20dvh"],
      },
      {
        duration: 0.6,
        ease: "circInOut",
      }
    );

    animate(
      scope.current,
      {
        opacity: [1, 1],
        zIndex: -10,
        display: ["flex", "none"],
      },
      {
        duration: 0.1,
        ease: "anticipate",
      }
    );
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <header className="max-w-[1920px mx-auto bg-white sticky top-0 w-full z-50">
          <div className="w-full bg-secondaryColor py-4 5k:py-8 4k:py-8 2xl:flex lg:flex xl:flex 5k:flex md:portrait:flex hidden">
            <div className="w-[95%] mx-auto text-white flex justify-between items-center">
              <div>
                <Link
                  to="mailto:info@joptimanconultancy.com"
                  className="flex justify-center items-center gap-4 font-secondaryFont font-[400] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:portrait:text-[13px] text-[12px]"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.5 2H1.5C1.08333 2 0.729167 2.14583 0.4375 2.4375C0.145833 2.72917 0 3.08333 0 3.5V12.5C0 12.9167 0.145833 13.2708 0.4375 13.5625C0.729167 13.8542 1.08333 14 1.5 14H14.5C14.9167 14 15.2708 13.8542 15.5625 13.5625C15.8542 13.2708 16 12.9167 16 12.5V3.5C16 3.08333 15.8542 2.72917 15.5625 2.4375C15.2708 2.14583 14.9167 2 14.5 2ZM14.5 3C14.5312 3 14.5625 3.0026 14.5938 3.00781C14.625 3.01302 14.6562 3.02083 14.6875 3.03125L8 8.84375L1.3125 3.03125C1.34375 3.02083 1.375 3.01302 1.40625 3.00781C1.4375 3.0026 1.46875 3 1.5 3H14.5ZM14.5 13H1.5C1.36458 13 1.2474 12.9505 1.14844 12.8516C1.04948 12.7526 1 12.6354 1 12.5V4.09375L7.67188 9.875C7.72396 9.91667 7.77604 9.94792 7.82812 9.96875C7.88021 9.98958 7.9375 10 8 10C8.0625 10 8.11979 9.98958 8.17188 9.96875C8.22396 9.94792 8.27604 9.91667 8.32812 9.875L15 4.09375V12.5C15 12.6354 14.9505 12.7526 14.8516 12.8516C14.7526 12.9505 14.6354 13 14.5 13Z"
                        fill="white"
                      />
                    </svg>
                  </span>{" "}
                  info@joptimanconultancy.com
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-[400] font-secondaryFont 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:portrait:text-[13px] hidden 2xl:flex xl:flex lg:flex md:portrait:flex ">
                  Follow us :
                </span>
                <span className="flex justify-center items-center gap-4">
                  <Link to="https://x.com/?lang=en&mx=2" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M8.344 5.928L13.407 0H12.207L7.812 5.147L4.3 0H0.25L5.56 7.784L0.25 14H1.45L6.092 8.564L9.801 14H13.851L8.344 5.928ZM6.701 7.852L6.163 7.077L1.882 0.91H3.725L7.179 5.887L7.717 6.662L12.208 13.132H10.365L6.701 7.852Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0312 7.75C14.0312 11.1406 11.543 13.957 8.28906 14.4492V9.71875H9.875L10.1758 7.75H8.28906V6.49219C8.28906 5.94531 8.5625 5.42578 9.41016 5.42578H10.2578V3.75781C10.2578 3.75781 9.49219 3.62109 8.72656 3.62109C7.19531 3.62109 6.18359 4.57812 6.18359 6.27344V7.75H4.46094V9.71875H6.18359V14.4492C2.92969 13.957 0.46875 11.1406 0.46875 7.75C0.46875 4.00391 3.50391 0.96875 7.25 0.96875C10.9961 0.96875 14.0312 4.00391 14.0312 7.75Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 3.60547C8.59766 3.60547 10.0195 5.02734 10.0195 6.75C10.0195 8.5 8.59766 9.89453 6.875 9.89453C5.125 9.89453 3.73047 8.5 3.73047 6.75C3.73047 5.02734 5.125 3.60547 6.875 3.60547ZM6.875 8.80078C7.99609 8.80078 8.89844 7.89844 8.89844 6.75C8.89844 5.62891 7.99609 4.72656 6.875 4.72656C5.72656 4.72656 4.82422 5.62891 4.82422 6.75C4.82422 7.89844 5.75391 8.80078 6.875 8.80078ZM10.8672 3.49609C10.8672 3.90625 10.5391 4.23438 10.1289 4.23438C9.71875 4.23438 9.39062 3.90625 9.39062 3.49609C9.39062 3.08594 9.71875 2.75781 10.1289 2.75781C10.5391 2.75781 10.8672 3.08594 10.8672 3.49609ZM12.9453 4.23438C13 5.24609 13 8.28125 12.9453 9.29297C12.8906 10.2773 12.6719 11.125 11.9609 11.8633C11.25 12.5742 10.375 12.793 9.39062 12.8477C8.37891 12.9023 5.34375 12.9023 4.33203 12.8477C3.34766 12.793 2.5 12.5742 1.76172 11.8633C1.05078 11.125 0.832031 10.2773 0.777344 9.29297C0.722656 8.28125 0.722656 5.24609 0.777344 4.23438C0.832031 3.25 1.05078 2.375 1.76172 1.66406C2.5 0.953125 3.34766 0.734375 4.33203 0.679688C5.34375 0.625 8.37891 0.625 9.39062 0.679688C10.375 0.734375 11.25 0.953125 11.9609 1.66406C12.6719 2.375 12.8906 3.25 12.9453 4.23438ZM11.6328 10.3594C11.9609 9.56641 11.8789 7.65234 11.8789 6.75C11.8789 5.875 11.9609 3.96094 11.6328 3.14062C11.4141 2.62109 11.0039 2.18359 10.4844 1.99219C9.66406 1.66406 7.75 1.74609 6.875 1.74609C5.97266 1.74609 4.05859 1.66406 3.26562 1.99219C2.71875 2.21094 2.30859 2.62109 2.08984 3.14062C1.76172 3.96094 1.84375 5.875 1.84375 6.75C1.84375 7.65234 1.76172 9.56641 2.08984 10.3594C2.30859 10.9062 2.71875 11.3164 3.26562 11.5352C4.05859 11.8633 5.97266 11.7812 6.875 11.7812C7.75 11.7812 9.66406 11.8633 10.4844 11.5352C11.0039 11.3164 11.4414 10.9062 11.6328 10.3594Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[95%] mx-auto">
            <div className="flex justify-between items-center py-6 5k:py-12 4k:py-10">
              <div className="h-auto 2xl:w-44 xl:w-44 lg:w-36 md:portrait:w-36 w-36 transition-all duration-300 ease-linear">
                <Link to="/">
                  <img src={JOptimanLogog} alt="JOptimanLogog" />
                </Link>
              </div>
              <nav className="md:portrait:hidden 2xl:flex xl:flex lg:flex hidden">
                <ul className="flex justify-around items-center 2xl:gap-16 xl:gap-8 lg:gap-4">
                  {navLinks.map((link, id) => (
                    <li key={id}>
                      <Link
                        to={link.path}
                        className="font-secondaryFont text-paraColor font-[500] 2xl:text-base xl:text-[15px] lg:text-[14px]  uppercase transition-all duration-300 ease-linear"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="md:portrait:flex 2xl:flex xl:flex lg:flex hidden md:portrait:ml-auto md:portrait:mr-10">
                <Link
                  to="https://portal.joptimanconsultancy.com/"
                  // target="_blank"
                  // onClick={() => router("/agent-registration")}
                  className="flex button justify-center items-center gap-4 bg-secondaryColor px-5 py-1.5 rounded-lg text-white font-secondaryFont font-[500] 2xl:text-lg xl:text-lg lg:text-[14px] transition-all duration-300 ease-linear border border-[#F08613] outline-none"
                >
                  Agent Login
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="24"
                        height="24"
                        rx="12"
                        fill="white"
                      />
                      <g clip-path="url(#clip0_507_229)">
                        <path
                          d="M12 16.5C13.0609 16.5 14.0783 16.0786 14.8284 15.3284C15.5786 14.5783 16 13.5609 16 12.5C16 11.4391 15.5786 10.4217 14.8284 9.67157C14.0783 8.92143 13.0609 8.5 12 8.5"
                          stroke="url(#paint0_linear_507_229)"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4 12.6042H11.3333M11.3333 12.6042L9.13333 11M11.3333 12.6042L9.13333 14.2083"
                          stroke="#191F2A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_507_229"
                          x1="12"
                          y1="8.98342"
                          x2="16.0672"
                          y2="9.02248"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0B3186" />
                          <stop offset="1" stop-color="#030C20" />
                        </linearGradient>
                        <clipPath id="clip0_507_229">
                          <rect
                            width="12"
                            height="11"
                            fill="white"
                            transform="translate(5 7)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
              <button
                onClick={handleOpenMenu}
                className="2xl:hidden xl:hidden lg:hidden flex md:portrait:flex rotate-180"
              >
                <AlignLeft size={35} />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div
        ref={scope}
        className="bg-mainColor opacity-0 -z-10 fixed top-0 left-0  w-full h-[100dvh] py-5 flex flex-col justify-start 2xl:hidden xl:hidden lg:hidden lg:landscape:hidden md:portrait:flex "
      >
        <MobileMenu handleCloseMenu={handleCloseMenu} />
      </div>
    </>
  );
};

const MobileMenu = ({ handleCloseMenu }) => {
  const router = useNavigate();
  return (
    <>
      <div className="w-full h-full menuMainWrapper overflow-y-auto">
        <div className="w-[90%] mx-auto flex justify-between items-center menuChildWrapper opacity-0">
          <div className="h-[15vw] w-[35vw] md:portrait:w-[25vw] md:portrait:h-[11vw]  sm:landscape:w-[15vw] sm:landscape:h-[6vw]">
            <Link to="/">
              <img
                src={JOptimanLogog}
                alt="nav-logo"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
          <button type="button" onClick={handleCloseMenu}>
            <X size={35} />
          </button>
        </div>
        <div className="w-[90%] mx-auto my-5">
          <ul className="flex flex-col justify-start items-start gap-6 px-3 ">
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/"
                className="font-secondaryFont text-[#767676] font-[500] text-2xl uppercase"
              >
                Home
              </Link>
            </li>
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/about"
                className="font-secondaryFont text-[#767676] font-[400] text-2xl uppercase"
              >
                ABOUT US
              </Link>
            </li>
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/health-insurance"
                className="font-secondaryFont text-[#767676] font-[400] text-2xl uppercase"
              >
                HEALTH INSURANCE
              </Link>
            </li>
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/life-insurance"
                className="font-secondaryFont text-[#767676] font-[400] text-2xl uppercase"
              >
                LIFE INSURANCE
              </Link>
            </li>
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/annuities"
                className="font-secondaryFont text-[#767676] font-[400] text-2xl uppercase"
              >
                ANNUITIES
              </Link>
            </li>
            <li className="menuChildWrapper opacity-0">
              <Link
                to="/contact-us"
                className="font-secondaryFont text-[#767676] font-[400] text-2xl uppercase"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[90%] mx-auto menuChildWrapper opacity-0">
          <div className="w-full">
            <Link
              to="http://portal.joptimanconsultancy.com/"
              target="_blank"
              className="flex button justify-center items-center gap-4 bg-secondaryColor px-5 py-3 rounded-lg text-white font-secondaryFont font-[500] text-xl w-full transition-all duration-300 ease-linear border border-[#F08613] outline-none"
            >
              Agent Login
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="24" height="24" rx="12" fill="white" />
                  <g clip-path="url(#clip0_507_229)">
                    <path
                      d="M12 16.5C13.0609 16.5 14.0783 16.0786 14.8284 15.3284C15.5786 14.5783 16 13.5609 16 12.5C16 11.4391 15.5786 10.4217 14.8284 9.67157C14.0783 8.92143 13.0609 8.5 12 8.5"
                      stroke="url(#paint0_linear_507_229)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4 12.6042H11.3333M11.3333 12.6042L9.13333 11M11.3333 12.6042L9.13333 14.2083"
                      stroke="#191F2A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_507_229"
                      x1="12"
                      y1="8.98342"
                      x2="16.0672"
                      y2="9.02248"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0B3186" />
                      <stop offset="1" stop-color="#030C20" />
                    </linearGradient>
                    <clipPath id="clip0_507_229">
                      <rect
                        width="12"
                        height="11"
                        fill="white"
                        transform="translate(5 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
