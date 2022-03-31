import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ 
  answers, 
  currentQuestion, 
  resultCounter, 
  setResultCounter, 
  handleDisplayChrono, 
  handleDisable, 
  disable, 
  setResultCurrentQuestion, 
  resultCurrentQuestion}) {

  let checkboxOrRadio = (currentQuestion.multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

    
    console.log(currentQuestion);
    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'>
          <AnswersRadio 
          disable={disable} 
          handleDisable={handleDisable} 
          handleDisplayChrono={handleDisplayChrono} 
          answers={answers} 
          currentQuestion={ currentQuestion } 
          resultCounter={resultCounter} 
          setResultCounter={setResultCounter} 
          setResultCurrentQuestion={setResultCurrentQuestion} 
          resultCurrentQuestion={resultCurrentQuestion}/> </div> : null}
       
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'>
          <AnswersCheckbox 
          disable={disable} 
          handleDisable={handleDisable} 
          handleDisplayChrono={handleDisplayChrono} 
          answers={answers} 
          currentQuestion={ currentQuestion } 
          resultCounter={resultCounter} 
          setResultCounter={setResultCounter} 
          setResultCurrentQuestion={setResultCurrentQuestion} 
          resultCurrentQuestion={resultCurrentQuestion}/> </div> : null}
      </section>
    ); 
  }

export default AnswersList;