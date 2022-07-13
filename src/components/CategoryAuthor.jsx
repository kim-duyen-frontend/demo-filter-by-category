import React from "react";

const CategoryAuthor = ({ filterCategoryAuthor }) => {
  return (
    <div>
      <button onClick={() => filterCategoryAuthor("Leanne Graham")}>
        Leanne Graham
      </button>
      <button onClick={() => filterCategoryAuthor("Ervin Howell")}>
        Ervin Howell
      </button>
      <button onClick={() => filterCategoryAuthor("Kurtis Weissnat")}>
        Kurtis Weissnat
      </button>
      <button onClick={() => filterCategoryAuthor("Patricia Lebsack")}>
        Patricia Lebsack
      </button>
      <button onClick={() => filterCategoryAuthor("La Kiến Vinh")}>
        La Kiến Vinh
      </button>
    </div>
  );
};

export default CategoryAuthor;
