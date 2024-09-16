import Button from '../../components/Button/Button'
import './FlashcardPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function FlashcardPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const { langFromParams } = useParams();
    const { categoryFromParams } = useParams();
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
    }, []);


    return (
        <>
            <section className="choose-vocab" >
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a vocabulary category" />
                <article className="choose-vocab__buttons">
                    <figure className="choose-vocab__buttons--wrapper">
                            {categories.map((vocabulary) => (
                                <Button key={vocabulary.id} buttonText={vocabulary.vocab_word} buttonClassName="choose-vocab__button" onClick={handleClick} />
                            ))}
                    </figure>
                    <figure className="choose-vocab__buttons--wrapper">
                    </figure>
                </article>
            </section>
        </>
    )
}

export default FlashcardPage
