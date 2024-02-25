import styles from "./style.module.scss";
import profileImg from "../../assets/profile.jpg";

export const Profile = () => {
  return (
    <section id="profile">
      <div className={styles.profileBox}>
        <div className="container">
          <div className={styles.profileContent}>
            <img src={profileImg} alt="Miguel" />
            <div className={styles.textBox}>
              <h2 className="title four green">Olá!</h2>
              <div className={styles.textContent}>
                <p className="title three green">Eu sou o Miguel</p>
                <div>
                  <p className="text black">
                    Desenvolvedor Full Stack formado pela Kenzie Academy Brasil
                    e estudante de Engenharia da Computação na UNIVESP.
                  </p>
                  <p className="text black">
                    Proativo, amo desafios e estou sempre em busca de
                    aperfeiçoamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
