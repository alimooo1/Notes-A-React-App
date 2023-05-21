import React, { useState } from "react";
import "./AddInput.css";

export default function MyInput({ SaveText, Value, Change }) {
  const [charLength, setCharLength] = useState(100);
  // const charLengthHandler = (event) => {};

  const changeHandler = (event) => {
    setCharLength(100 - event.target.value.length);
    Change(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    setCharLength(100);
    SaveText();
  };

  return (
    <div className="my-input">
      <form onSubmit={saveHandler}>
        <textarea
          name="addInput"
          id=""
          value={Value}
          placeholder="Type Your Text Here..."
          onChange={changeHandler}
          maxLength="100"
        ></textarea>
        <div className="details">
          <span>{charLength} Remains</span>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
