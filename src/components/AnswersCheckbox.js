import React from 'react';

function AnswersCheckbox({
  correction,
  handleCorrection,
  answers,
  resultCounter,
  currentQuestion, 
  setResultCounter,
  handleDisplayChrono,
  handleDisable,
  disable,
  setResultCurrentQuestion,
  resultCurrentQuestion,
}) {

    const buttonValidateID = document.getElementById('buttonHandleValidateID');
    const [checkedA, setCheckedA] = React.useState('false');
    const [checkedB, setCheckedB] = React.useState('false');
    const [checkedC, setCheckedC] = React.useState('false');
    const [checkedD, setCheckedD] = React.useState('false');
    const [checkedE, setCheckedE] = React.useState('false');
    const [checkedF, setCheckedF] = React.useState('false');

    const handleChangeA = () => {setCheckedA('true');};
    const handleChangeB = () => {setCheckedB('true');};
    const handleChangeC = () => {setCheckedC('true');};
    const handleChangeD = () => {setCheckedD('true');};
    const handleChangeE = () => {setCheckedE('true');};
    const handleChangeF = () => {setCheckedF('true');};

    //Stockage des réponses utilisateurs dans un tableau
    let tabAnswersUser = [checkedA, checkedB, checkedC, checkedD, checkedE, checkedF];
    
    function controle(event){
    handleDisplayChrono();
    handleDisable();
    event.preventDefault();

    // Disparaitre le bouton validate
    buttonValidateID.style.display = 'none';

    

    // //Stockage des réponses objet dans un tableau
    const tabAnswers = [
    currentQuestion.correct_answers.answer_a_correct,
    currentQuestion.correct_answers.answer_b_correct,
    currentQuestion.correct_answers.answer_c_correct,
    currentQuestion.correct_answers.answer_d_correct,
    currentQuestion.correct_answers.answer_e_correct,
    currentQuestion.correct_answers.answer_f_correct];

     // Comparaison des 2 tableaux
      if ( JSON.stringify(tabAnswersUser) == JSON.stringify(tabAnswers)){
        setResultCounter(resultCounter + 1);
        setResultCurrentQuestion('Bonne réponse 🥂');
        console.log('WIN');
      }else{
        console.log('LOSE');
        setResultCurrentQuestion('Mauvaise réponse 😭');
      }   
      handleCorrection();

    }
    

    return(    
    <div className='answersCheckbox'>

    {/* Affichage plusieurs réponses possibles */}
    <div className='container_current_question'>
      <p className='current_question'>
        <em>Plusieurs réponses possibles :</em>
       </p>
    </div>

    {/* Affichage des réponses */}
    <form className="reponse" id="formCheck" type='submit' onSubmit={(event) => controle(event)}>
      <div className = {correction[0]}>
        <input type="checkbox" className='inputcheck' name="answers" label='answer_a' value={checkedA} disabled={disable} onChange={handleChangeA}/>
        <label htmlFor="answer_a" >{answers.answer_a}</label>
      </div>

      <div className = {correction[1]}>
        <input type="checkbox" className='inputcheck' name="answers" label='answer_b' value={checkedB} disabled={disable} onChange={handleChangeB}/>
        <label htmlFor="answer_b" >{answers.answer_b}</label>
      </div>

      {answers.answer_c ?
      <div className = {correction[2]}>
        <input type="checkbox" className='inputcheck' name="answers" label='answer_c' value={checkedC} disabled={disable} onChange={handleChangeC}/>
        <label htmlFor="answer_c" >{answers.answer_c}</label>
      </div>: null}

      {answers.answer_d ?
      <div className = {correction[3]}>
        <input type="checkbox"className='inputcheck' name="answers" label='answer_d' value={checkedD} disabled={disable} onChange={handleChangeD}/>
        <label htmlFor="answer_d" >{answers.answer_d}</label>
      </div>: null}

      {answers.answer_e ?
        <div className = {correction[4]}>
          <input type="checkbox" className='inputcheck' name="answers" label='answer_e' value={checkedE} disabled={disable} onChange={handleChangeE}/>
          <label htmlFor="answer_e" >{answers.answer_e}</label>
        </div>: null}
      
      {answers.answer_f ?
        <div className = {correction[5]}>
          <input type="checkbox" className='inputcheck' name="answers" label='answer_f' value={checkedF} disabled={disable} onChange={handleChangeF}/>
          <label htmlFor="answer_f">{answers.answer_f}</label>
        </div>: null}
        <div className="containerButtonValidate">
          <button id="buttonHandleValidateID" className="buttonHandleValidate" disabled={tabAnswersUser.every(answer => answer == 'false') ? true : false}>Valider</button>
        </div>
  </form>
  {(resultCurrentQuestion === null)? null
   : <div className='container_current_question'>
      <p className='current_question'>{resultCurrentQuestion}</p>
    </div>
  }
</div>);
}
export default AnswersCheckbox;