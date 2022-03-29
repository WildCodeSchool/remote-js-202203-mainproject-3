import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';



function Quizz({ quizzList }) {
  
 
  const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
  const [answersList, setAnswersList] = React.useState(quizzList[0].answers);
  const [counter, setCounter] = React.useState(0);
  const [questionCounter, setQuestionCounter] = React.useState(1);
  const [resultCounter, setResultCounter] = React.useState(1);

  
  function handleQuestion() {
    //réaffichage du bouton validate
    const buttonValidateID = document.getElementById('buttonHandleValidateID');
    buttonValidateID.style.display = 'block';
    setQuestionCounter(questionCounter +1);



    // Reset le formulaire
    document.getElementById('formCheck').reset();

    // Affiche les questions et réponses
    if (counter < 9){
      setQuestionsList(quizzList[counter +1].question);
      setAnswersList(quizzList[counter +1].answers);
      setCounter(counter +1);
    } 
  }



  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">    
      <div className='questionCounter'>
        <p>Question n° {questionCounter} / 10</p>
        <progress max="10" value={questionCounter}> </progress>
      </div>
        {(counter < 9) ? (
        <div className="containerQuizzCounter">  
          <h2 className= "question">
            {questionsList} 
          </h2>
          <AnswersList answers={answersList} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/>
          <button className="buttonHandleNext" onClick={handleQuestion}>Next</button>
        </div>) : 
        <Results resultCounter={resultCounter}/>
        }
      </div>
    </section>
  );
}

export default Quizz;