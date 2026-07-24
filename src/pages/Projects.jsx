import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section>
      <h1>Nos projets</h1>

      <p>
        Voici les principaux projets réalisés par notre équipe.
      </p>

      <div className="cards-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;