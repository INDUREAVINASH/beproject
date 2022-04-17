import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import styles from "./Events.module.css";

const EventBox = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/data/events.json")
      .then((res) =>
        res.data.events.map((e) => (e.id === id ? setData(e) : ""))
      );
  }, [id]);

  return (
    <div className="container">
      <div className={styles.box}>
        <div className="d-flex">
          <div className={styles.left}>
            <img src={data.imgURL} alt="" className={styles.img} />
            <h4 className={styles.title}>{data.title}</h4>
            <div>
              <u>Guests:</u>
              <p>{data.guests}</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <u>Link:</u>
              <p>{data.links}</p>
            </div>
          </div>

          <div className={styles.right}>
            <div>
              <h4>About</h4>
              <p>{data.description}</p>
            </div>
            <div className={styles.button}>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/event-gallery/${data.id}`)}
              >
                Gallery
              </button>
            </div>
          </div>
        </div>
        <div className={styles.dateTime}>
          {data.status === "past"
            ? "Published on"
            : data.status === "future"
            ? "Be Ready On"
            : ""}{" "}
          {data.dateTime}
        </div>
      </div>
    </div>
  );
};

export default EventBox;
