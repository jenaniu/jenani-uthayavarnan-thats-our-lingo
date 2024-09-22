import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarVocabPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { capitalizeLang } from "../../utils/capitalizeLang"
import LevelBanner from '../../components/LevelBanner/LevelBanner';


function GrammarVocabPage() {
    const { langFromParams } = useParams();
    let navigate = useNavigate();
    let currentLanguage = capitalizeLang(langFromParams)
    const [level, setLevel] = useState(() => {
        const currentLevel = localStorage.getItem(`${currentLanguage} Level`)
        return currentLevel ? parseInt(currentLevel, 10) : 1
    });
    
    useEffect(() => {
        localStorage.setItem(`${currentLanguage} Level`, level);
    }, [level])
  
    const handleVocabClick = () => {
        navigate(`/${currentLanguage}/vocabulary`,  { state: level } )
    }

    const handleGrammarClick = () => {
        navigate(`/${currentLanguage}/grammar`,  { state: level } )
    }

 


    return (
        <>
            <section className="grammar-vocab" >
                <LevelBanner language={capitalizeLang(currentLanguage)} level={level} levelBannerClass="grammar-vocab__level" />
                <PageHeader headerClassName="grammar-vocab__header" headerText={`Let's learn some ${capitalizeLang(currentLanguage)}!`} />
                <h1 className="grammar-vocab__subheader">Choose a Category!</h1>
                <article className="grammar-vocab__buttons">
                    <Button buttonClassName="grammar-vocab__button" buttonText="Vocabulary" onClick={handleVocabClick} />
                    <Button buttonClassName="grammar-vocab__button" buttonText="Grammar" onClick={handleGrammarClick} />
                </article>
            </section>
        </>
    )
}

export default GrammarVocabPage
