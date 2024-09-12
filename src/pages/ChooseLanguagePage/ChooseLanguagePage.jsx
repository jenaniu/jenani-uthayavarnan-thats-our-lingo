import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseLanguagePage.scss'


function ChooseLanguagePage() {

    return (
        <>
            <section className="choose-lang" >
                <h1 className="choose-lang__header">Choose a Language!</h1>

                <article className="choose-lang__button--wrapper">
                    <Button buttonClassName="choose-lang__button" buttonText="French" />
                    <Button buttonClassName="choose-lang__button" buttonText="Spanish" />
                    <Button buttonClassName="choose-lang__button" buttonText="German" />
                    <Button buttonClassName="choose-lang__button" buttonText="Korean" />
                </article>
            </section>
        </>
    )
}

export default ChooseLanguagePage
