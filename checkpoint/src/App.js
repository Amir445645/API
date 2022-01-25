import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList.js";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>UserList</h1>

      <UserList data={data} />
    </div>
  );
}

export default App;
