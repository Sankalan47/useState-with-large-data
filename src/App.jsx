import { useEffect, useState, useTransition } from "react";
import "./App.css";
import List from "./List";
import { MOCKDATA } from "./mockData";

function App() {
  const [isPending, startTransition] = useTransition();
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setUsers(MOCKDATA);
  }, []);

  const handleChange = async (e) => {
    setKeyword(e.target.value);
    startTransition(() => {
      setResult(
        users.length &&
          users.filter((item) => item.name.includes(e.target.value))
      );
    });
  };

  return (
    <>
      <h1>Search Users</h1>
      <div className="card">
        <input value={keyword} onChange={handleChange} />
        <h2>Searching for: {keyword}</h2>
        {isPending ? (
          <h1>Loading...</h1>
        ) : (
          result.length &&
          keyword &&
          result.map((item) => <List key={item?.id} item={item} />)
        )}
      </div>
    </>
  );
}

export default App;
