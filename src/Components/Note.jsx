import React from "react";
import './Note.css';

const Note =(props)=>{
    const deleteNote=()=>{
       props.deleteItem(props.id);
    };
    return(
     <>
    <div className="note">
    <h1>{props.title}</h1>
    <br />
    <p > {props.content} </p>
    <button onClick={deleteNote}>
      ⌦ 
   </button>
    </div>
     </>
    )
}
export default Note;