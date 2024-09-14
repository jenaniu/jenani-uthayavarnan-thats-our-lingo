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
            <section className="choose-vocab" >
                <PageHeader headerClassName="choose-vocab__header" headerText="Choose a vocabulary category"/>
                <article className="choose-vocab__buttons">
                    <figure className="choose-vocab__buttons--wrapper">
                        <Button buttonClassName="choose-vocab__button" onClick={handleClick} buttonText="Foods" />
                        <Button buttonClassName="choose-vocab__button" onClick={handleClick} buttonText="Hi & Goodbye" />
                    </figure>
                    <figure className="choose-vocab__buttons--wrapper">
                        <Button buttonClassName="choose-vocab__button" onClick={handleClick} buttonText="Colours" />
                        <Button buttonClassName="choose-vocab__button" onClick={handleClick} buttonText="Animals" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseVocabCategoryPage
