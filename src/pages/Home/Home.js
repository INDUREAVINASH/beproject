import React, { useEffect, useState } from "react";
import logo from "../../assets/images/GradsConnectLogo.png";
import styles from "./Home.module.css";
import axios from "../../axios";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/testimonials`)
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`container ${styles.homeContainer}`}>
      <img className={styles.logo} src={logo} alt="logo" />

      <div
        id="carouselExampleControls"
        className="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {testimonials.map((item, index) => {
            return (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div>
                  <div className={styles.card}>
                    <div className={styles.cardThumb}>
                      <img src={item.src} alt="" className={styles.clientImg} />
                    </div>
                    <div className={styles.cardBody}>
                      <p className={styles.review}>{item.description}</p>
                      <div className={styles.rating}>
                        <span>- {item.name}</span>
                        <span className={styles.designation}>
                          {item.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className={styles.nextIcon}>&#8250;</span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
