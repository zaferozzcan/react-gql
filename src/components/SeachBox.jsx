import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "../App.css";

export default function SeachBox(props) {
  let [string, setString] = useState("");
  function submitString(string) {
    props.setString(string);
  }

  return (
    <>
      <InputGroup className="mb-3" onSubmit={submitString}>
        <InputGroup.Prepend>
          <InputGroup.Text>Search in the repo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="form-control"
          onChange={(event) => {
            setString(event.target.value);
            submitString(string);
          }}
        />
      </InputGroup>
    </>
  );
}
