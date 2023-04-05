import React from 'react'

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
    </header>
  )
}

function Note() {
  return (
    <div className='note'>
      <h1>Note title</h1>
      <p>Note Content</p>
    </div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Tyler Montgomery</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  )
}

export default App