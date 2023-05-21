import React, { useState, useRef } from "react";
import Cards from "./Cards/Cards";
import "./Content.css";
import AddInput from "./AddInput/AddInput";
import SearchInput from "../SearchInput/SearchInput";

const showTime = (time) => {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};

function Content() {
  const database = JSON.parse(localStorage.getItem("data") || []);
  const [notes, setNotes] = useState(database);

  const [search, setSearch] = useState([]);
  const [inSearch, setInSearch] = useState(false);
  const [currentSearchValue, setCurrentSearchValue] = useState("");
  const searchInputRef = useRef(null);

  const [currentAddValue, setCurrentAddValue] = useState("");

  const saveTextHandler = () => {
    if (currentAddValue !== "") {
      const date = new Date();
      const newNote = {
        text: currentAddValue,
        date: `${date.getFullYear()}-${showTime(date.getMonth())}-${showTime(
          date.getDate()
        )}`,
      };
      setCurrentAddValue("");
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
    searchInputRef.current.value = "";
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
        Ref={searchInputRef}
        Value={currentSearchValue}
        Change={searchHandler}
      />
      <div className="Content">
        <AddInput
          SaveText={saveTextHandler}
          Value={currentAddValue}
          Change={setCurrentAddValue}
        />
        <Cards
          Notes={inSearch ? search : notes}
          DeleteText={(index) => deleteTextHandler(index)}
        />
      </div>
    </React.Fragment>
  );
}

export default Content;
