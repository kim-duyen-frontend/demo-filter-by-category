import { useCallback, useState } from "react";
import data from "./data.json";
import ListPage from "./pages/ListPage";
import Category from "./components/Category";
import CategoryAuthor from "./components/CategoryAuthor";

const App = () => {
  const [list, setList] = useState(data);
  const filterCategory = useCallback((name) => {
    // console.log("check name: ", name);
    const list_category = data.filter((item) => item.category === name);
    setList(list_category);
  }, []);
  const filterCategoryAuthor = (nameAuthor) => {
    console.log("check author: ", nameAuthor);
    const list_category_author = data.filter(
      (item) => item.author === nameAuthor
    );
    setList(list_category_author);
  };
  return (
    <>
      <h2>Danh mục sản phẩm</h2>
      <Category filterCategory={filterCategory} />
      <h2>Danh mục tác giả</h2>
      <CategoryAuthor filterCategoryAuthor={filterCategoryAuthor} />
      <ListPage list={list} />
    </>
  );
};

export default App;
