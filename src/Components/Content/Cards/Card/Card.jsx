import React from 'react'
import "./Card.css"

const date = new Date();
const showTime = (time) => {
  if(time <10) {
    return "0" + time
  } else {
    return time
  }
}

export default function Card(props) {
  return (
    <div className='Card'>
      <div className="text">{props.title}</div>
      <div className="details">
        <span>{`${date.getFullYear()}-${showTime(date.getMonth())}-${showTime(date.getDate())}`}</span>
        <i class="fa-solid fa-trash" onClick={props.DeleteText}></i>
      </div>
    </div>
  )
}
