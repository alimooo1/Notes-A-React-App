import React, { useState, useRef } from 'react';
import Cards from './Cards/Cards';
import './Content.css';
import MyInput from './MyInput/MyInput';

export default function Content() {
  let database = null

  if (JSON.parse(localStorage.getItem("data"))) {
    database = JSON.parse(localStorage.getItem("data"))
  } else {
    database = []
  }

  const date = new Date();
  const showTime = (time) => {
    if(time <10) {
      return "0" + time
    } else {
      return time
    }
  }

  const [notes, setNotes] = useState(database);
  const [search, setSearch] = useState([])
  const [inSearch, setFlag] = useState(false)

  const saveTextHandler = (event) => {
    if (event.target.parentElement.previousElementSibling.value !== ""){
      const newNote = { text: event.target.parentElement.previousElementSibling.value,
                        date : `${date.getFullYear()}-${showTime(date.getMonth())}-${showTime(date.getDate())}` };
      event.target.parentElement.previousElementSibling.value = ""
      setNotes([...notes, newNote]);
      localStorage.setItem("data" , JSON.stringify([...notes, newNote]))
    } else {
      alert("Fill the input first :)")
    }
  };

  const deleteTextHandler = (event) => {
    const deleteIndex = notes.findIndex((data)=> {
      return data.text === event.target.parentElement.previousElementSibling.innerText
    })
    notes.splice(deleteIndex,1)
    setFlag(false)
    inputRef.current.value = ""
    setNotes([...notes]);
    localStorage.setItem("data" , JSON.stringify([...notes]))
  }

  const searchHandler = () => {
    const searchedArray = notes.filter((note)=>{
      return note.text.toLowerCase().includes(inputRef.current.value.toLowerCase())
    })
    if (inputRef.current.value === "") {
      setFlag(false)
    } else {
      setFlag(true)
      setSearch([...searchedArray])
    }
  }

  const inputRef = useRef(null)

  return (
    <React.Fragment>
      <input type="text" placeholder='Search Your Texts Here:' onKeyUp={searchHandler} ref={inputRef}/>
      <div className="Content">
        <MyInput SaveText={saveTextHandler} />
        <Cards Notes={inSearch ? search : notes} DeleteText={deleteTextHandler}/>
      </div>
    </React.Fragment>
  );
} 