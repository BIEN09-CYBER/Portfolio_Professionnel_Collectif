import TeamCard from "../components/TeamCard";
import team from "../data/team";

function Equipe() {
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
    </section>
  );
}

export default Equipe;