import React from 'react';
import AnswersListRow from './AnswersListRow';

function AnswersList({ answers, question }) {
  console.log(question);
  console.log(answers);
  
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const checkboxOrRadio = (question.multiple_correct_answers) ? 'checkbox' : 'radio';
  const [userAnswer, setUserAnswer] = React.useState('');
  const answerRows = answers.map(answerRow => <AnswersListRow 
                                                key={answerRow.id} 
                                                answer={answerRow} 
                                                checkboxOrRadio={checkboxOrRadio}
                                                // isChecked={isChecked}
                                                onAnswerId={handleAnswerId}/>);

  function handleAnswerId(answerId) {
    setUserAnswer(answerId);
  }
  
  // Fonction de controle des réponses
  function controle(event){
      
    event.preventDefault();

    console.log('Is user answer correct ? ' + String(userAnswer === question.correct_answer));


    // Disparaitre le bouton validate

    buttonValidateID.style.display = 'none';

  }


  return (
    <section className='containerReponse'>
        {/* Affichage plusieurs réponses possibles */}
        <div>
          <p>
            <em>{(question.multiple_correct_answers) ? 'Plusieurs réponses possibles' : '' }</em>
           </p>
        </div>

        {/* Affichage des réponses */}
        <form className="reponse" id="formCheck" type='submit' method='get' action='/'> {/* onChange={setCheck.bind()} */}
          {answerRows}
          <button id="buttonHandleValidateID" className="buttonHandleValidate" onClick={(event) => controle(event)}>Validate</button> {/* */}
      </form>
    </section>
  );

}


export default AnswersList;