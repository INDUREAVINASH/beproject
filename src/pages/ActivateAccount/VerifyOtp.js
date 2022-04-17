import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const VerifyOtp = ({ setMsg, setPasswordPage, otpFor }) => {
    const [otp, setOtp] = useState();

    let navigate = useNavigate();

    const verifyOTP = () => {
        // if success
        if(otp<4){
            setMsg("Enter Valid OTP")
            return
        }
        if(otpFor==="acctivateAccount"){
            setPasswordPage();
        }
        else if(otpFor==="newEmail"){
            setMsg("OTP Verified Successfully");
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }

    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP :</label>
                <input type="number" className="form-control" name="otp" value={otp} onChange={e => setOtp(e.target.value)} />
            </div>
            <button className='btn btn-primary' onClick={verifyOTP}>Verify Otp</button>
        </div>
    )
}

export default VerifyOtp;