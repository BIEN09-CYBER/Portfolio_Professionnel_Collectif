import { useEffect, useState } from "react";

import { useLanguage } from "../context/LanguageContext";

import TeamCard from "../components/TeamCard";
import team from "../data/team";

import { getUser } from "../services/githubService";

function Equipe() {
  const { t } = useLanguage();

  const [githubUser, setGithubUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGithubUser() {
      try {
        const data = await getUser(member.github);
        setGithubUser(data);
      } catch {
        setError(t("githubError"));
      }
    }

    loadGithubUser();
  }, [t]);

  return (
    <section>
      <h1>{t("teamTitle")}</h1>

      <p>{t("teamSubtitle")}</p>

      <div className="cards-grid">
        {team.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}
      </div>

      <section>
        <h2>{t("githubProfile")}</h2>

        {error && <p>{error}</p>}

        {!githubUser && !error && (
          <p>{t("loadingGithub")}</p>
        )}

        {githubUser && (
          <article className="team-card">
            <img
              src={githubUser.avatar_url}
              alt={githubUser.login}
            />

            <h3>
              {githubUser.name || githubUser.login}
            </h3>

            <p>
              {t("github")} : {githubUser.login}
            </p>

            <p>
              {t("followers")} : {githubUser.followers}
            </p>

            <p>
              {t("repositories")} : {githubUser.public_repos}
            </p>
          </article>
        )}
      </section>
    </section>
  );
}

export default Equipe;