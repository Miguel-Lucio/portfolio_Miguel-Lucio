import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import styles from "./style.module.scss";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
    </>
  );
};
