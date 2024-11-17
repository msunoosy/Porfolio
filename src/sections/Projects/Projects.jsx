import styles from "./ProjectStyles.module.css";
import Viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/projectCard";
import Freshburger from "../../assets/fresh-burger.png";
import Hipster from "../../assets/hipsster.png";
import Fitness from "../../assets/fitlift.png";
 

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={Viberr} h3="Viber" p="Streaming App" />
        <ProjectCard src={Freshburger} h3="Freshburger" p="Restuarant app" />
        <ProjectCard src={Hipster} h3="Hipster" p="Sunglass store" />
        <ProjectCard src={Fitness} h3="Fitness" p="Fitness App" />
      </div>
    </section>
  );
}

export default Projects;
