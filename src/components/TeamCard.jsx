function TeamCard({ member }) {
  return (
    <article>
      <img
        src={member.photo}
        alt={member.name}
        width="180"
      />

      <h3>{member.name}</h3>

      <p>{member.role}</p>

      <p>{member.bio}</p>
    </article>
  );
}

export default TeamCard;