import React, { useState } from 'react'
import Header from './Header.js'
import Note from './Note.js'
import Footer from './Footer.js'
import CreateArea from './CreateArea'

function App() {
  const [notes, setNotes] = useState([])
  
  function addNote(note) {
    setNotes( (prevNotes) => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(id) {
    setNotes( (prevNotes) => {
      return prevNotes.filter( (note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote} 
      />
      {notes.map( (noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />)
      })}
      <Footer />
    </div>
  )
}

export default App