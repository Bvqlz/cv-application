import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <>
        <div className="form-container">
            <General />
            <Education />
            <Experience />
        </div>
    </>
  )
}

export default App
