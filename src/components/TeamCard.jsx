import { useLanguage } from "../context/LanguageContext";

function TeamCard({ member }) {
  const { language, t } = useLanguage();

  return (
    <article className="team-card">
      <img
        src={member.photo}
        alt={typeof member.name === "string" ? member.name : member.name[language]}
        width="180"
        height="180"
      />

      <h3>
        {typeof member.name === "string"
          ? member.name
          : member.name[language]}
      </h3>

      <p>
        <strong>{t("role")} :</strong> {member.role}
      </p>

      <p>{member.bio[language]}</p>
    </article>
  );
}

export default TeamCard;