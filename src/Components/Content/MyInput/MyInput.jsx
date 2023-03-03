import React, {useState} from 'react'
import "./MyInput.css"

export default function MyInput(props) {
  const [charLength, setLength] = useState(100)
  const charLengthHandler = (event) => {
    setLength(100 - event.target.value.length)
  }

  const handleSaveClick = (event) => {
    setLength(100);
    props.SaveText(event);
  };
  
  return (
    <div className='my-input'>
        <textarea name="" id="" placeholder='Type Your Text Here...' onChange={charLengthHandler} maxLength="100"></textarea>
        <div className="details">
            <span>{charLength} Remains</span>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}