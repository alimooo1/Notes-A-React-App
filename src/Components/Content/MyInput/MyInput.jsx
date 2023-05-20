import React, { useState } from "react";
import "./MyInput.css";

export default function MyInput({ SaveText }) {
  const [charLength, setCharLength] = useState(100);
  const charLengthHandler = (event) => {
    setCharLength(100 - event.target.value.length);
  };

  const saveHandler = (event) => {
    setCharLength(100);
    SaveText(event);
  };

  return (
    <div className="my-input">
      <textarea
        name=""
        id=""
        placeholder="Type Your Text Here..."
        onChange={charLengthHandler}
        maxLength="100"
      ></textarea>
      <div className="details">
        <span>{charLength} Remains</span>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}
