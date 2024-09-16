import { useState } from 'react'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar/NavBar'
import ChooseLanguagePage from './pages/ChooseLanguagePage/ChooseLanguagePage'
import GrammarVocabPage from './pages/GrammarVocabPage/GrammarVocabPage'
import ChooseVocabCategoryPage from './pages/ChooseVocabCategoryPage/ChooseVocabCategoryPage'
import FlashcardPage from './pages/FlashcardPage/FlashcardPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/languages" element={<ChooseLanguagePage />} />
          <Route path="/:langFromParams/subject" element={<GrammarVocabPage />} />
          <Route path="/:langFromParams/vocabulary" element={<ChooseVocabCategoryPage />} />
          <Route path="/:langFromParams/flashcards/:categoryFromParams" element={<FlashcardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
