import React, { useState } from "react";
import styles from "./Login.module.css";
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80vh" }}
      >
        <div className={styles.left}>
          <h1 className={styles.heading}>Login</h1>

          {/* form */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={onchange}
            />
          </div>

          {/* btns */}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleLogin}
            >
              LogIn
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password?
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/activateAccount")}
            >
              Activate account
            </button>
          </div>
        </div>

        <div className={styles.logodiv}>
          <img src={GradsConnect} alt="" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
