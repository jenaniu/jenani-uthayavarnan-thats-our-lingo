import { useState } from 'react'
import './GrammarQuizQuestion.scss'

function GrammarQuizQuestion({ correct, option, onClick, answered, selectedAnswer }) {
    // const [flip, setFlip] = useState(false)
    return (
        <>
            <figure className={`quiz__option ${answered? "quiz__option--disabled" : ""} ${answered===true && option===correct? "quiz__option--correct" : ""} ${answered===true && option!==correct? "quiz__option--wrong" : ""}`} onClick={onClick}>
                
                <h3 className="quiz__option--text">
                    {option}
                </h3>
         
            </figure>
        </>

    )
}

export default GrammarQuizQuestion