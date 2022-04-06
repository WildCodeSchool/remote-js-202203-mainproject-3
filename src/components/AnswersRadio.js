import React from 'react';

function AnswersRadio({  correction, handleCorrection, answers,  resultCounter, setResultCounter, handleDisplayChrono, handleDisable, disable, setResultCurrentQuestion, resultCurrentQuestion, tabAnswers }){
  
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const [check, setCheck] = React.useState('');
  
  console.log('correction in AnswerRadio: ' + correction);
    
    // Fonction de controle des réponses
    function controle(event){
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
      handleCorrection();
    }
    
    
    return(    
    <div className='answersRadio'>

    {/* Affichage des réponses */}
    <form className="reponse" id="formCheck" onSubmit={(event) => controle(event)} onChange={(event) => setCheck(event)}>
      <div className = {correction[0]}>
        <input type='radio' className='inputcheck' name="answers" id='answer_a' value='true' disabled={disable} required/>
        <label htmlFor="answer_a" >{answers.answer_a}</label>
      </div>

      < div className = {correction[1]}>
        <input type='radio' className='inputcheck' name="answers" id='answer_b' value='true'disabled={disable}/>
        <label htmlFor="answer_b" >{answers.answer_b}</label>
      </div>

      {answers.answer_c ?
      < div className = {correction[2]} >
        <input type='radio' className='inputcheck' name="answers" id='answer_c' value='true'disabled={disable}/>
        <label htmlFor="answer_c" >{answers.answer_c}</label>
      </div>: null}

      {answers.answer_d ?
      < div className = {correction[3]}>
        <input type='radio' className='inputcheck' name="answers" id='answer_d' value='true'disabled={disable}/>
        <label htmlFor="answer_d" >{answers.answer_d}</label>
      </div>: null}

      {answers.answer_e ?
        <div className={correction[4]}>
          <input type='radio' className='inputcheck' name="answers" id='answer_e' value='true'disabled={disable}/>
          <label htmlFor="answer_e" >{answers.answer_e}</label>
        </div>: null}
      
      {answers.answer_f ?
        <div className={correction[5]}>
          <input type='radio' className='inputcheck' name="answers" id='answer_f' value='true'disabled={disable}/>
          <label htmlFor="answer_f">{answers.answer_f}</label>
        </div>: null}
        <div className="containerButtonValidate">
          <button type="submit" id="buttonHandleValidateID" className="buttonHandleValidate">Validate</button>
        </div>
  </form>

  {(resultCurrentQuestion === null)? null
   : <div className='container_current_question'>
      <p className='current_question'>{resultCurrentQuestion}</p>
    </div>
  }
  </div>);
}
export default AnswersRadio;