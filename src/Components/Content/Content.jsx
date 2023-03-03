import React, { useState } from 'react';
import Cards from './Cards';
import './Content.css';
import MyInput from './MyInput/MyInput';

export default function Content() {
  const database = [
    { text: 'Berim Ye Chizi bokhorim Namoosan' },
    { text: 'Kheili Goshname' },
    { text: 'Ye nahaaram nemidan dahan servisaa' },
    { text: 'Baba mordim' },
  ];

  const [notes, setNotes] = useState(database);

  const saveTextHandler = (event) => {
    if(event.target.parentElement.previousElementSibling.value !== ""){
      const newNote = { text: event.target.parentElement.previousElementSibling.value };
      event.target.parentElement.previousElementSibling.value = ""
      setNotes([...notes, newNote]);
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
  }

  return (
    <div className="Content">
      <MyInput SaveText={saveTextHandler} />
      <Cards Notes={notes} DeleteText={deleteTextHandler}/>
    </div>
  );
}
