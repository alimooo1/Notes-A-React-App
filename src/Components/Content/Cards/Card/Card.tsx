import React, { MouseEventHandler } from "react";
import "./Card.css";

interface props {
  title : string,
  date: string,
  DeleteText: MouseEventHandler<HTMLDivElement>
}

export default function Card({ title, date, DeleteText }:props) {
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
