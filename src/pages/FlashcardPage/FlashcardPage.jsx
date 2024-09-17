import Button from '../../components/Button/Button'
import './FlashcardPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Flashcard from '../../components/Flashcard/Flashcard'


function FlashcardPage() {
    const [vocabulary, setVocabulary] = useState(null);
    const [currentCard, setCurrentCard] = useState(0);
    const navigate = useNavigate()

    const { langFromParams, categoryFromParams } = useParams();
    let currentLanguage = langFromParams
    let currentCategory = categoryFromParams

    const handleClick = () => {

        if (currentCard < vocabulary.length - 1) {
            setCurrentCard(currentCard + 1);
        }
        else {
            navigate(-1)

        }
    }

    useEffect(() => {
        const getVocabWords = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/vocabulary/${currentLanguage}/${currentCategory}`
                );

                setVocabulary(response.data);
            }
            catch (error) {
                console.error("Error getting vocabulary category data", error);
            }
        };
        getVocabWords();
    }, []);

    if(vocabulary===null) {
        return <div>Flashcards Loading...</div>
    }

    return (
        <>
            <section className="choose-vocab" >
                <PageHeader headerClassName="choose-vocab__header" headerText="Let's practice" />
                <article className="choose-vocab__buttons">
                    {/* {categories.map((vocabulary) => (
                        // console.log(vocabulary.vocab_word)
                        // console.log(vocabulary.translation) */}
                        <Flashcard key={vocabulary[currentCard].id} vocabWord={vocabulary[currentCard].vocab_word} translation={vocabulary[currentCard].translation} />
                    {/* ))} */}
                    <figure className="choose-vocab__buttons--wrapper">
                        <Button buttonClassName="flashcard__next" buttonTextClassName="flashcard__next--text" buttonText="Next" onClick={handleClick} />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default FlashcardPage
