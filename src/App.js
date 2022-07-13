import { useCallback, useState } from "react";
import data from "./data.json";
import ListPage from "./pages/ListPage";
import Category from "./components/Category";

const App = () => {
  const [list, setList] = useState(data);
  const filterCategory = useCallback(
    (name) => {
      // console.log("check name: ", name);
      const list_category = data.filter((item) => item.category === name);
      setList(list_category);
    },
    []
  );
  return (
    <>
      <Category filterCategory={filterCategory} />
      <ListPage list={list} />
    </>
  );
};

export default App;
