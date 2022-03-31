import React from 'react';

function AnswersRadio({ 
  answers, 
  currentQuestion,  
  resultCounter, 
  setResultCounter, 
  handleDisplayChrono, 
  handleDisable, 
  disable, 
  setResultCurrentQuestion, 
  resultCurrentQuestion }){
    
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const [check, setCheck] = React.useState('');

    //Stockage des réponses objet dans un tableau
    const tabAnswers = [
      currentQuestion.correct_answers.answer_a_correct,
      currentQuestion.correct_answers.answer_b_correct,
      currentQuestion.correct_answers.answer_c_correct,
      currentQuestion.correct_answers.answer_d_correct,
      currentQuestion.correct_answers.answer_e_correct,
      currentQuestion.correct_answers.answer_f_correct];

      console.log(tabAnswers);
  
      const goodResponse = (tabAnswers.map( answer => answer === 'true' ? 'vert' : 'rouge'));
      console.log('goodResponse: ' + goodResponse);
  
  
    // Fonction de controle des réponses
    function controle(event){
      console.log(check);
      console.log('Check TARGET VALUE: ' + check.target.value);
      handleDisplayChrono();
      handleDisable();
      // Initialisation des variables
      let answerA= 'false';
      let answerB= 'false';
      let answerC= 'false';
      let answerD= 'false';
      let answerE= 'false';
      let answerF= 'false';
        
      event.preventDefault();

      // Disparaitre le bouton validate
      buttonValidateID.style.display = 'none';

      switch(check.target.id){
        case 'answer_a' : answerA ='true';
          break;
        case 'answer_b' : answerB ='true';
          break;
        case 'answer_c' : answerC ='true';
          break;
        case 'answer_d' : answerD ='true';
          break;
        case 'answer_e' : answerE ='true';
          break;
        case 'answer_f' : answerF ='true';
          break;
      }

      //Stockage des réponses utilisateurs dans un tableau
      const tabAnswersUser =[answerA, answerB, answerC, answerD, answerE, answerF];


        
        // Comparaison des 2 tableaux
        
         if ( JSON.stringify(tabAnswersUser) === JSON.stringify(tabAnswers)){
           setResultCounter(resultCounter + 1);
           console.log('WIN');
           setResultCurrentQuestion('Bonne réponse 🥂');
          }else{
           console.log('LOSE');
           setResultCurrentQuestion('Mauvaise réponse 😭');
         }
    }

    return(    
    <div className='answersRadio'>

    {/* Affichage des réponses */}
    <form className="reponse" id="formCheck" onSubmit={(event) => controle(event)} onChange={(event) => setCheck(event)}>
      <div className="listResponse">
        <input type='radio' className='inputcheck' name="answers" id='answer_a' value={currentQuestion.correct_answers.answer_a_correct} disabled={disable} required/>
        <label htmlFor="answer_a" >{answers.answer_a}</label>
      </div>

      <div className="listResponse">
        <input type='radio' className='inputcheck' name="answers" id='answer_b' value={currentQuestion.correct_answers.answer_b_correct} disabled={disable}/>
        <label htmlFor="answer_b" >{answers.answer_b}</label>
      </div>

      {answers.answer_c ?
      <div className="listResponse">
        <input type='radio' className='inputcheck' name="answers" id='answer_c' value={currentQuestion.correct_answers.answer_c_correct} disabled={disable}/>
        <label htmlFor="answer_c" >{answers.answer_c}</label>
      </div>: null}

      {answers.answer_d ?
      <div className="listResponse">
        <input type='radio' className='inputcheck' name="answers" id='answer_d' value={currentQuestion.correct_answers.answer_d_correct} disabled={disable}/>
        <label htmlFor="answer_d" >{answers.answer_d}</label>
      </div>: null}

      {answers.answer_e ?
        <div className="listResponse">
          <input type='radio' className='inputcheck' name="answers" id='answer_e' value={currentQuestion.correct_answers.answer_e_correct} disabled={disable}/>
          <label htmlFor="answer_e" >{answers.answer_e}</label>
        </div>: null}
      
      {answers.answer_f ?
        <div className="listResponse">
          <input type='radio' className='inputcheck' name="answers" id='answer_f' value={currentQuestion.correct_answers.answer_f_correct} disabled={disable}/>
          <label htmlFor="answer_f">{answers.answer_f}</label>
        </div>: null}
        <div className="containerButtonValidate">
          <button type="submit" id="buttonHandleValidateID" className="buttonHandleValidate" >Validate</button>
        </div>
  </form>
  <div className='container_current_question'>
    <p className='current_question'>{resultCurrentQuestion}</p>
    </div>
</div>);
}
export default AnswersRadio;