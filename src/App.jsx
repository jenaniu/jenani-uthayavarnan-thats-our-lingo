import { useState } from 'react'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
