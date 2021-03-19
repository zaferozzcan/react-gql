import "./App.css";
import "./custom.scss";
import github from "./db.js";
import githubQuery from "./Query.js";
import React, { useEffect, useState, useCallback } from "react";

function App() {
  let [userName, setUserName] = useState("");

  let fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data.data.viewer.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
      <h1>Hey there {userName}</h1>
    </div>
  );
}

export default App;
