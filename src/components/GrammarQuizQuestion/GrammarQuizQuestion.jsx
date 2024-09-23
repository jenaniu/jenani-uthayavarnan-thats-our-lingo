import { useState } from 'react'
import './GrammarQuizQuestion.scss'

function GrammarQuizQuestion({ correct, option, onClick, answered, selectedAnswer }) {
    return (
        <>
            <figure className={`quiz__option ${answered? "quiz__option--disabled" : ""} ${answered===true && option===correct? "quiz__option--correct" : ""} ${answered===true && option!==correct? "quiz__option--wrong" : ""}`} onClick={onClick}>
                
                <h5 className="quiz__option--text">
                    {option}
                </h5>
         
            </figure>
        </>

    )
}

export default GrammarQuizQuestion