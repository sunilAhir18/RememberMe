import React from "react";
import './Note.css';

const Note = (props) => {
   const deleteNote = (e) => {
      e.preventDefault();
      props.deleteItem(props.id);
   };
   return (
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