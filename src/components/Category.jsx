import React from "react";

const Category = ({ filterCategory }) => {
  //   console.log("re-render Component Category");
  return (
    <div className="category">
      <button onClick={() => filterCategory("Document")}>Document</button>
      <button onClick={() => filterCategory("Design UI")}>Design UI</button>
      <button onClick={() => filterCategory("Dev")}>Dev</button>
      <button onClick={() => filterCategory("Internet")}>Internet</button>
      <button onClick={() => filterCategory("Cartoon Lovely")}>
        Cartoon Lovely
      </button>
      <button onClick={() => filterCategory("Cat Lovely")}>Cat Lovely</button>
      <button onClick={() => filterCategory("Noel")}>Noel</button>
      <button onClick={() => filterCategory("Game")}>Game</button>
    </div>
  );
};

export default React.memo(Category);
