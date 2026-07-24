import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article>
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <Link to={`/projets/${project.id}`}>
        Voir les détails
      </Link>
    </article>
  );
}

export default ProjectCard;