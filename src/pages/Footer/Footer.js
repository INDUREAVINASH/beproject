import React from "react";
import styles from "./Footer.module.css";
import facbook from "../../assets/icons/facebook.png";
import linked_in from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import gmail from "../../assets/icons/gmail.png";
import youtube from "../../assets/icons/youtube.png";
import instagram from "../../assets/icons/instagram.png";


const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/">
             <img className={styles.icon} src={facbook} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
             <img className={styles.icon} src={linked_in} alt="" />
          </a>
          <a href="https://twitter.com/">
             <img className={styles.icon} src={twitter} alt="" />
          </a>
          <a href="https://www.google.com">
             <img className={styles.icon} src={gmail} alt="" />
          </a>
          <a href="https://www.youtube.com">
             <img className={styles.icon} src={youtube} alt="" />
          </a>
          <a href="https://www.instagram.com/">
             <img className={styles.icon} src={instagram} alt="" />
          </a>
          <p className={styles.companyName}>
            COPYRIGHT &copy; 2021, GRADS CONNECT
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
