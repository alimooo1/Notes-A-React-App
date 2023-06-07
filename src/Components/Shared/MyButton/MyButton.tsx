import React, { MouseEventHandler } from "react";
import "./MyButton.css";

interface props {
  click : MouseEventHandler,
  title : string
}

export default function MyButton({ click, title }: props) {
  return (
    <button className="MyButton" onClick={click}>
      {title}
    </button>
  );
}
