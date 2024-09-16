import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarVocabPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom';


function GrammarVocabPage() {

    let navigate = useNavigate();

  const handleClick = () => {
    navigate ('/vocab-categories')
  }

    return (
        <>
            <section className="grammar-vocab" >
                <PageHeader headerClassName="grammar-vocab__header" headerText="Let's learn some French!"/>
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
