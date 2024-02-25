import { useState } from "react";
import styles from "./style.module.scss";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx";

export const Header = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  return (
    <header>
      <div className={styles.headerBox}>
        <div className="container horizon">
          <div className={styles.headerContent}>
            <div className={styles.titleBox}>
              <div></div>
              <h1 className="title">Miguel Lúcio</h1>
            </div>
            <div className={styles.HamburgerBox}>
              <button onClick={() => setHiddenMenu(!hiddenMenu)}>
                {hiddenMenu ? (
                  <RxHamburgerMenu size={18} />
                ) : (
                  <RxChevronDown size={18} />
                )}
              </button>
              {!hiddenMenu && (
                <div className={styles.HamburgerNav}>
                  <nav>
                    <a href="#profile" onClick={() => setHiddenMenu(true)}>
                      Início
                    </a>
                    <a href="" onClick={() => setHiddenMenu(true)}>
                      Projetos
                    </a>
                    <a href="" onClick={() => setHiddenMenu(true)}>
                      Contato
                    </a>
                  </nav>
                </div>
              )}
            </div>
            <div className={styles.navBox}>
              <nav>
                <a href="#profile">Início</a>
                <span>|</span>
                <a href="">Projetos</a>
                <span>|</span>
                <a href="">Contato</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
