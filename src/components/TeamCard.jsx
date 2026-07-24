function TeamCard({ member }) {
  return (
    <article>
      <h3>{member.name}</h3>

      <p>
        <strong>Rôle :</strong> {member.role}
      </p>

      <p>{member.bio}</p>
    </article>
  );
}

export default TeamCard;