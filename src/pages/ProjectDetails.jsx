import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <h2>Projet introuvable.</h2>;
  }

  return (
    <section>
      <h1>{project.title}</h1>

      <p>{project.description}</p>
    </section>
  );
}

export default ProjectDetails;