import React, { useState } from 'react'

const HigherStudies = ({ formData, setFormData }) => {
  const [higherStudiesData, setHigherStudiesData] = useState(
    {
      "university":"",
      "address":"",
      "course":"",
      "specialization":"",
      "specialAchievement":"",
      "yearOfAchievement":"",
      "proofOfAchievement":""
    })

  const onchange = (e) => {
    setHigherStudiesData({...higherStudiesData, [e.target.name]:e.target.value});
    setFormData({...formData, "currDesignationDetails":higherStudiesData})
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="university" className="form-label">University</label>
        <input type="text" className="form-control" name='university' value={higherStudiesData.university} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" name='address' value={higherStudiesData.address} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="course" className="form-label">Course Name</label>
        <input type="text" className="form-control" name='course' value={higherStudiesData.course} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="specialization" className="form-label">Specialization</label>
        <input type="file" className="form-control" name='specialization' value={higherStudiesData.specialization} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="specialAchievement" className="form-label">Special Achievement</label>
        <input type="text" className="form-control" name='specialAchievement' value={higherStudiesData.specialAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="yearOfAchievement" className="form-label">Year Of Achievement</label>
        <input type="number" className="form-control" name='yearOfAchievement' value={higherStudiesData.yearOfAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="proofOfAchievement" className="form-label">Proof Of Achievement</label>
        <input type="file" className="form-control" name='proofOfAchievement' value={higherStudiesData.proofOfAchievement} onChange={onchange} />
      </div>
    </div>
  )
}

export default HigherStudies