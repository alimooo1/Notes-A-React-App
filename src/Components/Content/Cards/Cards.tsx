import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { notes } from "../../../interfaces/Interfaces";

interface props {
  Notes : notes[],
  DeleteText: Function
}


export default function Cards({ Notes, DeleteText } : props) {
  let [notes, setNotes] = useState(Notes);

  useEffect(() => {
    setNotes(Notes);
  }, [Notes]);

  return (
    <>
      {notes.map((data, index) => {
        return (
          <Card
            title={data.text}
            date={data.date}
            key={index}
            DeleteText={() => DeleteText(index)}
          />
        );
      })}
    </>
  );
}
