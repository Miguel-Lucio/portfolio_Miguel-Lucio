import styles from "./style.module.scss";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.contactBox}>
        <div className="container horizon">
          <div className={styles.contactContent}>
            <div className={styles.titleBox}>
              <h2 className="title three bold green">Contato</h2>
              <p className="text black">Vamos conversar sobre suas ideias!</p>
            </div>
            <nav className={styles.navBox}>
              <div className={styles.iconBox}>
                <div className={styles.whatsapp}>
                  <FaWhatsapp color="#ffffff" size={24} />
                </div>
                <div className={styles.textContent}>
                  <h3 className="title black bold">Whatsapp</h3>
                  <p className="text body black">(12)99181-1919</p>
                  <a
                    className="text grey bold"
                    href="https://wa.me/5512991811919"
                    target="_blank"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>
              <div className={styles.iconBox}>
                <div className={styles.mail}>
                  <IoIosMail color="#ffffff" size={24} />
                </div>
                <div className={styles.textContent}>
                  <h3 className="title black bold">Email</h3>
                  <p className="text body black">miguelluciosilva@gmail.com</p>
                  <a
                    className="text grey bold"
                    href="mailto:miguelluciosilva@gmail.com"
                    target="_blank"
                  >
                    Enviar email
                  </a>
                </div>
              </div>
              <div className={styles.iconBox}>
                <div className={styles.linkedin}>
                  <FaLinkedin color="#ffffff" size={24} />
                </div>
                <div className={styles.textContent}>
                  <h3 className="title black bold">Linkedin</h3>
                  <p className="text body black">in/miguelluciosilva</p>
                  <a
                    className="text grey bold"
                    href="https://www.linkedin.com/in/miguelluciosilva/"
                    target="_blank"
                  >
                    Conectar-se
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
