import React, { useState } from 'react'

const PrivateGovtJob = ({ formData, setFormData }) => {
    const [jobFormData, setJobFormData] = useState(
        {
            "currentComapany":"",
            "placeOfWork":"",
            "areaOfWork":"",
            "idProof":"",
            "specialAchievement":"",
            "yearOfAchievement":"",
            "proofOfAchievement":""
        }
    );

    const onchange = (e) => {
        setJobFormData({...jobFormData, [e.target.name]:e.target.value});
        setFormData({...formData, "currDesignationDetails":jobFormData});
    }

    return (
        <div>

            <div className='mb-3'>
                <label htmlFor='placement' className='form-label'>Current Company: </label>
                <input className='form-control' type="text" name='placement' value={jobFormData.currentComapany} onchange={onchange} />
            </div>

            <div className='mb-3'>
                <label htmlFor='placeOfWork' className='form-label'>Place Of Work: </label>
                <input className='form-control' type="text" name='placeOfWork' value={jobFormData.placeOfWork} onchange={onchange} />
            </div>

            <div className='mb-3'>
                <label htmlFor='areaOfWork' className='form-label'>Area Of Work: </label>
                <input className='form-control' type="text" name='areaOfWork' value={jobFormData.areaOfWork} onchange={onchange} />
            </div>
            
            <div className='mb-3'>
                <label htmlFor='idProof' className='form-label'>ID Proof: </label>
                <input className='form-control' type="file" name='idProof' value={jobFormData.idProof} onchange={onchange} />
            </div>

            <div className='mb-3'>
                <label htmlFor='specialAchievement' className='form-label'>Special Achievement: </label>
                <input className='form-control' type="text" name='specialAchievement' value={jobFormData.specialAchievement} onchange={onchange} />
            </div>

            <div className='mb-3'>
                <label htmlFor='yearOfAchievement' className='form-label'>Year Of Achievement: </label>
                <input className='form-control' type="text" name='yearOfAchievement' value={jobFormData.yearOfAchievement} onchange={onchange} />
            </div>

            <div className='mb-3'>
                <label htmlFor='proofOfAchievement' className='form-label'>Proof Of Achievement: </label>
                <input className='form-control' type="file" name='proofOfAchievement' value={jobFormData.proofOfAchievement} onchange={onchange} />
            </div>

        </div>
    )
}

export default PrivateGovtJob