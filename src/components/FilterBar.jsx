import { useLanguage } from "../context/LanguageContext";

function FilterBar({ selectedCategory, onSelectCategory }) {
  const { t } = useLanguage();

  const categories = [
    "Tous",
    "Frontend",
    "Backend",
    "Full Stack",
  ];

  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "active-filter"
              : ""
          }
          onClick={() => onSelectCategory(category)}
        >
          {category === "Tous" && t("all")}
          {category === "Frontend" && t("frontend")}
          {category === "Backend" && t("backend")}
          {category === "Full Stack" && t("fullstack")}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;