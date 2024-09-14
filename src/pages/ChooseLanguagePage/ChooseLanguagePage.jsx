import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseLanguagePage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom'


function ChooseLanguagePage() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/subject');
        return
      };

    return (
        <>
            <section className="choose-lang" >
                <PageHeader headerClassName="choose-lang__header" headerText="Choose a Language!"/>
                <article className="choose-lang__buttons">
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="French" />
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Spanish" />
                    </figure>
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="German" />
                        <Button buttonClassName="choose-lang__button" onClick={handleClick} buttonText="Korean" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseLanguagePage
