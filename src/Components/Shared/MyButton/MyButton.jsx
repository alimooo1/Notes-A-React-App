import React from 'react'
import "./MyButton.css"

export default function MyButton(props) {
  return (
    <button className='MyButton' onClick={props.click}>{props.title}</button>
  )
}
