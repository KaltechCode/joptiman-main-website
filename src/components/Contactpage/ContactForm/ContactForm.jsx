import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

export const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const BASE__URL = import.meta.env.VITE__BASE_URL;

      const saveContactInfo = await axios.post(
        `${BASE__URL}/api/contactUs`,
        {
          name: contactInfo?.name,
          email: contactInfo?.email,
          subject: contactInfo?.subject,
          message: contactInfo?.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(saveContactInfo?.data.message);
      console.log(saveContactInfo.data);
      setIsLoading(false);
      setContactInfo({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error?.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="2xl:min-h-[70dvh] xl:min-h-[70dvh] lg:min-h-[70dvh] md:portrait:min-h-[40dvh] 4k:min-h-[40dvh] 3k:min-h-[40dvh] flex justify-center items-center md:portrait:py-8 4k:py-24 3k:py-28 xl:py-28">
      <div className="max-w-[1920px] mx-auto flex justify-center items-center w-full">
        <div className="flex justify-center items-center 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:portrait:w-[90%] 4k:w-[90%] w-[95%]">
          <div className="bg-[#F5F5F8] customShadow  2xl:w-[80%] xl:w-[90%] lg:w-[70%] 4k:w-[80%] md:portrait:w-[85%] w-[95%] 2xl:p-12 xl:p-10 lg:p-4  md:portrait:p-5 p-3 4k:p-16 shadow-sm rounded-lg flex justify-start items-start flex-col gap-3">
            <div>
              <h3 className="font-mainFont font-[700] 2xl:text-2xl xl:text-2xl lg:text-2xl md:portrait:text-2xl 4k:text-2xl text-xl text-[#040B1E]">
                Get in touch with our agents
              </h3>
            </div>
            <div className="w-full flex flex-col gap-4">
              {/* <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row md:portrait:flex-row  justify-between items-center gap-4">
                <div className="flex-1 w-full">
                  <input
                    className="bg-[#fff] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base"
                    type="text"
                    placeholder="Your Name*"
                    id="name"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleOnchange}
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    className="bg-[#fff] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base"
                    type="email"
                    placeholder="Your Email*"
                    id="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 w-full">
                  <input
                    className="bg-[#fff] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base"
                    type="text"
                    placeholder="Subject*"
                    id="subject"
                    name="subject"
                    value={contactInfo.subject}
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <div className="w-full">
                <textarea
                  rows={6}
                  placeholder="Enter Message*"
                  id="message"
                  name="message"
                  value={contactInfo.message}
                  onChange={handleOnchange}
                  className="bg-[#fff] placeholder:text-[#767676] w-full px-4 py-3 font-[400] font-secondaryFont text-base"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  disabled={
                    !Object.keys(contactInfo).every((key) => {
                      return Boolean(contactInfo[key]);
                    })
                  }
                  onClick={handleSubmit}
                  className="bg-[#0C0544] button text-white font-secondaryFont font-[500] rounded-lg px-5 py-2 w-full 2xl:w-auto xl:w-auto lg:w-auto md:portrait:w-auto 4k:w-auto disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none flex justify-center items-center gap-4"
                >
                  {isLoading ? (
                    <>
                      Send Message <CircularProgress size={16} />
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </div> */}

              {/* <iframe
                src="https://links.joptiman.com/widget/form/DcSNuabnhYuJRnvOy544"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                }}
                id="inline-DcSNuabnhYuJRnvOy544"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="JOPT | Form | Contact US"
                data-height="undefined"
                data-layout-iframe-id="inline-DcSNuabnhYuJRnvOy544"
                data-form-id="DcSNuabnhYuJRnvOy544"
                title="JOPT | Form | Contact US"
              ></iframe> */}

              <iframe
                src="https://links.joptiman.com/widget/form/p4GA2ewOR6Lfh8unh9vb"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                }}
                id="inline-p4GA2ewOR6Lfh8unh9vb"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="JOPT Contact US - Update"
                data-height="893"
                data-layout-iframe-id="inline-p4GA2ewOR6Lfh8unh9vb"
                data-form-id="p4GA2ewOR6Lfh8unh9vb"
                title="JOPT Contact US - Update"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
