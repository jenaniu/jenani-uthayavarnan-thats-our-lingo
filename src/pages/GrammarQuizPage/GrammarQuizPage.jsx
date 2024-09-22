import Button from '../../components/Button/Button'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './GrammarQuizPage.scss'
import GrammarQuizQuestion from '../../components/GrammarQuizQuestion/GrammarQuizQuestion'
import Modal from '../../components/Modal/Modal'

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
    const [modalOpen, setModalOpen] = useState(false);
    const [resultModal, setResultModal] = useState(false);

    let currentLanguage = langFromParams
    const currentLevel = JSON.parse(localStorage.getItem(`${currentLanguage} Level`));

    useEffect(() => {
        const getQuizQuestions = async () => {
            try {
                const response = await axios.get(
                    `${baseURL}/grammar/${currentLanguage}/quiz/${currentLevel}`
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
            const percentScore = (score/(quiz.length*100))*100
            console.log(percentScore)
            if (percentScore >= 70) {
                levelUp()
            } else {
                showResultModal()
            }
            
            setShowResult(false)
        }

    }, [showResult]);

    useEffect(() => {
        if (level > currentLevel) {
            localStorage.setItem(`${currentLanguage} Level`, level)
        }
    }, [level, navigate, currentLanguage]);

    const showResultModal = () => {
        setResultModal(true)
    }

    const levelUp = () => {
        setLevel((prevLevel) => prevLevel + 1);
        setModalOpen(true)
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

        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        } else {

            setShowResult(true)
        }

    }

    const closeModal = () => {
        setModalOpen(false)
        setScore(0);
    }

    const closeResultModal = () => {
        setResultModal(false)
        setScore(0);
    }

    const onLevelUpClick= () => {
        closeModal();
        navigate(-1)
      }


    return (
        <>
            <article className="quiz">
                <h5 className="quiz__score-count">{`${score}`}</h5>
                <section className="quiz__wrapper" >
                    <PageHeader headerClassName="quiz__header" key={quiz[currentQuestion].id} headerText={quiz[currentQuestion].question} />
                    <img className="quiz__img" src={`${baseURL}/${quiz[currentQuestion].image}`}></img>
                    <figure className="quiz__question">
                        {options.map((option) => (
                            <GrammarQuizQuestion correct={quiz[currentQuestion].correct_answer} key={option} answered={answered} selectedAnswer={selectedAnswer} option={option} onClick={answered === false ? () => onAnswerClicked(option) : null} />
                        ))}
                        {answered && (
                            <Button buttonClassName="quiz__next" buttonTextClassName="quiz__next--text" buttonText="Next" onClick={onClickNext} />
                        )}
                    </figure>
                </section>

                {resultModal && (
                    <Modal modalHeader={`Your score: ${score}`} closeModal={closeResultModal} modalText={`Nice try! You need to score ${Math.ceil((quiz.length*0.7)*100)} to level up!`} buttonText="Try again!" onClick={onLevelUpClick} />
                )}

                {modalOpen && (
                    <Modal modalHeader={`You leveled up!`} closeModal={closeModal} modalText={`Great job, you're now at level ${level} for ${currentLanguage}! There's some new content unlocked for you!`} buttonText="Check it out!" onClick={onLevelUpClick} />
                )}

                
            </article>
        </>
    )
}

export default GrammarQuizPage
