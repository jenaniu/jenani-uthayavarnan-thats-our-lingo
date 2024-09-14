import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './GrammarVocabPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'


function GrammarVocabPage() {

    return (
        <>
            <section className="grammar-vocab" >
                <PageHeader headerClassName="grammar-vocab__header" headerText="Let's learn some French!"/>
                <h1 className="grammar-vocab__subheader">Choose a Category!</h1>
                <article className="choose-lang__buttons">
                    <Button buttonClassName="choose-lang__button" buttonText="Vocabulary" />
                    <Button buttonClassName="choose-lang__button" buttonText="Grammar" />
                </article>
            </section>
        </>
    )
}

export default GrammarVocabPage
