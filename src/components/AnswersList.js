import React from 'react';
import AnswersRadio from './AnswersRadio';
import AnswersCheckbox from './AnswersCheckbox';

function AnswersList({ answers, quizzList, counter, resultCounter, setResultCounter, handleDisplayChrono, handleDisable, disable}) {
  // console.log(quizzList);
  let checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

  // FIXME : ne pas passer quizzlist en entier mais passer quizzList[counter] (ou même juste les propriétés nécessaires)
  // FIXME : de même, on ne devrait pas avoir à passer la propriété counter, ça n'a rien à voir avec la logique d'une réponse
    return (
      <section className='answers'>
        {checkboxOrRadio === 'radio' ? <div className='answersRadio'><AnswersRadio disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/></div> : null}
        {checkboxOrRadio === 'checkbox' ? <div className='answersCheckbox'><AnswersCheckbox disable={disable} handleDisable={handleDisable} handleDisplayChrono={handleDisplayChrono} answers={answers} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/></div> : null}
      </section>
    ); 
  }

export default AnswersList;