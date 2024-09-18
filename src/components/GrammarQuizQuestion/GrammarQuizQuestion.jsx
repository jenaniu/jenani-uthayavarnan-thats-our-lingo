import { useState } from 'react'
import './GrammarQuizQuestion.scss'

function GrammarQuizQuestion({ option, onClick }) {
    // const [flip, setFlip] = useState(false)
    return (
        <>
            <figure className="quiz__option" onClick={onClick}>
                
                <div className="quiz__option--text">
                    {option}
                </div>
         
            </figure>
        </>

    )
}

export default GrammarQuizQuestion