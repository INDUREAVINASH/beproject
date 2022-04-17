import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import styles from "./Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  let { slug } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/events`)
      .then((res) => {
        if (slug === "present") {
          setEvents(
            res.data.filter((item) => {
              if (
                Math.abs(
                  (new Date() - new Date(item.dateTime)) / (3600000 * 24)
                ) < 7
              ) {
                return true;
              }
            })
          );
        } else if (slug === "past") {
          setEvents(
            res.data.filter((item) => {
              if ((new Date() - new Date(item.dateTime)) / (3600000 * 24) > 7) {
                return true;
              }
            })
          );
        } else {
          setEvents(
            res.data.filter((item) => {
              if (
                (new Date() - new Date(item.dateTime)) / (3600000 * 24) <
                -7
              ) {
                return true;
              }
            })
          );
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  const handleClick = (item) => {
    navigate(`/event/${item.id}`);
  };

  return (
    <>
      <div className="container">
        <h2 className={`py-3 ${styles.heading}`}>{slug} Events</h2>
        <div className="row">
          {events.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`card m-2 ${styles.eventsCard}`}
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.imgURL}
                  className={`card-img-top ${styles.img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {item.title}
                  </h5>
                  <p className="card-text">
                    {item.description.slice(0, 150)}...
                  </p>
                  <p className={styles.dateTime}>
                    {slug === "past"
                      ? "Published on"
                      : slug === "future"
                      ? "Be Ready On"
                      : ""}{" "}
                    {item.dateTime}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
