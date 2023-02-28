import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Event from '../../pages/Event'
import Home from '../../pages/Home'
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event/:id' element={<Event />} />
      </Routes>
    </div>
  )
}

export default App