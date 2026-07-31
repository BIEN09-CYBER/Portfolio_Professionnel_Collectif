import { useParams } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const { language, t } = useLanguage();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return <h2>{t("found")}</h2>;
  }

  return (
    <section className="project-details">
      <h1>{project.title[language]}</h1>

      <img
        src={project.image}
        alt={project.title[language]}
        className="project-details-image"
      />

      <p>
        <strong>{t("category")} :</strong> {project.category}
      </p>

      <p>{project.description[language]}</p>
    </section>
  );
}

export default ProjectDetails;