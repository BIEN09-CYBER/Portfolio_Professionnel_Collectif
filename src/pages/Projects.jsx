import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar";

import projects from "../data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section>
      <h1>Nos projets</h1>

      <p>
        Voici les principaux projets réalisés par notre équipe.
      </p>

      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="cards-grid">
        {filteredProjects.map((project) => (
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