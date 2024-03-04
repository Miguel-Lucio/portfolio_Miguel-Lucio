import styles from "./style.module.scss";
import { IoLogoGithub, IoIosLink } from "react-icons/io";

export const ProjectCard = ({ project }) => {
  return (
    <li>
      <div className={styles.cardContent}>
        <h3 className="title two">{project.name}</h3>
        <ul className={styles.techsContent}>
          {project.techs.map((tech) => (
            <li key={tech} className="text black">
              {tech}
            </li>
          ))}
        </ul>
        <p className="text base">{project.description}</p>
        <div className={styles.linkBox}>
          {project.repo ? (
            <a href={project.repo} target="_blank">
              <IoLogoGithub color="#f1f0f0" size={21} />
              <span className="text">Repositório</span>
            </a>
          ) : null}
          {project.deploy ? (
            <a href={project.deploy} target="_blank">
              <IoIosLink color="#f1f0f0" size={21} />
              <span className="text">Aplicação</span>
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
};
