import styles from "./style.module.scss";
import { projectsData } from "../../data/projectsData/index.js";
import { ProjectCard } from "./ProjectCard/index.jsx";

export const ProjectList = () => {
  return (
    <section id="projects">
      <div className={styles.listBox}>
        <div className="container horizon">
          <div className={styles.titleBox}>
            <h2 className="title three center">Projetos</h2>
            <p className="text  base center">
              Originalidade e
              <span className="text  yellow center"> dedicação</span> em cada
              detalhe
            </p>
          </div>
          <ul className={styles.listContent}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
