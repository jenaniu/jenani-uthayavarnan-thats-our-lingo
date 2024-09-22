import { Helmet } from 'react-helmet'
import Button from '../../components/Button/Button'
import './ChooseLanguagePage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'


function ChooseLanguagePage() {
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);

    const onClick = (language) => {
        if (language==="french") {
            navigate(`/${language}/subject`);
            return
        } else {
            openModal()
            return
        }
      };

      const closeModal = () => {
        setModalOpen(false)
        return
    }

    const openModal = () => {
        setModalOpen(true)
    }

    return (
        <>
            <section className="choose-lang" >
                <PageHeader headerClassName="choose-lang__header" headerText="Choose a Language!"/>
                <article className="choose-lang__buttons">
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={() => onClick("french")} buttonText="French" />
                        <Button buttonClassName="choose-lang__button" onClick={() => onClick("spanish")} buttonText="Spanish" />
                    </figure>
                    <figure className="choose-lang__buttons--wrapper">
                        <Button buttonClassName="choose-lang__button" onClick={() => onClick("german")} buttonText="German" />
                        <Button buttonClassName="choose-lang__button" onClick={() => onClick("korean")} buttonText="Korean" />
                    </figure>
                </article>
            </section>

            {modalOpen && (
                    <Modal modalHeader="Coming soon" modalText={`The learning plan for this language is coming soon!`} buttonText="Pick another language!" onClick={closeModal} />
                )}
        </>
    )
}

export default ChooseLanguagePage
