import "./App.css";
import "./custom.scss";
import github from "./db.js";
import React, { useEffect, useState } from "react";

function App() {
  let [userName, setUserName] = useState("");
  useEffect(() => {
    const githubQuery = {
      query: `
      {
        viewer{
          name
        }
      }
      `,
    };
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.data.viewer.name);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i> Repos
      </h1>
    </div>
  );
}

export default App;
