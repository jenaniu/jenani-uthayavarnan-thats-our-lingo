import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseVocabCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { capitalizeLang } from '../../utils/capitalizeLang'
import LevelBanner from '../../components/LevelBanner/LevelBanner'

const baseURL = import.meta.env.VITE_API_URL;


function ChooseVocabCategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const { langFromParams } = useParams();
    let currentLanguage = capitalizeLang(langFromParams)
    const location = useLocation();
    const level = location.state
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

    return (
        <>
            <section className="choose-vocab" >
                <LevelBanner language={capitalizeLang(currentLanguage)} level={level} levelBannerClass="grammar-vocab__level" />
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a vocabulary category" />
                <article className="choose-vocab__buttons">
                    {currentLevelFilter.map((category) => (
                        <Button key={category.id} buttonText={`Level ${category.level}: ${category.vocab_category}`} buttonClassName="choose-vocab__button" onClick={() => handleClick(category.id)} />
                    ))}
                </article>
            </section>
        </>
    )
}

export default ChooseVocabCategoryPage
