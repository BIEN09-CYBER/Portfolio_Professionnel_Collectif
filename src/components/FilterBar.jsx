function FilterBar({ selectedCategory, onSelectCategory }) {
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
          onClick={() => onSelectCategory(category)}
          className={
            selectedCategory === category ? "active-filter" : ""
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;