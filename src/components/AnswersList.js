import React from 'react';
import AnswersListRow from './AnswersListRow';

function AnswersList({ answers, quizzList, counter }) {
  console.log(quizzList);
  // console.log(buttonValidateID);
  
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const checkboxOrRadio = (answers.multiple_correct_answers) ? 'checkbox' : 'radio';
  const [check, setCheck] = React.useState('');
  const answerRows = answers.map(answerRow => <AnswersListRow key={answerRow.id} answer={answerRow} checkboxOrRadio={checkboxOrRadio} />);

  
  // Fonction de controle des réponses
  function controle(event){
    // Initialisation des variables
    // let answerA= 'false';
    // let answerB= 'false';
    // let answerC= 'false';
    // let answerD= 'false';
    // let answerE= 'false';
    // let answerF= 'false';
    
    event.preventDefault();

    // Disparaitre le bouton validate

    buttonValidateID.style.display = 'none';

    // Affectation de la value 'true' suivant la réponse
  //   setCheck(event.target.value);
  //   switch(check.target.id){
  //     case 'answer_a' : answerA = 'true';
  //       break;
  //     case 'answer_b' : answerB ='true';
  //       break;
  //     case 'answer_c' : answerC ='true';
  //       break;
  //     case 'answer_d' : answerD ='true';
  //       break;
  //     case 'answer_e' : answerE ='true';
  //       break;
  //     case 'answer_f' : answerF ='true';
  //       break;
  //   }
    
  //   //Stockage des réponses utilisateurs dans un tableau
  //   const tabAnswersUser = [answerA, answerB, answerC, answerD, answerE, answerF];
  //   //Stockage des réponses objet dans un tableau
  //   const tabAnswers = [
  //     quizzList[counter].correct_answers.answer_a_correct,
  //     quizzList[counter].correct_answers.answer_b_correct,
  //     quizzList[counter].correct_answers.answer_c_correct,
  //     quizzList[counter].correct_answers.answer_d_correct,
  //     quizzList[counter].correct_answers.answer_e_correct,
  //     quizzList[counter].correct_answers.answer_f_correct];

  //     // Comparaison des 2 tableaux
  //     if ( JSON.stringify(tabAnswersUser) == JSON.stringify(tabAnswers)){
  //       console.log('WIN');
  //     }else{
  //       console.log('LOSE');
  //     }
  console.log(answers[0].checkAnswer());
  console.log(answers[1].checkAnswer());
}


  return (
    <section className='containerReponse'>
        {/* Affichage plusieurs réponses possibles */}
        <div>
          <p>
            <em>{(quizzList[counter].multiple_correct_answers) ? 'Plusieurs réponses possibles' : '' }</em>
           </p>
        </div>

        {/* Affichage des réponses */}
        <form className="reponse" id="formCheck" type='submit' method='get' action='/' onChange={setCheck.bind()}>
          {answerRows}
          {/* <div className="listResponse">
            <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_a' value='true'/>
            <label htmlFor="answer_a" >{answers.answer_a}</label>
          </div>

          <div className="listResponse">
            <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_b' value='true' />
            <label htmlFor="answer_b" >{answers.answer_b}</label>
          </div>

          {answers.length > 2 ?
          <div className="listResponse">
            <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_c' value='true' />
            <label htmlFor="answer_c" >{answers.answer_c}</label>
          </div>: null}

          {answers.length > 3 ?
          <div className="listResponse">
            <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_d' value='true' />
            <label htmlFor="answer_d" >{answers.answer_d}</label>
          </div>: null}

          {answers.length > 4 ?
            <div className="listResponse">
              <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_e' value='true' />
              <label htmlFor="answer_e" >{answers.answer_e}</label>
            </div>: null}
          
          {answers.length > 5 ?
            <div className="listResponse">
              <input type={checkboxOrRadio} className='inputcheck' name="answers" id='answer_f' value='true' />
              <label htmlFor="answer_f">{answers.answer_f}</label>
            </div>: null} */}
          <button id="buttonHandleValidateID" className="buttonHandleValidate" onClick={() => controle(event)}>Validate</button> {/* */}
      </form>
    </section>
  );

}


export default AnswersList;