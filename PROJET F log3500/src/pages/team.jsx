import "../styles/team.css";

const members = [
  {
    id: 1,
    name: "Chrisling Bijoux",
    role: "UI / HTML / CSS",
    image: "/images/chrisling.jpg",
    description:
      "Responsable de l'interface utilisateur, du design responsive et de l'accessibilité."
  },
  {
    id: 2,
    name: "Nom Étudiant 2",
    role: "React & Routing",
    image: "/images/member2.jpg",
    description:
      "Responsable des composants React, du routage et de la logique côté client."
  },
  {
    id: 3,
    name: "Nom Étudiant 3",
    role: "Backend",
    image: "/images/member3.jpg",
    description:
      "Responsable du serveur Express, des API et du déploiement."
  }
];

function Team() {
  return (
    <section className="team">
      <div className="container">

        <h2 className="team-title">Notre Équipe</h2>

        <p className="team-subtitle">
          Découvrez les membres de notre équipe et leurs responsabilités.
        </p>

        <div className="team-grid">

          {members.map((member) => (
            <article className="team-card" key={member.id}>

              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />

              <div className="team-content">

                <h3 className="team-name">
                  {member.name}
                </h3>

                <p className="team-role">
                  {member.role}
                </p>

                <p className="team-description">
                  {member.description}
                </p>

                <div className="team-social">
                  <a href="#" aria-label="GitHub">
                    GH
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    IN
                  </a>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;