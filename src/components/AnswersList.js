import React from 'react';

// import AnswersListRow from './AnswersListRow';

function AnswersList({ answers, quizzList, counter }) {
  console.log(quizzList);

  const checkboxOrRadio = (quizzList[counter].multiple_correct_answers === 'true') ? 'checkbox' : 'radio';

  const [answerA, setAnswerA] = React.useState(false);
  const [answerB, setAnswerB] = React.useState(false);
  const [answerC, setAnswerC] = React.useState(false);
  const [answerD, setAnswerD] = React.useState(false);
  const [answerE, setAnswerE] = React.useState(false);
  const [answerF, setAnswerF] = React.useState(false);

  function controle(event){
    event.preventDefault();
    console.log('A user:' + answerA);
    console.log('A object:' + quizzList[counter].correct_answers.answer_a_correct);
    console.log('B user:' + answerB);
    console.log('B object:' + quizzList[counter].correct_answers.answer_b_correct);
    console.log('C user:' + answerC);
    console.log('C object:' + quizzList[counter].correct_answers.answer_c_correct);
    console.log('D user:' + answerD);
    console.log('D object:' + quizzList[counter].correct_answers.answer_d_correct);
    console.log('E user:' + answerE);
    console.log('E object:' + quizzList[counter].correct_answers.answer_e_correct);
    console.log('F user:' + answerF);
    console.log('F object:' + quizzList[counter].correct_answers.answer_f_correct);
   
    const tabAnswersUser = [answerA, answerB, answerC, answerD, answerE, answerF];
    const tabAnswers = [
      quizzList[counter].correct_answers.answer_a_correct,
      quizzList[counter].correct_answers.answer_b_correct,
      quizzList[counter].correct_answers.answer_c_correct,
      quizzList[counter].correct_answers.answer_d_correct,
      quizzList[counter].correct_answers.answer_e_correct,
      quizzList[counter].correct_answers.answer_f_correct];
      
      const resultTabAnswersUser = tabAnswersUser.map(answerUser => answerUser ? 'true' : 'false');
    
      if ( JSON.stringify(resultTabAnswersUser) == JSON.stringify(tabAnswers)){
        console.log('WIN');
      }else{
        console.log('LOSE');
      }

  }


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
            <input type={checkboxOrRadio} name="answers" id='answer_a' onChange={event => setAnswerA(event.target.checked)} />
            <label htmlFor="answer_a" >{answers.answer_a}</label>
          </div>

          <div className="listResponse">
            <input type={checkboxOrRadio} name="answers" id='answer_b' onChange={event => setAnswerB(event.target.checked)} />
            <label htmlFor="answer_b" >{answers.answer_b}</label>
          </div>

          {answers.answer_c ?
          <div className="listResponse">
            <input type={checkboxOrRadio} name="answers" id='answer_c'onChange={event => setAnswerC(event.target.checked)} />
            <label htmlFor="answer_c" >{answers.answer_c}</label>
          </div>: null}

          {answers.answer_d ?
          <div className="listResponse">
            <input type={checkboxOrRadio} name="answers" id='answer_d' onChange={event => setAnswerD(event.target.checked)} />
            <label htmlFor="answer_d" >{answers.answer_d}</label>
          </div>: null}

          {answers.answer_e ?
            <div className="listResponse">
              <input type={ checkboxOrRadio } name="answers" id='answer_e' onChange={event => setAnswerE(event.target.checked)} />
              <label htmlFor="answer_e" >{answers.answer_e}</label>
            </div>: null}
          
          {answers.answer_f ?
            <div className="listResponse">
              <input type={checkboxOrRadio} name="answers" id='answer_f' onChange={event => setAnswerF(event.target.checked)} />
              <label htmlFor="answer_f">{answers.answer_f}</label>
            </div>: null}
            <button className="buttonHandleNext" onClick={() => controle(event)}>Validate</button>
      </form>
    </section>
  );

}


export default AnswersList;