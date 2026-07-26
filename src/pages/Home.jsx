import { useLanguage } from "../context/LanguageContext";

import TeamCard from "../components/TeamCard";
import ProjectCard from "../components/ProjectCard";

import team from "../data/team";
import projects from "../data/projects";

function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section>
        <h1>{t("homeTitle")}</h1>

        <p>{t("homeSubtitle")}</p>
      </section>

      <section>
        <h2>{t("ourTeam")}</h2>

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
        <h2>{t("ourProjects")}</h2>

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