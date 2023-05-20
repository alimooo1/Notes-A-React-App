import React from "react";
import "./Card.css";

export default function Card({ title, date, DeleteText }) {
  return (
    <div className="Card">
      <div className="text">{title}</div>
      <div className="details">
        <span>{date}</span>
        <i className="fa-solid fa-trash" onClick={DeleteText}></i>
      </div>
    </div>
  );
}
