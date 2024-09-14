import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseVocabCategoryPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom'


function ChooseVocabCategoryPage() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/');
        return
      };

    return (
        <>
            <section className="choose-lang" >
                <PageHeader headerClassName="choose-lang__header" headerText="Choose a vocabulary category"/>
                <article className="choose-lang__buttons">
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Foods" />
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Hi & Goodbye" />
                    </figure>
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Colours" />
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Animals" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseVocabCategoryPage
