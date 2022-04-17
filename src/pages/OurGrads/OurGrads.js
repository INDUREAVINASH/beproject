import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./OurGrads.module.css";

// import axios from "../../axios";
import axios from "axios";

const OurGrads = () => {
  let { year } = useParams();

  const [batchItems, setBatchItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/students/${year}`)
      .then((res) => setBatchItems(res.data))
      .catch((err) => console.log(err));
  }, [year]);

  let headerText = `Batch ${year}`;
  return (
    <div className="container">
      {headerText && <span className={styles.headerText}>{headerText}</span>}
      <div className="row">
        {batchItems.map((items, index) => {
          return (
            <div className={`col-md-3 py-3 ${styles.cardBox}`} key={index}>
              <div className={styles.card}>
                <div className={styles.front}>
                  {/* <img src={items.imageSrc} alt="person" /> */}
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/grades-connect.appspot.com/o/${items.prn}.jpeg?alt=media`}
                    alt="personfsfs"
                    onerror="onerror=null; this.src='/logo192.png'"
                  />
                  <br></br>
                  <span>
                    <p>{items.name}</p>
                    <p>{items.department}</p>
                    <p>{items.email}</p>
                    <p>
                      <a href={items.linkedIn}>LinkedIn</a>
                    </p>
                    <p>
                      <u>College Of Placement :</u>
                      <br />
                      {items.clgPlacement}
                    </p>
                  </span>
                </div>
                <div className={styles.back}>
                  <span>
                    <p>
                      <u>Current Designnation :</u>
                      <br />
                      {items.designation}
                    </p>
                    <p>
                      <u>Organisation :</u>
                      <br />
                      {items.organisation}
                    </p>
                    <p>
                      <u>Place of Organisation :</u>
                      <br />
                      <p>{items.placeOrganisation}</p>
                    </p>
                    <p>
                      <u>Area of Work :</u>
                      <br />
                      {items.areaWork}
                    </p>
                    <p>
                      <u>Achievement :</u>
                      <br />
                      {items.achievement}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurGrads;
