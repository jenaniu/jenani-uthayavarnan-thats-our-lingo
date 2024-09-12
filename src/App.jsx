import { useState } from 'react'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar/NavBar'
import ChooseLanguagePage from './pages/ChooseLanguagePage/ChooseLanguagePage'
import GrammarVocabPage from './pages/GrammarVocabPage/GrammarVocabPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/languages" element={<ChooseLanguagePage />} />
          <Route path="/subject" element={<GrammarVocabPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
