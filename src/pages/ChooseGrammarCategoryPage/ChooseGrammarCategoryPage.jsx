import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseGrammarCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { capitalizeLang } from '../../utils/capitalizeLang'

const baseURL = import.meta.env.VITE_API_URL


function ChooseGrammarCategoryPage() {
    const [categories, setCategories] = useState([]);
    const [testReady, setTestReady] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const level = location.state

    const { langFromParams } = useParams();
    let currentLanguage = capitalizeLang(langFromParams)
   

    const handleClick = (category) => {
        navigate(`/${currentLanguage}/grammar/${category}`)
    };

    const handleTestClick = () => {
        if (level >= 3 ) {
            alert("Quiz coming soon!")
            return
        }
        else {
            navigate(`/${currentLanguage}/grammar/quiz`, { state: level } )
        }
    };

    useEffect(() => {
        const getGrammarCategories = async () => {
            try {
                const response = await axios.get(
                    `${baseURL}/grammar/${currentLanguage}`
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

    return (
        <>
            <section className="choose-vocab" >
            <h5 className="grammar-vocab__level">{`${currentLanguage} Level: ${level}`}</h5>
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a grammar concept!" />
                <article className="choose-vocab__buttons">
                    <figure className="choose-vocab__buttons--wrapper">
                            {currentLevelFilter.map((category) => (
                                <Button key={category.id} buttonText={`Level ${category.level}: ${category.grammar_concept}`} buttonClassName="choose-vocab__button" onClick={() => handleClick(category.id)} />
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
