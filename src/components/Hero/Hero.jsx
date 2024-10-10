import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utlis";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Taha Hussain</h1>
        <p className={styles.description}>
          I am a Final Year Computer Science Engineering Student and a
          Aspiring MERN Stack Developer 
        </p>
        <a href="https://drive.google.com/file/d/13B3QYSN6YnqAgWlmCEj9flc82vqu561E/view?usp=sharing" target="blank" className={styles.resumeBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/ProfilePic.jpg")}
        alt="hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
