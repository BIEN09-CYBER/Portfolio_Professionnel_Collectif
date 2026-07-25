import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        width="250"
        height="160"
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <Link to={`/projets/${project.id}`}>
        Voir les détails
      </Link>
    </article>
  );
}

export default ProjectCard;