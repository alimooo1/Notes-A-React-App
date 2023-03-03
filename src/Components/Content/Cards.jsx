import React, {useState, useEffect} from 'react'
import Card from './Card/Card'

export default function Cards(props) {

  let [notes, setNotes] = useState(props.Notes)
  useEffect(() => {
    setNotes(props.Notes)
  }, [props.Notes])
  

  return (
    <React.Fragment>
        {notes.map((data, index)=>{
            return <Card title={data.text} key={index} DeleteText={props.DeleteText}/>
        })}
    </React.Fragment>
  )
}
