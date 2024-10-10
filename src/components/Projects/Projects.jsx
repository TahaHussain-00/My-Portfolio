import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utlis";
import styles from  './Projects.module.css';

const Projects = () => {
  
  return (
    <section className={styles.container} id="Projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.container1}>
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`{Image of ${project.title}}`}
              className={styles.img} />
              <h3 className={styles.title1}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                   return (<li key={id} className={styles.skill}>{skill}</li>
                   );
                })}
              </ul>
              <div className={styles.links}>
                <a href={project.source} className={styles.link}> source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
