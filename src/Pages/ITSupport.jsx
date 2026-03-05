import React, { useRef } from "react";
import { Navbar } from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";
import "../styles/support.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../components/IT/ErroMgs";

const schema = yup.object().shape({
  Name_First: yup
    .string()
    .required("First and Last Name are required")
    .label("First Name"),
  Name_Last: yup.string().required("Last Name is required").label("Last Name"),
  Email: yup
    .string()
    .email("Invalid email")
    .required("First and Last Name are required")
    .label("Email Address"),
  SingleLine: yup
    .string()
    .required("Agent Code is required")
    .label("Agent Code"),
  SingleLine1: yup.string().required("Subject is required").label("Subject"),
  PhoneNumber_countrycode: yup
    .number()
    .required("Phone number is required")
    .label("Phone Number"),
  MultiLine: yup.string().required("Message is required").label("Message"),
});

function ITSupport() {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onValidSubmit = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="zf-backgroundBg">
        <div className="zf-templateWidth">
          <form
            ref={formRef}
            action="https://forms.zohopublic.com/kaltechConsultancy/form/TechnicalSupport/formperma/R1kZXXOoGbKPcF0e51kpVbTLeeRx4ZTSZOJ8XlSbvYo/htmlRecords/submit"
            name="form"
            method="POST"
            onSubmit={handleSubmit(onValidSubmit)}
            accept-charset="UTF-8"
            enctype="multipart/form-data"
            id="form"
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <div className="zf-templateWrapper">
              <ul className="zf-tempHeadBdr">
                <li className="zf-tempHeadContBdr">
                  <h2 className="zf-frmTitle">
                    <em>Technical Support</em>
                  </h2>
                  <p className="zf-frmDesc"></p>
                  <div className="zf-clearBoth"></div>
                </li>
              </ul>
              <div className="zf-subContWrap zf-topAlign">
                <ul>
                  <div className="zf-tempFrmWrapper zf-section">
                    <h2>Technical Support</h2>
                    <p></p>
                  </div>
                  <div className="zf-tempFrmWrapper zf-name  zf-namelarge">
                    <label className="zf-labelName">
                      Name
                      <em className="zf-important"> *</em>
                    </label>
                    <div className="zf-tempContDiv zf-twoType">
                      <div className="zf-nameWrapper">
                        <span>
                          {" "}
                          <input type="text" {...register("Name_First")} />
                          <label>First Name </label>{" "}
                        </span>
                        <span>
                          {" "}
                          <input type="text" {...register("Name_Last")} />
                          <label>Last Name </label>{" "}
                        </span>
                        <div className="zf-clearBoth"></div>
                      </div>
                      {errors.Name_First ||
                        (errors.Name_Last && (
                          <ErrorMsg msg={errors.Name_First?.message} />
                        ))}
                    </div>
                    <div className="zf-clearBoth"></div>
                  </div>
                  <div className="zfgrid_Wrapper">
                    <div className="zftwoColumn zfMultiColGrid">
                      <div className="zfCol">
                        <div className="zf-tempFrmWrapper  zf-large ">
                          <label className="zf-labelName">
                            Email
                            <em className="zf-important"> *</em>
                          </label>
                          <div className="zf-tempContDiv">
                            <span>
                              <input type="text" {...register("Email")} />{" "}
                            </span>
                            <ErrorMsg msg={errors.Email?.message} />
                          </div>
                          <div className="zf-clearBoth"></div>
                        </div>
                        <div className="zf-tempFrmWrapper  zf-large ">
                          <label className="zf-labelName">
                            Agent Code
                            <em className="zf-important"> *</em>
                          </label>
                          <div className="zf-tempContDiv">
                            <span>
                              <input
                                type="text"
                                {...register("SingleLine")}
                              />{" "}
                            </span>
                            <ErrorMsg msg={errors.SingleLine?.message} />
                          </div>
                          <div className="zf-clearBoth"></div>
                        </div>
                      </div>
                      <div className="zfCol">
                        <div className="zf-tempFrmWrapper zf- zf-large ">
                          <label className="zf-labelName">
                            {" "}
                            Phone Number
                            <em className="zf-important"> *</em>
                          </label>
                          <div className="zf-tempContDiv zf-phonefld">
                            <div className="zf-phwrapper zf-phNumber">
                              <span>
                                <input
                                  type="text"
                                  compname="PhoneNumber"
                                  {...register("PhoneNumber_countrycode")}
                                />
                              </span>
                              <div className="zf-clearBoth"></div>
                            </div>
                            <ErrorMsg
                              msg={errors.PhoneNumber_countrycode?.message}
                            />
                          </div>
                          <div className="zf-clearBoth"></div>
                        </div>
                        <div className="zf-tempFrmWrapper  zf-large ">
                          <label className="zf-labelName">
                            Subject
                            <em className="zf-important"> *</em>
                          </label>
                          <div className="zf-tempContDiv">
                            <span>
                              <input
                                type="text"
                                {...register("SingleLine1")}
                              />{" "}
                            </span>
                            <ErrorMsg msg={errors.SingleLine1?.message} />
                          </div>
                          <div className="zf-clearBoth"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="zf-tempFrmWrapper  zf-large ">
                    <label className="zf-labelName">
                      Please describe the technical problem you are facing
                    </label>
                    <div className="zf-tempContDiv">
                      <span>
                        <textarea {...register("MultiLine")}></textarea>{" "}
                      </span>
                      <ErrorMsg msg={errors.MultiLine?.message} />
                    </div>
                    <div className="zf-clearBoth"></div>
                  </div>
                </ul>
              </div>
              <ul>
                <li className="zf-fmFooter">
                  <button className="zf-submitColor" type="submit">
                    Submit
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ITSupport;
