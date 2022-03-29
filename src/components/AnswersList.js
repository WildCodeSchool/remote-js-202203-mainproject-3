import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ answers, quizzList, counter }) {
  console.log(quizzList);
  let checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'><AnswersRadio answers={answers} quizzList={ quizzList } counter={counter} /></div> : null}
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'><AnswersCheckbox answers={answers} quizzList={ quizzList } counter={counter} /></div> : null}
      </section>
    ); 
  }

export default AnswersList;