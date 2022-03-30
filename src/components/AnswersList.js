import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ answers, quizzList, counter, resultCounter, setResultCounter, handleDisplayChrono}) {
  console.log(quizzList);
  let checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'><AnswersRadio handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/></div> : null}
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'><AnswersCheckbox handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/></div> : null}
      </section>
    ); 
  }

export default AnswersList;