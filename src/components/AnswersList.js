import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({
  handleCorrection,
  correction,
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

    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'>
          <AnswersRadio 
          handleCorrection={handleCorrection} 
          correction={correction} 
          disable={disable} 
          handleDisable={handleDisable} 
          currentQuestion={ currentQuestion }
          handleDisplayChrono={handleDisplayChrono} 
          answers={answers}
          resultCounter={resultCounter} 
          setResultCounter={setResultCounter} 
          setResultCurrentQuestion={setResultCurrentQuestion} 
          resultCurrentQuestion={resultCurrentQuestion} 
          /> </div> : null}

        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'>
          <AnswersCheckbox 
          handleCorrection={handleCorrection} 
          correction={correction} 
          disable={disable} 
          handleDisable={handleDisable} 
          currentQuestion={ currentQuestion } 
          resultCounter={resultCounter} 
          handleDisplayChrono={handleDisplayChrono} 
          answers={answers}
          setResultCounter={setResultCounter} 
          setResultCurrentQuestion={setResultCurrentQuestion} 
          resultCurrentQuestion={resultCurrentQuestion}
          /> </div> : null}
      </section>
    ); 
  }

export default AnswersList;