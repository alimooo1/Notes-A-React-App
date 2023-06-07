import React, { ChangeEvent, FormEvent, useState } from "react";
import "./AddInput.css";

interface props {
  SaveText : Function,
  Value: string,
  Change: Function
}

export default function MyInput({ SaveText, Value, Change }: props) {
  const [charLength, setCharLength] = useState(100);

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCharLength(100 - event.target.value.length);
    Change(event.target.value);
  };

  const saveHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCharLength(100);
    SaveText();
  };

  return (
    <div className="my-input">
      <form onSubmit={saveHandler}>
        <textarea
          name="addInput"
          id=""
          value={Value}
          placeholder="Type Your Text Here..."
          onChange={changeHandler}
          maxLength= {100}
        ></textarea>
        <div className="details">
          <span>{charLength} Remains</span>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
