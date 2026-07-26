import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return <h2>Projet introuvable.</h2>;
  }

  return (
    <section className="project-details">
      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="project-details-image"
      />

      <p>
        <strong>Catégorie :</strong> {project.category}
      </p>

      <p>{project.description}</p>
    </section>
  );
}

export default ProjectDetails;