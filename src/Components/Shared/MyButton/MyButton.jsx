import React from "react";
import "./MyButton.css";

export default function MyButton({ click, title }) {
  return (
    <button className="MyButton" onClick={click}>
      {title}
    </button>
  );
}
