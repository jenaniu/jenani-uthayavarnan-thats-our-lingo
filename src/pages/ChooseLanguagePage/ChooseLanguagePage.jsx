import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseLanguagePage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom'


function ChooseLanguagePage() {
    const navigate = useNavigate()

    const handleClick = (language) => {
        navigate(`/${language}/subject`);
        return
      };

    return (
        <>
            <section className="choose-lang" >
                <PageHeader headerClassName="choose-lang__header" headerText="Choose a Language!"/>
                <article className="choose-lang__buttons">
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={() => handleClick("french")} buttonText="French" />
                        <Button buttonClassName="choose-lang__button" onClick={() => handleClick("spanish")} buttonText="Spanish" />
                    </figure>
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={() => handleClick("german")} buttonText="German" />
                        <Button buttonClassName="choose-lang__button" onClick={() => handleClick("korean")} buttonText="Korean" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseLanguagePage
