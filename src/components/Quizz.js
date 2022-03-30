import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';



function Quizz({ quizzList }) {
  
 
  const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
  const [answersList, setAnswersList] = React.useState(quizzList[0].answers);
  const [counter, setCounter] = React.useState(0);
  
  function handleQuestion() {
    //réaffichage du bouton validate
    const buttonValidateID = document.getElementById('buttonHandleValidateID');
    buttonValidateID.style.display = 'block';

    // Reset le formulaire
    document.getElementById('formCheck').reset();

    // Affiche les questions et réponses
    if (counter < 10){
      setQuestionsList(quizzList[counter + 1].question);
      setAnswersList(quizzList[counter + 1].answers);
      setCounter(counter +1);
    } 
  }



  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">    
        {(counter <10)? (
        <div className="containerQuizzCounter">  
          <h2 className= "question">
            {questionsList} 
          </h2>
          <AnswersList answers={answersList} question={ quizzList[counter] } />
          <button className="buttonHandleNext" onClick={handleQuestion}>Next</button>
        </div>) : 
        <Results />
        }
      </div>
    </section>
  );
}

export default Quizz;