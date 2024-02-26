import styles from "./style.module.scss";
import profileImg from "../../assets/profile.jpg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
} from "react-icons/si";

export const Profile = () => {
  return (
    <section id="profile">
      <div className={styles.profileBox}>
        <div className="container">
          <div className={styles.techBox}>
            <div className={styles.profileContent}>
              <img src={profileImg} alt="Miguel" />
              <div className={styles.textBox}>
                <h2 className="title four green">Olá!</h2>
                <div className={styles.textContent}>
                  <p className="title three green">Eu sou o Miguel</p>
                  <div>
                    <p className="text black">
                      Desenvolvedor Full Stack formado pela Kenzie Academy
                      Brasil e estudante de Engenharia da Computação na UNIVESP.
                    </p>
                    <p className="text black">
                      Apaixonado por tecnologia, amo desafios e estou sempre em busca de
                      aperfeiçoamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.techContent}>
              <SiHtml5 color="#868E96" size={46} />
              <SiCss3 color="#868E96" size={46} />
              <SiJavascript color="#868E96" size={46} />
              <SiTypescript color="#868E96" size={46} />
              <SiReact color="#868E96" size={46} />
              <SiNodedotjs color="#868E96" size={46} />
              <SiPython color="#868E96" size={46} />
              <SiDjango color="#868E96" size={46} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
