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
        const data = await getUser();
        setGithubUser(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadGithubUser();
  }, []);

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
        <h2>GitHub</h2>

        {error && <p>{error}</p>}

        {!githubUser && !error && (
          <p>Chargement GitHub...</p>
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
              GitHub : {githubUser.login}
            </p>

            <p>
              Followers : {githubUser.followers}
            </p>

            <p>
              Repositories publics : {githubUser.public_repos}
            </p>
          </article>
        )}
      </section>
    </section>
  );
}

export default Equipe;