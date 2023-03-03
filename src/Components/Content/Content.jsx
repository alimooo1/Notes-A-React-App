import React, { useState } from 'react';
import Cards from './Cards/Cards';
import './Content.css';
import MyInput from './MyInput/MyInput';

export default function Content() {
  let database = null
  // const database = [
  //   { text: 'Berim Ye Chizi bokhorim Namoosan' },
  //   { text: 'Kheili Goshname' },
  //   { text: 'Ye nahaaram nemidan dahan servisaa' },
  //   { text: 'Baba mordim' },
  // ];
  if (JSON.parse(localStorage.getItem("data"))) {
    database = JSON.parse(localStorage.getItem("data"))
  } else {
    database = []
  }

  const [notes, setNotes] = useState(database);
  const [search, setSearch] = useState([])
  const [inSearch, setFlag] = useState(false)

  const saveTextHandler = (event) => {
    if(event.target.parentElement.previousElementSibling.value !== ""){
      const newNote = { text: event.target.parentElement.previousElementSibling.value };
      event.target.parentElement.previousElementSibling.value = ""
      setNotes([...notes, newNote]);
      localStorage.setItem("data" , JSON.stringify([...notes, newNote]))
    } else {
      alert("Fill the input first :)")
    }
  };

  const deleteTextHandler = (event) => {
    console.log(event.target.parentElement.previousElementSibling.innerText);
    const deleteIndex = notes.findIndex((data)=> {
      return data.text === event.target.parentElement.previousElementSibling.innerText
    })
    notes.splice(deleteIndex,1)
    setNotes([...notes]);
    localStorage.setItem("data" , JSON.stringify([...notes]))
  }

  const searchHandler = (event) => {
    const searchedArray = notes.filter((note)=>{
      return note.text.toLowerCase().includes(event.target.value)
    })
    console.log(searchedArray);
    if (event.target.value === "") {
      setFlag(false)
    } else {
      setFlag(true)
      setSearch([...searchedArray])
    }
  }

  return (
    <React.Fragment>
      <input type="text" placeholder='Search Your Texts Here:' onKeyUp={searchHandler}/>
      <div className="Content">
        <MyInput SaveText={saveTextHandler} />
        <Cards Notes={inSearch ? search : notes} DeleteText={deleteTextHandler}/>
      </div>
    </React.Fragment>
  );
} 