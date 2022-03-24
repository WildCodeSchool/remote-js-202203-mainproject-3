import React from 'react';
// import AnswersListRow from './AnswersListRow';

function AnswersList({ answers, quizzList, counter }) {
  console.log(quizzList);
  console.log(counter);
  console.log(quizzList[counter].multiple_correct_answers);

  // {(quizzList[counter].correct_answers.answer_a_correct)}



  return (
    <section className='containerReponse'>
        {/* Affichage plusieurs réponses possibles */}
        <div>
          <p>
            <em>{(quizzList[counter].multiple_correct_answers === 'true') ? 'Plusieurs réponses possibles' : '' }</em>
           </p>
        </div>

        {/* Affichage des réponses */}
        <form className="reponse" type='submit' method='get' action='/'>
          <div className="listResponse">
            < input type = {(quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio'} onChange = {event.target.value} value = {(quizzList[counter].correct_answers.answer_a_correct)} name = "answers" className = "custom-control-input" id = 'answer_a' />
            <label htmlFor="answer_a" className="custom-control-label lead">{answers.answer_a}</label>
          </div>

          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_b'/>
            <label htmlFor="answer_b" className="custom-control-label lead">{answers.answer_b}</label>
          </div>

          {answers.answer_c ?
          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_c' value={(quizzList[counter].correct_answers.answer_c_correct)}/>
            <label htmlFor="answer_c" className="custom-control-label lead">{answers.answer_c}</label>
          </div>: null}

          {answers.answer_d ?
          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_d' value={(quizzList[counter].correct_answers.answer_d_correct)}/>
            <label htmlFor="answer_d" className="custom-control-label lead">{answers.answer_d}</label>
          </div>: null}

          {answers.answer_e ?
            <div className="listResponse">
              <input type={ (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_e' value={(quizzList[counter].correct_answers.answer_e_correct)}/>
              <label htmlFor="answer_e" className="custom-control-label lead">{answers.answer_e}</label>
            </div>: null}
          
          {answers.answer_f ?
            <div className="listResponse">
              <input type={ (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_f' value={(quizzList[counter].correct_answers.answer_f_correct)}/>
              <label htmlFor="answer_f" className="custom-control-label lead">{answers.answer_f}</label>
            </div>: null}
            {/* <button type='submit'>Valider</button> */}
      </form>
    </section>
  );

}


export default AnswersList;