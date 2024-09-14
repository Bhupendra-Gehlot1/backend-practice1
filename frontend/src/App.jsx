import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Frontend + Backend</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.title}</p>
          <p>{joke.description}</p>
        </div>
      ))}
      {console.log(jokes)}
    </>
  );
}

export default App;
