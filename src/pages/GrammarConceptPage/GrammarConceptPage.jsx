import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarConceptPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ConceptText from '../../components/ConceptText/ConceptText'
import { capitalizeLang } from '../../utils/capitalizeLang'

const baseURL = import.meta.env.VITE_API_URL;


function GrammarConceptPage() {
    const [concept, setConcept] = useState(null);
    const navigate = useNavigate()

    const { langFromParams } = useParams();
    const { idFromParams } = useParams();
    let currentLanguage = capitalizeLang(langFromParams)
    let currentConcept = idFromParams
    const currentLevel = JSON.parse(localStorage.getItem(`${currentLanguage} Level`));



    // const handleClick = (category) => {
    //     navigate(`/${currentLanguage}/concept/${category.id}`)
    // };

    useEffect(() => {
        const getGrammarConcept = async () => {
            try {
                const response = await axios.get(
                    `${baseURL}/grammar/concept/${currentConcept}`
                );
               
                setConcept(response.data);
            }
            catch (error) {
                console.error("Error getting grammar concept data", error);
            }
        };
        getGrammarConcept();
    }, []);

    if(concept===null) {
        return <div>Content Loading...</div>
    }
    
    const { id, concept_text, grammar_concept } = concept[0]

    const onClickNext = () => {
        localStorage.setItem(`${currentLanguage}_${currentConcept}_complete`, true);
        navigate(-1)
    }
    
    return (
        <>
            <section className="concept" >
                <PageHeader headerClassName="concept__header" headerText="Choose a grammar concept!" />
                    <h1> {grammar_concept} </h1>
                    <ConceptText text={concept_text} />
            <Button buttonClassName="concept__next" buttonTextClassName="concept__button--text" buttonText="Got it!" onClick={onClickNext}/>
            </section>
        </>
    )
}

export default GrammarConceptPage
