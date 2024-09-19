import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarVocabPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function GrammarVocabPage() {
    const { langFromParams } = useParams();
    let currentLanguage = langFromParams
    const [level, setLevel] = useState(() => {
        const currentLevel = localStorage.getItem(`${currentLanguage} Level`)
        return currentLevel ? parseInt(currentLevel, 10) : 1
    });
    
    useEffect(() => {
        localStorage.setItem(`${currentLanguage} Level`, level);
    }, [level])
    let navigate = useNavigate();
    
    
    
    const handleVocabClick = () => {
        navigate(`/${currentLanguage}/vocabulary`,  { state: level } )
    }

    const handleGrammarClick = () => {
        navigate(`/${langFromParams}/grammar`,  { state: level } )
    }

 


    return (
        <>
            <section className="grammar-vocab" >
                <PageHeader headerClassName="grammar-vocab__header" headerText={`Let's learn some ${currentLanguage}!`} />
                <h1 className="grammar-vocab__subheader">Choose a Category!</h1>
                <article className="choose-lang__buttons">
                    <Button buttonClassName="choose-lang__button" buttonText="Vocabulary" onClick={handleVocabClick} />
                    <Button buttonClassName="choose-lang__button" buttonText="Grammar" onClick={handleGrammarClick} />
                </article>
            </section>
        </>
    )
}

export default GrammarVocabPage
