import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ handleCorrection, correction, answers, quizzList, counter, resultCounter, setResultCounter, handleDisplayChrono, handleDisable, disable, setResultCurrentQuestion, resultCurrentQuestion, tabAnswers}) {
  console.log(quizzList);
  let checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'><AnswersRadio handleCorrection={handleCorrection} correction={correction} disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter} setResultCurrentQuestion={setResultCurrentQuestion} resultCurrentQuestion={resultCurrentQuestion} tabAnswers={tabAnswers}/> </div> : null}
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'><AnswersCheckbox handleCorrection={handleCorrection} correction={correction} disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter} setResultCurrentQuestion={setResultCurrentQuestion} resultCurrentQuestion={resultCurrentQuestion} /> </div> : null}
      </section>
    ); 
  }

export default AnswersList;