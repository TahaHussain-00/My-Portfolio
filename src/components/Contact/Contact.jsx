import React from "react";
import { getImageUrl } from "../../utlis";
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer className={styles.container} id="Contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Lets Connect</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:tahahussain883@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/tahahussain11/">Linkedin</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/TahaHussain-00">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
