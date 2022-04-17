import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateEmail from "../../component/EmailValidator";

const SetNewPassword = ({ setMsg }) => {
    const [formData, setFormData] = useState({"email":"","password":"", "newPass":"", "confirmNewPass":""});

    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    let navigate = useNavigate();

    const handleSubmit = () => {
        if(formData.email==="" || formData.password==="" || formData.newPass==="" || formData.confirmNewPass===""){
            setMsg("All fields are required")
        } else if(validateEmail(formData.email)){
            setMsg("Enter Valid Email");
        } else if(formData.newPass!==formData.confirmNewPass){
            setMsg("Passwords are not matched!")
        } else {
            // if success
            navigate("/login");
        }
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email :</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password :</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="newPass" className="form-label">New Password :</label>
                <input type="password" className="form-control" name="newPass" value={formData.newPass} onChange={onchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmNewPass" className="form-label">Confirm New Password :</label>
                <input type="password" className="form-control" name="confirmNewPass" value={formData.confirmNewPass} onChange={onchange} />
            </div>

            <button className='btn btn-primary' onClick={handleSubmit}>Activate</button>
        </div>
    )
}

export default SetNewPassword