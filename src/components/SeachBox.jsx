import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "../App.css";

export default function SeachBox() {
  let [string, setString] = useState("");
  console.log(string);
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Search in the repo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="form-control"
          onChange={(event) => {
            setString(event.target.value);
          }}
        />
      </InputGroup>
    </>
  );
}
