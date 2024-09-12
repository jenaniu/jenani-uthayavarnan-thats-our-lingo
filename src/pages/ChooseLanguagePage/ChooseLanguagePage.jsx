import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseLanguagePage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'


function ChooseLanguagePage() {

    return (
        <>
            <section className="choose-lang" >
                <PageHeader headerClassName="choose-lang__header" headerText="Choose a Language!"/>
                <article className="choose-lang__buttons">
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" buttonText="French" />
                        <Button buttonClassName="choose-lang__button" buttonText="Spanish" />
                    </figure>
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" buttonText="German" />
                        <Button buttonClassName="choose-lang__button" buttonText="Korean" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ChooseLanguagePage
