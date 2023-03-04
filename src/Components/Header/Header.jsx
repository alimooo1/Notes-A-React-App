import React, {useState} from 'react'
import MyButton from '../Shared/MyButton/MyButton'
import "./Header.css"
import "./dark-mode.css"

export default function Header() {
  let [isLight, setFlag] = useState(true)

  const darkModeHandler = (isLight) => {
    document.querySelector("body").classList.toggle("dark")
    isLight ? setFlag(false) : setFlag(true)
  }

  return (
    <div className='Header'>
      <span>Notes</span>
      <MyButton title={isLight ? "Dark Mode" : "Light Mode"} click={()=>darkModeHandler(isLight)}/>
    </div>
  )
}
