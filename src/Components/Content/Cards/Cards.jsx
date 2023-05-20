import React, { useState, useEffect } from "react";
import Card from "./Card/Card";

export default function Cards({ Notes, DeleteText }) {
  let [notes, setNotes] = useState(Notes);
  useEffect(() => {
    setNotes(Notes);
  }, [Notes]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
