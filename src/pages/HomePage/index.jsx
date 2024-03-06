import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ProjectList } from "../../components/ProjectList";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <ProjectList />
        <Contact />
      </main>
    </>
  );
};
