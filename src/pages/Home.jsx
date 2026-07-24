import TeamCard from "../components/TeamCard";
import ProjectCard from "../components/ProjectCard";

import team from "../data/team";
import projects from "../data/projects";

function Home() {
  return (
    <>
      <section>
        <h1>Bienvenue sur notre Portfolio Professionnel Collectif</h1>

        <p>
          Découvrez notre équipe, nos compétences et les projets réalisés durant
          notre formation.
        </p>
      </section>

      <section>
        <h2>Notre équipe</h2>

        <div className="cards-grid">

          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Nos projets</h2>

        <div className="cards-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;