import { useEffect, useState } from "react";

import TeamCard from "../components/TeamCard";
import team from "../data/team";

import { getUser } from "../services/githubService";


function Equipe() {

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

      <h1>Notre équipe</h1>

      <p>
        Découvrez les membres du groupe ainsi que leurs compétences.
      </p>


      <div className="cards-grid">

        {team.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}

      </div>


      <section>

        <h2>Profil GitHub</h2>

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