import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ answers, quizzList, counter, resultCounter, setResultCounter, handleDisplayChrono, handleDisable, disable, setResultCurrentQuestion, resultCurrentQuestion}) {
  console.log(quizzList);
  let checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'><AnswersRadio disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter} setResultCurrentQuestion={setResultCurrentQuestion} resultCurrentQuestion={resultCurrentQuestion}/></div> : null}
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'><AnswersCheckbox disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/></div> : null}
      </section>
    ); 
  }

export default AnswersList;