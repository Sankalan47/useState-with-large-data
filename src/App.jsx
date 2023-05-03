import { useEffect, useState } from "react";
import "./App.css";
import MockList from "./MockList";
import { MOCKDATA } from "./fakeData";

function App() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setProducts(MOCKDATA);
  }, []);

  const handleChange = async (e) => {
    setKeyword(e.target.value);
    setResult(
      products.length &&
        products.filter((item) => item.name.includes(e.target.value))
    );
  };

  return (
    <>
      <h1>Search Products</h1>
      <div className="card">
        <input value={keyword} onChange={handleChange} />
        <p>Searching for: {keyword}</p>
        {result.length &&
          keyword &&
          result.map((item) => <MockList key={item?.id} item={item} />)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
