import React, { useState, useEffect } from 'react';
import GradsConnect from "../../assets/images/GradsConnectLogo.png";
import axios from '../../axios';
import Enterpreneur from './Enterpreneur';
import HigherStudies from './HigherStudies';
import OtherDesignation from './OtherDesignation';
import PrivateGovtJob from './PrivateGovtJob';
import styles from "./Register.module.css";

const Register = () => {
    const [batches, setBatches] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [names, setNames] = useState([]);

    const [formData, setFormData] = useState(
        {
            "batch":"",
            "department":"",
            "name":"",
            "email":"",
            "address":"",
            "mobile":"",
            "linkedin":"",
            "image":"",
            "placement":"",
            "currDesignation":"",
            "currDesignationDetails":{}
        }
    );

    useEffect(() => {
        axios.get('/gradsBatchYear.json')
            .then(res => setBatches(res.data.gradsBatchYear))
            .catch(err => console.log(err));
        
        axios.get('/departments.json')
            .then(res => setDepartments(res.data.departments))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('/names.json')
            .then(res => setNames(res.data.names))
            .catch(err => console.log(err));
    }, [formData.batch, formData.department])

    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    return (
        <div className='container'>
            <div className="d-flex justify-content-around align-items-center" style={{minHeight:"80vh"}}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>SetUp Your Account </h1>

                    <div className='mb-3'>
                        <label htmlFor='batch' className='form-label'>Batch: </label>
                        <select className='form-select' value={formData.batch} name="batch" onChange={onchange} >
                            <option value="" disabled selected>Choose Batch..</option>
                            {batches.map(e => {
                                return <option value={e}>{e}</option>
                            })}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='department' className='form-label'>Batch: </label>
                        <select className='form-select' value={formData.department} name="department" onChange={onchange} >
                            <option value="" disabled selected>Choose department..</option>
                            {departments.map(e => {
                                return <option value={e}>{e}</option>
                            })}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name: </label>
                        <select className='form-select' value={formData.name} name="name" onChange={onchange} >
                            <option value="" disabled selected>Choose..</option>
                            {names.map(e => {
                                return <option value={e}>{e}</option>
                            })}
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email: </label>
                        <input className='form-control' type="email" name='email' value={formData.email} onchange={onchange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='address' className='form-label'>Address: </label>
                        <input className='form-control' type="text" name='address' value={formData.address} onchange={onchange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='mobile' className='form-label'>Contact No: </label>
                        <input className='form-control' type="tel" name='mobile' value={formData.mobile} onchange={onchange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='linkedin' className='form-label'>LinkedIn URL: </label>
                        <input className='form-control' type="url" name='linkedin' value={formData.linkedin} onchange={onchange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='image' className='form-label'>Add Photo: </label>
                        <input className='form-control' type="file" name='image' value={formData.image} onchange={onchange} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='placement' className='form-label'>Placed in Company during college placement: </label>
                        <input className='form-control' type="text" name='placement' value={formData.placement} onchange={onchange} />
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor='currDesignation' className='form-label'>Current Designation: </label>
                        <select className='form-select' value={formData.currDesignation} name="currDesignation" onChange={onchange} >
                            <option value="" disabled selected>Choose...</option>
                            <option value="Private Job">Private Job</option>
                            <option value="Govt. Job">Govt. Job</option>
                            <option value="Higher Studies">Higher Studies</option>
                            <option value="Enterpreneur">Enterpreneur</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {formData.currDesignation==="Private Job" || formData.currDesignation==="Govt. Job"?(
                        <PrivateGovtJob formData={formData} setFormData={setFormData} />
                    ):(
                        formData.currDesignation==="Higher Studies"?(
                            <HigherStudies formData={formData} setFormData={setFormData} />
                        ):(
                            formData.currDesignation==="Enterpreneur"?(
                                <Enterpreneur formData={formData} setFormData={setFormData} />
                            ):(
                                formData.currDesignation==="other"?(
                                    <OtherDesignation formData={formData} setFormData={setFormData} />
                                ):(
                                    <></>
                                )
                            )
                        )
                    )}

                    <button className='btn btn-success'>Submit</button>
                </div>

                <div className={styles.logodiv}>
                <img src={GradsConnect} alt="" className="logo" />
                </div>
            </div>
        </div>
    )
}

export default Register