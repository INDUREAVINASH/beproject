import React, { useState } from 'react'

const OtherDesignation = ({ formData, setFormData }) => {
  const [otherDesignationData, setOtherDesignationData] = useState(
    {
      "organisation":"",
      "placeOfWork":"",
      "areaOfWork":"",
      "idProof":"",
      "specialAchievement":"",
      "yearOfAchievement":"",
      "proofOfAchievement":""
    });
  
  const onchange = (e) => {
    setOtherDesignationData({...otherDesignationData, [e.target.name]:e.target.value});
    setFormData({...formData, "currDesignationDetails":otherDesignationData})
  }
  return (
    <div>

      <div className="mb-3">
        <label htmlFor="organisation" className="form-label">Organisation</label>
        <input type="text" className="form-control" name='organisation' value={otherDesignationData.organisation} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="placeOfWork" className="form-label">Place Of Work</label>
        <input type="text" className="form-control" name='placeOfWork' value={otherDesignationData.placeOfWork} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="areaOfWork" className="form-label">Area Of Work</label>
        <input type="text" className="form-control" name='areaOfWork' value={otherDesignationData.areaOfWork} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="idProof" className="form-label">ID Proof</label>
        <input type="file" className="form-control" name='idProof' value={otherDesignationData.idProof} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="specialAchievement" className="form-label">Special Achievement</label>
        <input type="text" className="form-control" name='specialAchievement' value={otherDesignationData.specialAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="areaOfWork" className="form-label">Year Of Achievement</label>
        <input type="text" className="form-control" name='yearOfAchievement' value={otherDesignationData.yearOfAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="proofOfAchievement" className="form-label">Proof Of Achievement</label>
        <input type="file" className="form-control" name='proofOfAchievement' value={otherDesignationData.proofOfAchievement} onChange={onchange} />
      </div>

    </div>
  )
}

export default OtherDesignation