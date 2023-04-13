import React from 'react'
import Header from './Header.js'
import Note from './Note.js'
import Footer from './Footer.js'
import notes from '../notes.js'

function App() {
  return (
    <div>
      <Header />
      {notes.map( (note) => {
        return (
          <Note 
            title={note.title}
            content={note.content}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App