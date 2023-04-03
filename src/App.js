import React, { useState } from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import "./App.css"

const Apps = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];          // button pe click krne ke bd hme note  me add krne ke liye 
    })
    console.log(note);
  }

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, inde) => {
        return inde !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />


      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        )
      })}
      <Footer />
    </>
  )
}
export default Apps;
