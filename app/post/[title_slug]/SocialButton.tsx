import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import styles from "./page.module.css";

const SocialButton = () => {
  return (
    <>
      <div className={styles.logo_buttons_container}>
        <FaWhatsapp className={`${styles.whatsapp} p-1`} size={25} />
        <FaLinkedin className={`${styles.linkedin} p-1`} size={25} />
        <FaInstagram className={`${styles.instagram} p-1`} size={25} />
        <FaX className={`${styles.twitter} p-1`} size={25} />
      </div>
    </>
  );
};

export default SocialButton;
