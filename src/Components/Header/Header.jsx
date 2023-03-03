import React from 'react'
import MyButton from '../Shared/MyButton/MyButton'
import "./Header.css"

export default function Header() {
  return (
    <div className='Header'>
      <span>Notes</span>
      <MyButton title="Dark Mode"/>
    </div>
  )
}
