import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SteperFormSection.css";
import JOptimanLogog from "../../../assets/JOptimanlogo.png";
import JOptimanLogo3d from "../../../assets/JoptimanLogo3d.png";
import CircularProgress from "@mui/material/CircularProgress";




export const SteperFormSection = ({ btnTitle, button }) => {
  const [showPath, setShowPath] = useState(false)
  const [agentInfo, setAgentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    hasLicense: "",
    licenseState: "",
    recruitmentAgentCode: "",
    recruitmentAgentEmail: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allTerms, setAllTerms] = useState({
    terms1: "",
    terms2: "",
    terms3: "",
    terms4: "",
    terms5: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const allForms = [1, 2];
  const router = useNavigate();

  const handleNext = async () => {
    if (
      agentInfo?.firstName ||
      agentInfo?.lastName ||
      agentInfo?.email ||
      agentInfo?.address1 ||
      agentInfo?.phone ||
      agentInfo?.city ||
      agentInfo?.hasLicense
    ) {
      if (agentInfo?.hasLicense === "Yes" && agentInfo?.licenseState === "") {
        // alert("Please fill all the fields");
        toast.error("Please fill all the fields");
        return;
      }
    }

    // move to next step
    if (currentStep < allForms.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep >= 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAgentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;

    setAllTerms((prev) => ({ ...prev, [name]: checked }));
  };

  const handleCreateAgent = async () => {
    setIsLoading(true);
    // save agent information in db..
    const BASE__URL = import.meta.env.VITE__BASE_URL;

    const isTermsChecked = !Object.keys(allTerms).every((key) => {
      return Boolean(allTerms[key]);
    });

    // if (!isTermsChecked) {
    try {
      const saveAgentInfo = await axios.post(`${BASE__URL}/api/auth/register`, {
        firstName: agentInfo?.firstName,
        lastName: agentInfo?.lastName,
        email: agentInfo?.email,
        phoneNo: agentInfo?.phone,
        addressLine1: agentInfo?.address1,
        city: agentInfo?.city,
        zipCode: agentInfo?.zipCode,
        activeLicense: agentInfo?.hasLicense,
        licenseState: agentInfo?.licenseState,
        recruitmentAgentCode: agentInfo?.recruitmentAgentCode,
        recruitmentAgentEmail: agentInfo?.recruitmentAgentEmail,
        state: agentInfo?.state,
        termsAccepted: true,
      });

      console.log("Registered agent", saveAgentInfo?.data);
      setIsLoading(false);
      toast.success(saveAgentInfo?.data.message, {
        timeOut: 10000, // Set to 15 seconds
        extendedTimeOut: 5000, // Set to 5 seconds after hover
        autoClose: false, // Prevents auto-dismissal
        closeOnClick: false, // Prevents dismissal on click
      });
      toast.success("Payment link has been sent to your email", {
        timeOut: 10000, // Set to 15 seconds
        extendedTimeOut: 5000, // Set to 5 seconds after hover
        autoClose: false, // Prevents auto-dismissal
        closeOnClick: false, // Prevents dismissal on click
      });
      setAgentInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        hasLicense: "",
        licenseState: "",
        recruitmentAgentCode: "",
        recruitmentAgentEmail: "",
      });
      router("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response.data.message, {
        timeOut: 10000, // Set to 15 seconds
        extendedTimeOut: 5000, // Set to 5 seconds after hover
        autoClose: false, // Prevents auto-dismissal
        closeOnClick: false, // Prevents dismissal on click
      });
      setIsLoading(false);
    }
    // }
  };

  //   render current form...
  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormOne
            handleNext={handleNext}
            handleOnChange={handleOnChange}
            agentInfo={agentInfo}
          />
        );
      case 1:
        return (
          <FormTwo
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            allTerms={allTerms}
            handleChecked={handleChecked}
            handleCreateAgent={handleCreateAgent}
            isLoading={isLoading}
          />
        );
    }
  };


  const location = useLocation()

  const shouldShowButton = location.pathname === "/register"
  


  return (
    <div className="2xl:py-20 loginForm__mianWrapper xl:py-20 lg:py-10 md:portrait:py-10 py-10 4k:py-32 3k:py-28 border-t border-[#DEDEDE]">
      <div className="max-w-[1920px] mx-auto flex justify-center items-center">
        <div className="2xl:w-[80%] xl:w-[80%] lg:portrait:w-[90%] md:portrait:w-[90%] lg:w-[90%] 4k:w-[80%] 3k:w-[80%] w-[95%] mx-auto flex gap-4 customShadowCoreValu rounded-lg">
          <div className="flex-1">{renderCurrentForm()}</div>
          <div className="w-[45%] 2xl:flex xl:flex lg:flex md:portrait:hidden 4k:flex 3k:flex hidden justify-start items-center px-16">
            <div>
              <Link to="/" className="">
                <img
                  src={JOptimanLogo3d}
                  alt="main-logo"
                  className="-ml-[31%]"
                />
              </Link>
              <div className="-mt-16">
                <p className="font-secondaryFont font-[500] text-white text-lg my-4">
                  JOptiman Consultancy Agent Registration
                </p>

                <ul className="flex flex-col gap-3 text-white text-base font-secondaryFont font-[500] px-5">
                  <li className="list-disc">
                    Join an innovative, client-focused financial consulting team
                  </li>
                  <li className="list-disc">
                    Access exclusive training and professional development
                    opportunities
                  </li>
                </ul>
                <p className="font-secondaryFont font-[500] text-white text-base my-4">
                  If you are an existing JOptiman Consultancy agent, you can
                  register a new agency using your current login credentials.
                  This single sign-in allows you to oversee multiple agents,
                  including your existing account.
                </p>

                {shouldShowButton && (
                  <Link to={"/"}>
                    <button className="bg-[#f08613]  text-mainColor 2xl:px-5 xl:px-5 lg:px-4 2xl:py-3 xl:py-3 lg:py-2 md:portrait:px-5 md:portrait:py-2 px-5 py-2 rounded-lg 2xl:text-[15px] xl:text-[15px] lg:text-[13px] md:portrait:text-[13px] text-[13px]  font-secondaryFont font-[700] uppercase mt-10">
                      {btnTitle}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormOne = ({ handleNext, handleOnChange, agentInfo }) => {
  return (
    <>
      <div className="w-full bg-[#fff] px-5 2xl:py-10  xl:py-10 lg:py-10 md:portrait:py-10 4k:py-16 3k:py-13 rounded-lg py-8 flex flex-col gap-8 justify-center items-center customShadowCoreValue">
        <div className="bg-[#0C0544 w-[90%]">
          <h3 className="font-mainFont font-[700] text-[#0C0544] 2xl:text-2xl xl:text-2xl lg:text-xl md:portrait:text-xl 4k:text-xl text-lg text-start ">
            Agent Registration
          </h3>
        </div>

        <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] 4k:w-[90%] w-[100%]">
          {/* <h4 className="font-mainFont 2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-3xl 4k:text-3xl text-xl font-[700] text-secondaryColor">
            Personal Information
          </h4> */}
          <form className="w-full flex flex-col 2xl:gap-5 xl:gap-5 lg:gap-5 4k:gap-6 3k:gap-6 my-6 md:portrait:gap-4 gap-4">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="First Name*"
                  id="name"
                  onChange={handleOnChange}
                  name="firstName"
                  value={agentInfo?.firstName}
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Last Name*"
                  id="lastName"
                  onChange={handleOnChange}
                  name="lastName"
                  value={agentInfo?.lastName}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="email"
                  placeholder="Email*"
                  id="email"
                  onChange={handleOnChange}
                  name="email"
                  value={agentInfo?.email}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Phone*"
                  id="phone"
                  onChange={handleOnChange}
                  name="phone"
                  value={agentInfo?.phone}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Address Line 1*"
                  id="address"
                  onChange={handleOnChange}
                  name="address1"
                  value={agentInfo?.address1}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Address Line 2"
                  id="address2"
                  onChange={handleOnChange}
                  name="address2"
                  value={agentInfo?.address2}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="City*"
                  id="city"
                  onChange={handleOnChange}
                  name="city"
                  value={agentInfo?.city}
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="type"
                  placeholder="State*"
                  id="zipCode"
                  onChange={handleOnChange}
                  name="state"
                  value={agentInfo?.state}
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="email"
                  placeholder="Zip Code*"
                  id="zipCode"
                  onChange={handleOnChange}
                  name="zipCode"
                  value={agentInfo?.zipCode}
                />
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Recruiting Agent Number ID"
                  // id="address2"
                  onChange={handleOnChange}
                  name="recruitmentAgentCode"
                  value={agentInfo?.recruitmentAgentCode}
                />
              </div>
            </div>

            {/* <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <input
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  type="text"
                  placeholder="Recruiting Agent Email"
                  // id="address2"
                  onChange={handleOnChange}
                  name="recruitmentAgentEmail"
                  value={agentInfo?.recruitmentAgentEmail}
                />
              </div>
            </div> */}

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <select
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base focus:border-b focus:border-[#F78B2B] outline-none"
                  placeholder="Are you a licensed agent?"
                  id="hasLicense"
                  onChange={handleOnChange}
                  name="hasLicense"
                  value={agentInfo?.hasLicense}
                >
                  <option value="">Are you a licensed agent?</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex-1 w-full">
                <select
                  className="bg-transparent border-b border-[#DCDBDD] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base disabled:cursor-not-allowed disabled:opacity-50 focus:border-b focus:border-[#F78B2B] outline-none"
                  placeholder="Are you a licensed agent?"
                  id="hasLicense"
                  disabled={
                    agentInfo?.hasLicense === "false" ||
                    agentInfo?.hasLicense === ""
                      ? true
                      : false
                  }
                  onChange={handleOnChange}
                  name="licenseState"
                  value={agentInfo?.licenseState}
                >
                  <option value="">Select License State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="lowa">lowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
            </div>

            <div className="4k:mt-8 3k:mt-8">
              <button
                disabled={agentInfo.hasLicense === ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className="bg-[#0C0544] button text-white font-secondaryFont font-[500] rounded-lg px-5 py-2 w-auto 2xl:w-auto xl:w-auto lg:w-auto md:portrait:w-auto 4k:w-auto disabled:pointer-events-none disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const FormTwo = ({
  handleNext,
  handlePrevious,
  allTerms,
  handleChecked,
  handleCreateAgent,
  isLoading,
}) => {
  return (
    <>
      <div className="w-full bg-[#F5F5F8] px-5 py-7  rounded-lg flex flex-col gap-8 justify-center items-center customShadowCoreValue">
        <div className=" 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:portrait:w-[90%] 4k:w-[80%] w-[100%]">
          <h3 className="font-mainFont font-[700] text-[#0C0544] 2xl:text-xl xl:text-xl lg:text-xl md:portrait:text-xl 4k:text-2xl text-lg text-start py-3">
            Consent Statement for Agent Registration at JOptiman Consultancy
            Agency
          </h3>
        </div>

        <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] 4k:w-[90%] w-[100%] border border-[#cdcdcd]/40 2xl:p-6 xl:p-5 lg:p-5 md:portrait:p-5 4k:p-10 3k:p-10 p-4 rounded-md">
          <p className="font-secondaryFont text-base font-[400] text-paraColor">
            Consent Statement for Agent Registration at JOptiman Consultancy
            Agency By submitting this registration form, I confirm that I wish
            to register as an agent with JOptiman Consultancy Agency. I
            acknowledge and agree to the following terms:
          </p>
          <form className="w-full flex flex-col 2xl:gap-5 xl:gap-5 lg:gap-5 4k:gap-6 3k:gap-6 my-6 md:portrait:gap-4 gap-4 ">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="term1"
                  className="h-5 w-5 flex-shrink-0"
                  name="terms1"
                  onChange={handleChecked}
                />
                <p className="font-secondaryFont font-[400] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-[17px] text-paraColor">
                  1. I understand that a $50 non-refundable platform fee is
                  required to complete my registration.
                </p>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="term1"
                  className="h-5 w-5 flex-shrink-0"
                  name="terms2"
                  onChange={handleChecked}
                />
                <p className="font-secondaryFont font-[400] text-lg text-paraColor">
                  2. I consent to the processing of my personal and professional
                  information for the purposes of registration, verification,
                  and agency-related activities.
                </p>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="term1"
                  className="h-5 w-5 flex-shrink-0"
                  name="terms3"
                  onChange={handleChecked}
                />
                <p className="font-secondaryFont font-[400] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-[17px] text-paraColor">
                  3. I understand that submitting this application does not
                  guarantee approval of my registration, as it is subject to
                  JOptiman's review and acceptance criteria.
                </p>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="term1"
                  className="h-5 w-5 flex-shrink-0"
                  name="terms4"
                  onChange={handleChecked}
                />
                <p className="font-secondaryFont font-[400] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-[17px] text-paraColor">
                  4. I agree to adhere to the policies and guidelines set forth
                  by JOptiman Consultancy Agency upon successful registration.
                </p>
              </div>
            </div>
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="term1"
                  className="h-5 w-5 flex-shrink-0"
                  name="terms5"
                  onChange={handleChecked}
                />
                <p className="font-secondaryFont font-[400] 2xl:text-lg xl:text-lg lg:text-lg md:portrait:text-lg 4k:text-lg text-[17px] text-paraColor">
                  By proceeding, I confirm that I have read and understood this
                  consent statement and accept the associated terms and
                  conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 4k:mt-8 3k:mt-8">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevious();
                }}
                className="bg-[#0C0544] button text-white font-secondaryFont font-[500] rounded-lg px-5 py-2 w-auto 2xl:w-auto xl:w-auto lg:w-auto md:portrait:w-auto 4k:w-auto "
              >
                Previous
              </button>
              <button
                disabled={
                  !Object.keys(allTerms).every((key) => {
                    return Boolean(allTerms[key]);
                  })
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleCreateAgent();
                }}
                className="bg-[#0C0544] button text-white font-secondaryFont font-[500] rounded-lg px-5 py-2 w-auto 2xl:w-auto xl:w-auto lg:w-auto md:portrait:w-auto 4k:w-auto disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center gap-4"
              >
                {isLoading ? (
                  <>
                    Next <CircularProgress size={15} />
                  </>
                ) : (
                  <>

                  Next
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
