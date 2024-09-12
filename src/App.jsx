import { useState } from 'react'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
