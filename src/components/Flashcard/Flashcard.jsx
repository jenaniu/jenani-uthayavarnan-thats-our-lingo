import { useState } from 'react'
import './Flashcard.scss'

function Flashcard({ vocabWord, translation }) {
    const [flip, setFlip] = useState(false)
    return (
        <>
            <figure className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>

                <div className="flashcard__front">
                    <h4>Vocabulary Term</h4>
                    <h2>{vocabWord}</h2>
                </div>
                <div className="flashcard__back">
                    <h4>Translation Term</h4>
                    <h2>{translation}</h2>
                </div>
            </figure>
        </>

    )
}

export default Flashcard