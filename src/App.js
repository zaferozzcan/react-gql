import "./App.css";
import "./custom.scss";
import github from "./db.js";
import githubQuery from "./Query.js";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  let [userName, setUserName] = useState("");
  let [repoList, setRepoList] = useState([]);
  let [queryString, setQueryString] = useState("react");

  let fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery(queryString)),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data.data.viewer.name);
        setRepoList(data.data.search.nodes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [queryString]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
      <h1>
        <i className="bi bi-person-bounding-box"></i> {userName}
      </h1>
      <div className="repo-list-container container">
        <h1>REPOLIST</h1>
        {repoList &&
          repoList.map((item, index) => {
            return (
              <div key={index} className="repo">
                <h5>{item.name}</h5>
                <Button
                  variant={
                    item.viewerSubscription === "SUBSCRIBED"
                      ? "success"
                      : "secondary"
                  }
                >
                  {item.viewerSubscription}
                </Button>
                <p>{item.url}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
