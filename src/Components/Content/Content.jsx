import React, { useState, useRef } from "react";
import Cards from "./Cards/Cards";
import "./Content.css";
import AddInput from "./AddInput/AddInput";
import SearchInput from "../SearchInput/SearchInput";

function Content() {
  const database = JSON.parse(localStorage.getItem("data") || []);

  const [notes, setNotes] = useState(database);
  const [search, setSearch] = useState([]);
  const [inSearch, setInSearch] = useState(false);
  const [currentSearchValue, setCurrentSearchValue] = useState("");
  const inputRef = useRef(null);

  const date = new Date();
  const showTime = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  const saveTextHandler = (event) => {
    if (event.target.parentElement.previousElementSibling.value !== "") {
      const newNote = {
        text: event.target.parentElement.previousElementSibling.value,
        date: `${date.getFullYear()}-${showTime(date.getMonth())}-${showTime(
          date.getDate()
        )}`,
      };
      event.target.parentElement.previousElementSibling.value = "";
      setNotes([...notes, newNote]);
      localStorage.setItem("data", JSON.stringify([...notes, newNote]));
    } else {
      alert("Fill the input first :)");
    }
  };

  const deleteTextHandler = (deleteIndex) => {
    console.log(deleteIndex);
    notes.splice(deleteIndex, 1);
    setInSearch(false);
    inputRef.current.value = "";
    setNotes([...notes]);
    localStorage.setItem("data", JSON.stringify([...notes]));
  };

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    setCurrentSearchValue(searchValue);
    const searchedArray = notes.filter((note) => {
      return note.text.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setInSearch(false);
    } else {
      setInSearch(true);
      setSearch(searchedArray);
    }
  };

  return (
    <React.Fragment>
      <SearchInput
        Ref={inputRef}
        Value={currentSearchValue}
        Change={searchHandler}
      />
      <div className="Content">
        <AddInput SaveText={saveTextHandler} />
        <Cards
          Notes={inSearch ? search : notes}
          DeleteText={(index) => deleteTextHandler(index)}
        />
      </div>
    </React.Fragment>
  );
}

export default Content;
