import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import MessagePage from './pages/MessagePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/edit/:id" element={<EditPage />}/>
        <Route path="/message" element={<MessagePage />}/>
      </Routes>
    </div>
  )
}

export default App