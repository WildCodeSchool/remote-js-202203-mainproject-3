import React from 'react';

function AnswersCheckbox({ answers, quizzList, counter, resultCounter, setResultCounter, handleDisplayChrono }){
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
    
    function controle(event){
    handleDisplayChrono();
    event.preventDefault();

    // Disparaitre le bouton validate
    buttonValidateID.style.display = 'none';

    //Stockage des réponses utilisateurs dans un tableau
    const tabAnswersUser = [checkedA, checkedB, checkedC, checkedD, checkedE, checkedF];

    //Stockage des réponses objet dans un tableau
    const tabAnswers = [
    quizzList[counter].correct_answers.answer_a_correct,
    quizzList[counter].correct_answers.answer_b_correct,
    quizzList[counter].correct_answers.answer_c_correct,
    quizzList[counter].correct_answers.answer_d_correct,
    quizzList[counter].correct_answers.answer_e_correct,
    quizzList[counter].correct_answers.answer_f_correct];

     // Comparaison des 2 tableaux
      if ( JSON.stringify(tabAnswersUser) == JSON.stringify(tabAnswers)){
        setResultCounter(resultCounter + 1);
        console.log('WIN');
      }else{
        console.log('LOSE');
      }   
    }
    

    return(    
    <div className='answersCheckbox'>

    {/* Affichage plusieurs réponses possibles */}
    <div>
      <p>
        <em>Plusieurs réponses possibles :</em>
       </p>
    </div>

    {/* Affichage des réponses */}
    <form className="reponse" id="formCheck" type='submit' method='get' action='/'>
      <div className="listResponse">
        <input type="checkbox" className='inputcheck' name="answers" label='answer_a' value={checkedA} onChange={handleChangeA}/>
        <label htmlFor="answer_a" >{answers.answer_a}</label>
      </div>

      <div className="listResponse">
        <input type="checkbox" className='inputcheck' name="answers" label='answer_b' value={checkedB} onChange={handleChangeB}/>
        <label htmlFor="answer_b" >{answers.answer_b}</label>
      </div>

      {answers.answer_c ?
      <div className="listResponse">
        <input type="checkbox" className='inputcheck' name="answers" label='answer_c' value={checkedC} onChange={handleChangeC}/>
        <label htmlFor="answer_c" >{answers.answer_c}</label>
      </div>: null}

      {answers.answer_d ?
      <div className="listResponse">
        <input type="checkbox"className='inputcheck' name="answers" label='answer_d' value={checkedD} onChange={handleChangeD}/>
        <label htmlFor="answer_d" >{answers.answer_d}</label>
      </div>: null}

      {answers.answer_e ?
        <div className="listResponse">
          <input type="checkbox" className='inputcheck' name="answers" label='answer_e' value={checkedE} onChange={handleChangeE}/>
          <label htmlFor="answer_e" >{answers.answer_e}</label>
        </div>: null}
      
      {answers.answer_f ?
        <div className="listResponse">
          <input type="checkbox" className='inputcheck' name="answers" label='answer_f' value={checkedF} onChange={handleChangeF}/>
          <label htmlFor="answer_f">{answers.answer_f}</label>
        </div>: null}
        <div className="containerButtonValidate">
          <button id="buttonHandleValidateID" className="buttonHandleValidate" onClick={(event) => controle(event)}>Validate</button>
        </div>
  </form>
</div>);
}
export default AnswersCheckbox;