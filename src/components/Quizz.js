import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';
import CountDownTimer from './CountDownTimer';

// FIXME : Ajouter une constante pour le nombre de questions, pour le chrono, pour éviter de définir les valeurs avec des "literals"

function Quizz({quizzList}) {

    // FIXME : ce serait mieux de gérer ça avec des conditions dans le JSX
    const buttonValidateID = document.getElementById('buttonHandleValidateID');
    const buttonHandleNextId = document.getElementById('buttonHandleNextId');
    const containerCountDown = document.getElementById('count_downID');
    // END FIXME

    const [disable, setDisable] = React.useState(false);
    const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
    const [answersList, setAnswersList] = React.useState(quizzList[0].answers);

    // FIXME : on devrait pouvoir gérer avec un seul counter, non ?
    const [counter, setCounter] = React.useState(0);
    const [questionCounter, setQuestionCounter] = React.useState(1);
    const [resultCounter, setResultCounter] = React.useState(0);
    const [secs, setSecs] = React.useState(20);
    const [timerId, setTimerId] = React.useState();

    //Mise en place du compteur pour pouvoir décrémenté toutes les secondes
    React.useEffect(() => {
        let returnedTimerId = setInterval(() => setSecs((secs) => secs - 1), 1000);
        setTimerId(returnedTimerId);
        // FIXME Pourquoi un clearInterval ici ?
        clearInterval(timerId);
    }, [counter]);

    //Permet d'arreter le compteur lorsque celui ci arrive a 0 tant qu'il y a encore des questions
    React.useEffect(() => {
        if (counter < 10 && secs <= 0) {
            clearInterval(timerId);
            handleDisable();
            buttonValidateID.style.display = 'none';
            buttonHandleNextId.style.display = 'block';
        }
    }, [secs]);


    function handleDisable() {
        setDisable(true);
    }

    function handleDisableFalse() {
        setDisable(false);
    }

    function handleDisplayChrono() {
        setSecs((secs) => !secs);
        containerCountDown.style.display = 'none';
        buttonHandleNextId.style.display = 'block';
        // formCheck.style.pointer = 'none';
    }

    // Remet le compteur a 20 lorsque l'on appuis sur le bouton next
    function handleReset() {
        setSecs(20);
    }

    function handleQuestion() {
        //réaffichage du bouton validate

        buttonHandleNextId.style.display = 'none';
        buttonValidateID.style.display = 'block';
        containerCountDown.style.display = 'block';
        setQuestionCounter(questionCounter + 1);

        // Reset le formulaire
        document.getElementById('formCheck').reset();

        // Affiche les questions et réponses
        if (counter < 10) {
            setQuestionsList(quizzList[counter + 1].question);
            setAnswersList(quizzList[counter + 1].answers);
            setCounter(counter + 1);
            handleReset();
            handleDisableFalse();
        }
    }

    return (
        <section className="containerQuizzGlobal">
            <div className="containerQuizz">
                {(counter < 10) ? (
                        <div className="containerQuizzShow">
                            <div className="container_count">
                                <div className='questionCounter'>
                                    <p>Question n° {questionCounter} / 10</p>
                                    <progress max="10" value={questionCounter}/>
                                </div>
                                <CountDownTimer secs={secs}/>
                            </div>
                            <div className="containerQuizzCounter">
                                <h2 className="question">
                                    {questionsList}
                                </h2>
                                <AnswersList handleDisplayChrono={handleDisplayChrono} handleDisable={handleDisable}
                                             disable={disable} answers={answersList} quizzList={quizzList} counter={counter}
                                             resultCounter={resultCounter} setResultCounter={setResultCounter}/>
                                <button id="buttonHandleNextId" className="buttonHandleNext" onClick={handleQuestion}>Next
                                </button>
                            </div>
                        </div>) :
                    <Results resultCounter={resultCounter}/>
                }
            </div>
        </section>
    );
}

export default Quizz;