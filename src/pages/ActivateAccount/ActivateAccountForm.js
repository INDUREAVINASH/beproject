import React, { useEffect, useState } from "react";
import axios from "../../axios";

const ActivateAccountForm = ({ setMsg, activeOtpPage, openPRNnumberPage }) => {
  const [batches, setBatches] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [prns, setPrns] = useState([]);

  const [batch, setBatch] = useState("");
  const [department, setDepartment] = useState("");
  const [prn, setPrn] = useState("");
  const [students, setStudents] = useState("");

  useEffect(() => {
    axios
      .get("/gradsBatchYear.json")
      .then((res) => setBatches(res.data.gradsBatchYear))
      .catch((err) => console.log(err));

    axios
      .get("/departments.json")
      .then((res) => setDepartments(res.data.departments))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/students/${batch}`)
      .then((res) => {
        setPrns(res.data.map((item) => item.prn));
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, [batch, department]);

  const handleSentOtp = () => {
    //  if success
    if (batch === "" || department === "" || prn === "") {
      setMsg("Please Fill All Details!");
    } else {
      const email = students.filter(function (s) {
        if (s.prn === prn) {
          return true;
        }
      })[0].email;
      const otp = Math.floor(Math.random() * 1001) + 1000;

      axios
        .post("http://localhost:8080/email", {
          email,
          text: `Otp for account activation - ${otp}`,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      activeOtpPage(otp, prn, email);
    }
  };

  const handleChangeEmail = () => {
    if (batch === "" || department === "" || prn === "") {
      setMsg("Please Fill All Details!");
    } else {
      openPRNnumberPage(prn);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="batch" className="form-label">
          Batch:{" "}
        </label>
        <select
          className="form-select"
          value={batch}
          name="batch"
          onChange={(e) => {
            setBatch(e.target.value);
            setPrn("");
          }}
          required
        >
          <option value="" disabled selected>
            Choose Batch..
          </option>
          {batches.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">
          Department:
        </label>
        <select
          className="form-select"
          value={department}
          name="department"
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="" disabled selected>
            Choose department..
          </option>
          {departments.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="prn" className="form-label">
          PRN:{" "}
        </label>
        <select
          className="form-select"
          value={prn}
          name="prn"
          onChange={(e) => setPrn(e.target.value)}
          required
        >
          <option value="" disabled selected>
            Choose..
          </option>
          {prns.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>

      {/* btns */}
      <div className="d-flex justify-content-around">
        <button
          type="submit"
          className="btn btn-primary"
          name="sent"
          onClick={handleSentOtp}
        >
          Send OTP
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleChangeEmail}
        >
          Change Email
        </button>
      </div>
    </div>
  );
};

export default ActivateAccountForm;
