import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseVocabCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL;


function ChooseVocabCategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const { langFromParams } = useParams();
    let currentLanguage = langFromParams
    const location = useLocation();
    const level = location.state
    console.log(level)
    const currentLevel = JSON.parse(localStorage.getItem(`${currentLanguage} Level`));


    const handleClick = (category) => {
        navigate(`/${currentLanguage}/flashcards/${category}`)
    };

    useEffect(() => {
        const getVocabCategories = async () => {
            try {
                const response = await axios.get(
                    `${baseURL}/vocabulary/${currentLanguage}`
                );
               
                setCategories(response.data);
            }
            catch (error) {
                console.error("Error getting vocabulary category data", error);
            }
        };
        getVocabCategories();
    }, []);

    const currentLevelFilter = categories.filter(category => category.level <= currentLevel)
    console.log(currentLevelFilter)

    return (
        <>
            <section className="choose-vocab" >
            <h5 className="grammar-vocab__level">{`${currentLanguage} Level: ${level}`}</h5>
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a vocabulary category" />
                <article className="choose-vocab__buttons">
                    <figure className="choose-vocab__buttons--wrapper">
                            {currentLevelFilter.map((category) => (
                                <Button key={category.id} buttonText={`Level ${category.level}: ${category.vocab_category}`} buttonClassName="choose-vocab__button" onClick={() => handleClick(category.id)} />
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
