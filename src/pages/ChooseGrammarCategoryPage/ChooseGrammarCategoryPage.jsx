import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseGrammarCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


function ChooseGrammarCategoryPage() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const location = useLocation();
    const level = location.state

    const { langFromParams } = useParams();
    let currentLanguage = langFromParams
    // const currentLevel = JSON.parse(localStorage.getItem(`${currentLanguage} Level`));


    const handleClick = (category) => {
        navigate(`/${currentLanguage}/grammar/${category}`)
    };

    const handleTestClick = () => {
        navigate(`/${currentLanguage}/grammar/quiz`, { state: level } )
    };

    useEffect(() => {
        const getGrammarCategories = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/grammar/${currentLanguage}`
                );
               
                setCategories(response.data);
            }
            catch (error) {
                console.error("Error getting grammar category data", error);
            }
        };
        getGrammarCategories();
    }, []);

    const currentLevelFilter = categories.filter(category => category.level <= level)
    console.log(currentLevelFilter)

    return (
        <>
            <section className="choose-vocab" >
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a grammar concept!" />
                <article className="choose-vocab__buttons">
                    <figure className="choose-vocab__buttons--wrapper">
                            {currentLevelFilter.map((category) => (
                                <Button key={category.id} buttonText={category.grammar_concept} buttonClassName="choose-vocab__button" onClick={() => handleClick(category.id)} />
                            ))}
                    </figure>
                    <figure className="choose-vocab__buttons--wrapper">
                    <Button buttonText="Test your knowledge!" buttonClassName="choose-vocab__button" onClick={() => handleTestClick()} />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseGrammarCategoryPage
