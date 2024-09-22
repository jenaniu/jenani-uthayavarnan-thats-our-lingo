import { useState } from 'react'
import './styles/global.scss'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import NavBar from './components/NavBar/NavBar'
import ChooseLanguagePage from './pages/ChooseLanguagePage/ChooseLanguagePage'
import GrammarVocabPage from './pages/GrammarVocabPage/GrammarVocabPage'
import ChooseVocabCategoryPage from './pages/ChooseVocabCategoryPage/ChooseVocabCategoryPage'
import FlashcardPage from './pages/FlashcardPage/FlashcardPage'
import GrammarQuizPage from './pages/GrammarQuizPage/GrammarQuizPage'
import ChooseGrammarCategoryPage from './pages/ChooseGrammarCategoryPage/ChooseGrammarCategoryPage'
import GrammarConceptPage from './pages/GrammarConceptPage/GrammarConceptPage'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/languages" element={<ChooseLanguagePage />} />
          <Route path="/:langFromParams/subject" element={<GrammarVocabPage />} />
          <Route path="/:langFromParams/vocabulary" element={<ChooseVocabCategoryPage />} />
          <Route path="/:langFromParams/flashcards/:categoryFromParams" element={<FlashcardPage />} />
          <Route path="/:langFromParams/grammar" element={<ChooseGrammarCategoryPage />} />
          <Route path="/:langFromParams/grammar/:idFromParams" element={<GrammarConceptPage />} />
          <Route path="/:langFromParams/grammar/quiz" element={<GrammarQuizPage />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
