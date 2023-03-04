import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='Card'>
      <div className="text">{props.title}</div>
      <div className="details">
        <span>{props.date}</span>
        <i class="fa-solid fa-trash" onClick={props.DeleteText}></i>
      </div>
    </div>
  )
}
