import React, { useState } from 'react'

const Enterpreneur = ({ formData, setFormData }) => {
  const [enterpreneurData, setEnterpreneurData] = useState(
    {
      "organisation":"",
      "placeOfWork":"",
      "address":"",
      "idProof":"",
      "products":"",
      "specialAchievement":"",
      "yearOfAchievement":"",
      "proofOfAchievement":""
    }
  );

  const onchange = (e) => {
    setEnterpreneurData({...enterpreneurData, [e.target.name]:e.target.value});
    setFormData({...formData, "currDesignationDetails":enterpreneurData})
  }

  return (
    <div>

      <div className="mb-3">
        <label htmlFor="organisation" className="form-label">Organisation</label>
        <input type="text" className="form-control" name='organisation' value={enterpreneurData.organisation} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="placeOfWork" className="form-label">Place Of Work</label>
        <input type="text" className="form-control" name='placeOfWork' value={enterpreneurData.placeOfWork} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" name='address' value={enterpreneurData.address} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="idProof" className="form-label">ID Proof</label>
        <input type="file" className="form-control" name='idProof' value={enterpreneurData.idProof} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="products" className="form-label">Products</label>
        <input type="text" className="form-control" name='products' value={enterpreneurData.products} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="specialAchievement" className="form-label">Special Achievement</label>
        <input type="text" className="form-control" name='specialAchievement' value={enterpreneurData.specialAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="areaOfWork" className="form-label">Year Of Achievement</label>
        <input type="text" className="form-control" name='yearOfAchievement' value={enterpreneurData.yearOfAchievement} onChange={onchange} />
      </div>

      <div className="mb-3">
        <label htmlFor="proofOfAchievement" className="form-label">Proof Of Achievement</label>
        <input type="file" className="form-control" name='proofOfAchievement' value={enterpreneurData.proofOfAchievement} onChange={onchange} />
      </div>

    </div>
  )
}

export default Enterpreneur