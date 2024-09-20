import { useState } from 'react'
import './Flashcard.scss'

function Flashcard({ vocabWord, translation }) {
    const [flip, setFlip] = useState(false)
    return (
        <>
            <figure className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
                
                <div className="flashcard__front">
                    <h3>{vocabWord}</h3>
                    {/* <p className="flashcard__title">{ flip ? translation : vocabWord }</p> */}
                </div>
                {/* <p className="flashcard__translation">{translation}</p> */}
                <div className="flashcard__back">
                <h3>{translation}</h3>
                    {/* <p className="flashcard__title">{ flip ? translation : vocabWord }</p> */}
                </div>
            </figure>
        </>

    )
}

export default Flashcard