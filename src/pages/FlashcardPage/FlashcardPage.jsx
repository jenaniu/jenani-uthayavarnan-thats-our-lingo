import Button from '../../components/Button/Button'
import './FlashcardPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Flashcard from '../../components/Flashcard/Flashcard'
import { capitalizeLang } from '../../utils/capitalizeLang'

const baseURL = import.meta.env.VITE_API_URL

function FlashcardPage() {
    const [vocabulary, setVocabulary] = useState(null);
    const [currentCard, setCurrentCard] = useState(0);
    const [cardsComplete, setCardsComplete] = useState(false)
    const navigate = useNavigate()
    const { langFromParams, categoryFromParams } = useParams();
    let currentLanguage = capitalizeLang(langFromParams)
    let currentCategory = categoryFromParams

    useEffect(() => {
        const getVocabWords = async () => {
            try {
                const response = await axios.get(
                    `${baseURL}/vocabulary/${currentLanguage}/${currentCategory}`
                );

                setVocabulary(response.data);
            }
            catch (error) {
                console.error("Error getting vocabulary category data", error);
            }
        };
        getVocabWords();
    }, []);

    useEffect(() => {
        if (cardsComplete) {
            navigate(-1)
        }
    }, [cardsComplete]);

    const handleClick = () => {

        if (currentCard < vocabulary.length - 1) {
            setCurrentCard(currentCard + 1);
        }
        else {
            setCardsComplete(true)
        }
    }




    if (vocabulary === null) {
        return <div>Flashcards Loading...</div>
    }

    return (
        <>
            <section className="flashcard-page" >
                <PageHeader headerClassName="flashcard-page__header" headerText="Let's practice!" />
                <article className="flashcard-page__buttons">
                    <Flashcard key={vocabulary[currentCard].id} vocabWord={vocabulary[currentCard].vocab_word} translation={vocabulary[currentCard].translation} />
                    <figure className="flashcard-page__buttons--wrapper">
                        <Button buttonClassName="flashcard-page__next" buttonTextClassName="flashcard__next--text" buttonText="Next" onClick={handleClick} />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default FlashcardPage
