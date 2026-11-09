import React from 'react'
import {BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/Feed.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </Router>
  )
}

export default App