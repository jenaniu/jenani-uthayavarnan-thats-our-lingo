import { useState } from 'react'
import './GrammarQuizQuestion.scss'

function GrammarQuizQuestion({ option, onClick }) {
    // const [flip, setFlip] = useState(false)
    return (
        <>
            <figure className="quiz__wrapper" onClick={onClick}>
                
                <div className="quiz__option">
                    {option}
                </div>
         
            </figure>
        </>

    )
}

export default GrammarQuizQuestion