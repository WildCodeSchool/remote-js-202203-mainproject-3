import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';
import CountDownTimer from './CountDownTimer';

function Quizz({ quizzList }) {
  console.log(quizzList);
 
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const buttonHandleNextId = document.getElementById('buttonHandleNextId');
  const containerCountDown = document.getElementById('count_downID');
  const [disable, setDisable] = React.useState(false);
  const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
  const [answersList, setAnswersList] = React.useState(quizzList[0].answers);
  const [counter, setCounter] = React.useState(0);
  const [questionCounter, setQuestionCounter] = React.useState(1);
  const [resultCounter, setResultCounter] = React.useState(0);
  const [secs, setSecs] = React.useState(20);
  const [timerId, setTimerId] = React.useState();
  const [resultCurrentQuestion, setResultCurrentQuestion] = React.useState(null);
  const [correction, setCorrection] = React.useState([]);
  const tabAnswers = [
   quizzList[counter].correct_answers.answer_a_correct,
   quizzList[counter].correct_answers.answer_b_correct,
   quizzList[counter].correct_answers.answer_c_correct,
   quizzList[counter].correct_answers.answer_d_correct,
   quizzList[counter].correct_answers.answer_e_correct,
   quizzList[counter].correct_answers.answer_f_correct];

  //Mise en place du compteur pour pouvoir décrémenter toutes les secondes
  React.useEffect(() => {
    let returnedTimerId = setInterval(() => setSecs((secs) => secs - 1), 1000);
    setTimerId(returnedTimerId);
  }, [counter]);
  
  //Permet d'arreter le compteur lorsque celui ci arrive a 0 tant qu'il y a encore des questions
  React.useEffect(()=> {
    if (counter < 10 && secs <=0){
      clearInterval(timerId);
      handleDisable();
      buttonValidateID.style.display = 'none'; 
      buttonHandleNextId.style.display = 'block';
    }
  }, [secs]);
  
   
 function handleCorrection(){
     //Stockage des réponses objet dans un tableau
  setCorrection(tabAnswers.map( answer => answer === 'true' ? 'vert' : 'rouge'));
}

 function handleDisable() {
  setDisable(true);
 } 

 function handleDisableFalse () {
  setDisable(false);
 }

function handleDisplayChrono() {
  setSecs((secs)=>!secs);
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
    setQuestionCounter(questionCounter +1);
    setResultCurrentQuestion(null);
    setCorrection([]);

    // Reset le formulaire
    document.getElementById('formCheck').reset();

    // Affiche les questions et réponses
    if (counter < 10){
      setQuestionsList(quizzList[counter +1].question);
      setAnswersList(quizzList[counter +1].answers);
      setCounter(counter +1);
      handleReset();
      handleDisableFalse();
    } 
  }

  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">
        {(counter < 10)? (
          <div className="containerQuizzShow">
            <div className="container_count">
              <div className='questionCounter'>
                <p>Question n° {questionCounter} / 10</p>
                <progress max="10" value={questionCounter}> </progress>
              </div>
              <CountDownTimer secs={secs}/> 
            </div>   
            <div className="containerQuizzCounter">  
              <h2 className= "question">
                {questionsList} 
              </h2>
              <AnswersList 
              handleDisplayChrono={handleDisplayChrono} 
              handleDisable={handleDisable}
              disable={disable} 
              answers={answersList}
              currentQuestion={quizzList[counter]} 
              resultCounter={resultCounter} 
              setResultCounter={setResultCounter}
              setResultCurrentQuestion={setResultCurrentQuestion} 
              resultCurrentQuestion={resultCurrentQuestion} 
              handleCorrection={handleCorrection}
              correction={correction}/>
              <button id="buttonHandleNextId" className="buttonHandleNext" onClick={handleQuestion}>Next</button>
            </div>
          </div>) : 
        <Results resultCounter={resultCounter}/>
        }
      </div>
    </section>
  );
}

export default Quizz;