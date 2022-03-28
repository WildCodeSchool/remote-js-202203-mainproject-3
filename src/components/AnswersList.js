import React from 'react';
import AnswersListRow from './AnswersListRow';

function AnswersList({ answers, quizzList, counter }) {
  console.log(quizzList);

  // const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const checkboxOrRadio = (answers.multiple_correct_answers === 'true') ? 'checkbox' : 'radio';
  // const [check, setCheck] = React.useState('');
  const answerRows = answers.map(answerRow => <AnswersListRow key={answerRow.id} answer={answerRow} checkboxOrRadio={checkboxOrRadio} />);


  return (
    <section className='containerReponse'>
        {/* Affichage plusieurs réponses possibles */}
        <div>
          <p>
            <em>{(quizzList[counter].multiple_correct_answers) ? 'Plusieurs réponses possibles' : '' }</em>
           </p>
        </div>

        {/* Affichage des réponses */}
        <form className="reponse" id="formCheck" type='submit' method='get' action='/'>
          {answerRows}
          {/* <div className="listResponse">
            < input type = {(quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio'} name = "answers" className = "custom-control-input" id = 'answer_a' />
            <label htmlFor="answer_a" className="custom-control-label lead">{answers[0].answer}</label>
          </div>

          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_b'/>
            <label htmlFor="answer_b" className="custom-control-label lead">{answers[1].answer}</label>
          </div>

          {answers.length > 2 ?
          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_c' value={(answers[2].correct_answer)}/>
            <label htmlFor="answer_c" className="custom-control-label lead">{answers[2].answer}</label>
          </div>: null}

          {answers.length > 3 ?
          <div className="listResponse">
            <input type={ (quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_d' value={(answers[3].correct_answer)}/>
            <label htmlFor="answer_d" className="custom-control-label lead">{answers[3].answer}</label>
          </div>: null}

          {answers.length > 4 ?
            <div className="listResponse">
              <input type={ (quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_e' value={(answers[4].correct_answer)}/>
              <label htmlFor="answer_e" className="custom-control-label lead">{answers[4].answer}</label>
            </div>: null}
          
          {answers.length > 5 ?
            <div className="listResponse">
              <input type={ (quizzList[counter].multiple_correct_answers) ? 'checkbox' : 'radio' } name="answers" className="custom-control-input" id='answer_f' value={(answers[5].correct_answer)}/>
              <label htmlFor="answer_f" className="custom-control-label lead">{answers[5].answer}</label>
            </div>: null} */}
          <button id="buttonHandleValidateID" className="buttonHandleValidate">Validate</button> {/* onClick={() => controle(event)} */}
      </form>
    </section>
  );

}


export default AnswersList;