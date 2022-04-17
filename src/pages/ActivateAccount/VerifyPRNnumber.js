import React, { useState } from 'react'

const VerifyPRNnumber = ({openNewEmailPage, setMsg }) => {
    const [PRNnumber, setPRNnumber] = useState("");

    const verifyPRNnumber = () => {
        // verify mothers name 
        if(PRNnumber.length==9){
            openNewEmailPage();
        } else {
            setMsg("PRN Numbar must be NINE character long")
        }
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="PRNnumber" className="form-label">PRN Numbar :</label>
                <input type="text" className="form-control" name="PRNnumber" value={PRNnumber} onChange={e => setPRNnumber(e.target.value)} />
            </div>
            <button className='btn btn-primary' onClick={verifyPRNnumber}>Proceed</button>
        </div>
    )
}

export default VerifyPRNnumber