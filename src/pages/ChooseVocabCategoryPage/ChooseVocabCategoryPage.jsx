import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseVocabCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function ChooseVocabCategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const { langFromParams } = useParams();
    let currentLanguage = langFromParams


    const handleClick = (category) => {
        navigate(`/${currentLanguage}/flashcards/${category}`)
    };

    useEffect(() => {
        const getVocabCategories = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/vocabulary/${currentLanguage}`
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
                            {categories.map((category) => (
                                <Button key={category.id} buttonText={category.vocab_category} buttonClassName="choose-vocab__button" onClick={() => handleClick(category.id)} />
                            ))}
                    </figure>
                    <figure className="choose-vocab__buttons--wrapper">
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseVocabCategoryPage
