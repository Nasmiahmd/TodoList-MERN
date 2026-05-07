import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import MessagePage from './pages/MessagePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/edit/:id" element={<EditPage />}/>
        <Route path="/message" element={<MessagePage />}/>
      </Routes>
    </div>
  )
}

export default App