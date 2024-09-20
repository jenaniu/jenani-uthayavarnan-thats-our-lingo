import Button from '../../components/Button/Button'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './GrammarQuizPage.scss'
import GrammarQuizQuestion from '../../components/GrammarQuizQuestion/GrammarQuizQuestion'

const baseURL = import.meta.env.VITE_API_URL;

function GrammarQuizPage() {
    const location = useLocation();
    const levelFromNavigation = location.state
    const navigate = useNavigate();
    const { langFromParams } = useParams();

    const [quiz, setQuiz] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false)
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [level, setLevel] = useState(levelFromNavigation)

    let currentLanguage = langFromParams
    const currentLevel = JSON.parse(localStorage.getItem(`${currentLanguage} Level`));

    useEffect(() => {
        const getQuizQuestions = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/grammar/quiz/${currentLevel}`
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
            alert(score)
            navigate('/');

            if (score > 300) {
                levelUp()

            }
            setScore(0);
            setShowResult(false)
        }

    }, [showResult]);

    useEffect(() => {
        if (level > currentLevel) {
            localStorage.setItem(`${currentLanguage} Level`, level)
            alert("you leveled up!")
            navigate('/');
        }
    }, [level, navigate, currentLanguage]);

    const levelUp = () => {
        setLevel((prevLevel) => prevLevel + 1);
        alert(`Level increased to: ${level + 1}`)
    }

    if (quiz === null) {
        return <div>Quiz Loading...</div>
    };

    const options = JSON.parse(quiz[currentQuestion].options);

    const onAnswerClicked = (option) => {
        console.log(option)
        setAnswered(true)
        console.log(answered)
        if (option === quiz[currentQuestion].correct_answer) {
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
        setAnswered(false)
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

    }


    return (
        <>
            <section className="quiz" >
                <PageHeader headerClassName="quiz__header" key={quiz[currentQuestion].id} headerText={quiz[currentQuestion].question} />
                <img className="quiz__img" src={`${baseURL}/${quiz[currentQuestion].image}`}></img>
                {options.map((option) => (
                    <GrammarQuizQuestion correct={quiz[currentQuestion].correct_answer} key={option} answered={answered} selectedAnswer={selectedAnswer} option={option} onClick={answered===false? () => onAnswerClicked(option) : null} />
                ))}
                {answered && (
                    <Button buttonClassName="flashcard__next" buttonTextClassName="flashcard__next--text" buttonText="Next" onClick={onClickNext}/>
                )}
            </section>
        </>
    )
}

export default GrammarQuizPage
