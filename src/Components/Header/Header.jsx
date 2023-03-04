import React, {useState, useEffect} from 'react'
import MyButton from '../Shared/MyButton/MyButton'
import "./Header.css"
import "./dark-mode.css"
export default function Header() {
  
  let [isLight, setFlag] = useState(false)

  const darkModeHandler = (isLight) => {
    document.querySelector("body").classList.toggle("dark")
    isLight ? setFlag(false) : setFlag(true)
  }

  
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setFlag(true)
      document.querySelector("body").classList.add("dark")
    }
  }, []) 

  
  useEffect(() => {
    localStorage.setItem("theme" , isLight ? "dark" : "light")
  }, [isLight]) 
  

  return (
    <div className='Header'>
      <span>Notes</span>
      <MyButton title={isLight ? "Light Mode" : "Dark Mode"} click={()=>darkModeHandler(isLight)}/>
    </div>
  )
}
