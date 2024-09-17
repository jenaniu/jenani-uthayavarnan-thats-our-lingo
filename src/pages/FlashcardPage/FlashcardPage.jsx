import Button from '../../components/Button/Button'
import './FlashcardPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Flashcard from '../../components/Flashcard/Flashcard'


function FlashcardPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const { langFromParams, categoryFromParams } = useParams();
    console.log(langFromParams);
    let currentLanguage = langFromParams
    let currentCategory = categoryFromParams
    console.log(currentLanguage)

    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        const getVocabCategories = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/vocabulary/${currentLanguage}/${currentCategory}`
                );
               
                setCategories(response.data);
                
            }
            catch (error) {
                console.error("Error getting vocabulary category data", error);
            }
        };
        getVocabCategories();
    }, [langFromParams, categoryFromParams]);


    return (
        <>
            <section className="choose-vocab" >
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a vocabulary category" />
                <article className="choose-vocab__buttons">
                            {categories.map((vocabulary) => (
                                // console.log(vocabulary.vocab_word)
                                // console.log(vocabulary.translation)
                                <Flashcard key={vocabulary.id} vocabWord={vocabulary.vocab_word} translation={vocabulary.translation} />
                            ))}
                    <figure className="choose-vocab__buttons--wrapper">
                    </figure>
                </article>
            </section>
        </>
    )
}

export default FlashcardPage
