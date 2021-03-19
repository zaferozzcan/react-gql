import "./App.css";
import "./custom.scss";
import github from "./db.js";
import githubQuery from "./Query.js";
import React, { useEffect, useState, useCallback } from "react";

function App() {
  let [userName, setUserName] = useState("");
  let [repoList, setRepoList] = useState([]);

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
        setRepoList(data.data.viewer.repositories.nodes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log("repoList", repoList);
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
