import Button from '../../components/Button/Button'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GrammarQuizQuestion from '../../components/GrammarQuizQuestion/GrammarQuizQuestion'


function GrammarQuizPage() {
    const [quiz, setQuiz] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getQuizQuestions = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/grammar/quiz/1`
                );
                setQuiz(response.data);
            }
            catch (error) {
                console.error("Error getting quiz data");
            }
        };
        getQuizQuestions();
    }, []);


    useEffect(() => {
        if (showResult) {
            alert(score);
            navigate('/');
        }
    }, [showResult]);
    
    if(quiz===null) {
        return <div>Quiz Loading...</div>
    }

    const options = JSON.parse(quiz[currentQuestion].options);
 
    const onAnswerClicked = (option) => {
        console.log(option)
        if (option === quiz[currentQuestion].correct_answer){
            console.log("correct!")
            setSelectedAnswer(true)
        }
        else {
            console.log("wrong!")
            setSelectedAnswer(false)
        }
    }

    const onClickNext = () => {
        console.log(selectedAnswer)
        if (selectedAnswer) { 
            console.log("cheese");
            setScore((prevScore) => prevScore + 100);
        }
        console.log(score)

        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        } else {
            console.log(score)
            setShowResult(true)
        }
        
        // if (showResult) {
        //     alert(score);
        //     navigate('/')
        // }
    }


    return (
        <>
            <section className="quiz" >
                <PageHeader headerClassName="quiz__header" key={quiz[currentQuestion].id} headerText={quiz[currentQuestion].quiz_question} />
                {options.map((option) => (
                <GrammarQuizQuestion key={option} option={option} onClick={() => onAnswerClicked(option)}/>
                ))}
                    <figure className="choose-vocab__buttons--wrapper">
                        <Button buttonClassName="flashcard__next" buttonTextClassName="flashcard__next--text" buttonText="Next" onClick={onClickNext}/>
                    </figure>
            </section>
        </>
    )
}

export default GrammarQuizPage
