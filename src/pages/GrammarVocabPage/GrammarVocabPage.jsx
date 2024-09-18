import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarVocabPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function GrammarVocabPage() {
    const [level, setLevel] = useState(1);
    
    let navigate = useNavigate();
    
    const { langFromParams } = useParams();
    console.log(langFromParams);
    let currentLanguage = langFromParams
    
    const handleClick = () => {
        navigate(`/${currentLanguage}/vocabulary`)
    }

    localStorage.setItem(`${currentLanguage} Level`, level);

    return (
        <>
            <section className="grammar-vocab" >
                <PageHeader headerClassName="grammar-vocab__header" headerText={`Let's learn some ${currentLanguage}!`} />
                <h1 className="grammar-vocab__subheader">Choose a Category!</h1>
                <article className="choose-lang__buttons">
                    <Button buttonClassName="choose-lang__button" buttonText="Vocabulary" onClick={handleClick} />
                    <Button buttonClassName="choose-lang__button" buttonText="Grammar" onClick={handleClick} />
                </article>
            </section>
        </>
    )
}

export default GrammarVocabPage
