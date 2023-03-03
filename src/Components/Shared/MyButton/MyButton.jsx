import React from 'react'
import "./MyButton.css"

export default function MyButton(props) {
  return (
    <button className='MyButton'>{props.title}</button>
  )
}
