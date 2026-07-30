import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function ProjectCard({ project }) {
  const { language, t } = useLanguage();

  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title[language]}
        width="250"
        height="160"
      />

      <h3>{project.title[language]}</h3>

      <p>{project.description[language]}</p>

      <Link to={`/projets/${project.id}`}>
        {t("seeDetails")}
      </Link>
    </article>
  );
}

export default ProjectCard;