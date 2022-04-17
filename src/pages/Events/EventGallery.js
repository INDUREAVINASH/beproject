import React, { useEffect, useState } from "react";
import axios from "../../axios";
import styles from "./Events.module.css";

const EventGallery = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("./eventImages.json")
      .then((res) => {
        setTitle(res.data.title);
        setImages(res.data.images);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h4 className={styles.title}>{title}</h4>
      <div className="row">
        {images.map((item, index) => {
          return <img src={item} alt="" className={styles.gallerImg} />;
        })}
      </div>
    </div>
  );
};

export default EventGallery;
