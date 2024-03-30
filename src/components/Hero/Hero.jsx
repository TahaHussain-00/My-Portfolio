import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utlis";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Taha Hussain</h1>
        <p className={styles.description}>
          I am a Pre-Final Year Computer Science Engineering Student and a
          Aspiring MERN Stack Developer
        </p>
        <a href="" className={styles.resumeBtn}>
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
