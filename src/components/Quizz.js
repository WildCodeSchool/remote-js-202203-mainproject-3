import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';



function Quizz({ quizzList }) {
  
  
  const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
  const [answersList, setAnswersList] = React.useState(quizzList[0].answers);
  const [counter, setCounter] = React.useState(1);
  

  
  function handleQuestion() {
    if (counter < 10){
      setCounter(counter +1);
      setQuestionsList(quizzList[counter].question);
      setAnswersList(quizzList[counter].answers);
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
          <AnswersList answers={answersList} quizzList={ quizzList } counter={counter}/>
          <button className="buttonHandleNext" onClick={handleQuestion}>Next</button>
        </div>) : 
        <Results />
        }
      </div>
    </section>
  );
}

export default Quizz;