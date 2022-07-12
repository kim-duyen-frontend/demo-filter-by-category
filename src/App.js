import ListPage from "./pages/ListPage";
import data from "./data.json";

function App() {
  return (
    <>
      <ListPage list={data} />
    </>
  );
}

export default App;
