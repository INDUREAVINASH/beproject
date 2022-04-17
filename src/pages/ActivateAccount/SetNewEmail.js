import React, { useState } from 'react';
import validateEmail from "../../component/EmailValidator"

const SetNewEmail = ({ activeOtpPage, setMsg }) => {
    const [email, setEmail] = useState("");

    const sendOtp = () => {
        // save email and send otp
        if(email!=="" && validateEmail(email)){
            activeOtpPage();
        } else {
            setMsg("Please Enter Valid Email")
        }
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email :</label>
                <input type="email" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button className='btn btn-primary' onClick={sendOtp}>Send Otp</button>
        </div>
    )
}

export default SetNewEmail