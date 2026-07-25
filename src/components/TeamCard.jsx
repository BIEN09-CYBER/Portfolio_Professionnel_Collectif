function TeamCard({ member }) {
  return (
    <article className="team-card">
      <img
        src={member.photo}
        alt={member.name}
        width="180"
        height="180"
      />

      <h3>{member.name}</h3>

      <p>
        <strong>Rôle :</strong> {member.role}
      </p>

      <p>{member.bio}</p>
    </article>
  );
}

export default TeamCard;