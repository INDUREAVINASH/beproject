import React, { useState } from "react";
import styles from "./ActivateAccount.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import ActivateAccountForm from "./ActivateAccountForm";
import VerifyOtp from "./VerifyOtp";
import SetNewPassword from "./SetNewPassword";
import VerifyPRNnumber from "./VerifyPRNnumber";
import SetNewEmail from "./SetNewEmail";

const ActivateAccount = () => {
  const [isActivateAcPage, setIsActivateAcPage] = useState(true);
  const [isOtpPage, setIsOtpPage] = useState(false);
  const [isSetPassPage, setIsSetPassPage] = useState(false);
  const [isPRNnumberPage, setIsPRNnumberPage] = useState(false);
  const [isSetNewEmailPage, setIsSetNewEmailPage] = useState(false);

  const [otpFor, setOtpFor] = useState("");

  const [msg, setMsg] = useState("");
  const [heading, setHeading] = useState("Activate Your Account");

  const openPRNnumberPage = () => {
    setIsActivateAcPage(false);
    setIsPRNnumberPage(true);
    setHeading("Enter PRN Number");
  };

  const openNewEmailPage = () => {
    setIsPRNnumberPage(false);
    setIsSetNewEmailPage(true);
    setHeading("Enter New Email");
  };

  const activeOtpPage = (otp, prn, email) => {
    if (isSetNewEmailPage) {
      setIsSetNewEmailPage(false);
      setOtpFor("newEmail");
    } else {
      setIsActivateAcPage(false);
      setOtpFor("acctivateAccount");
    }
    setIsOtpPage(true);
    setMsg("OTP sent succesfully!");
    setHeading("Verify OTP");
  };

  const setPasswordPage = () => {
    setIsOtpPage(false);
    setMsg("Login Credentials sent to your Email Id");
    setIsSetPassPage(true);
    setHeading("Set New Password");
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          {msg && (
            <div className="alert alert-success d-flex justify-content-between align-items-center">
              {msg}
              <button type="button" className="btn" onClick={() => setMsg("")}>
                X
              </button>
            </div>
          )}
          <h1 className={styles.heading}>{heading}</h1>

          {isActivateAcPage ? (
            <ActivateAccountForm
              setMsg={setMsg}
              activeOtpPage={activeOtpPage}
              openPRNnumberPage={openPRNnumberPage}
            />
          ) : isOtpPage ? (
            <VerifyOtp
              setMsg={setMsg}
              setPasswordPage={setPasswordPage}
              otpFor={otpFor}
            />
          ) : isSetPassPage ? (
            <SetNewPassword setMsg={setMsg} />
          ) : isPRNnumberPage ? (
            <VerifyPRNnumber
              setMsg={setMsg}
              openNewEmailPage={openNewEmailPage}
            />
          ) : isSetNewEmailPage ? (
            <SetNewEmail setMsg={setMsg} activeOtpPage={activeOtpPage} />
          ) : (
            <></>
          )}
        </div>

        <div className={styles.logodiv}>
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
