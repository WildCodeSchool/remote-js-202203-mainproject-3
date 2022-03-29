import React from 'react';

function AnswersListRow({ answer, checkboxOrRadio, onAnswerId }){
  console.log(answer);
  // console.log(checkboxOrRadio);
  
  function handleAnswerId (answerId) {
    onAnswerId(answerId);
  }

  return(
    <div>
      <div className="listResponse">
        <input 
          type={checkboxOrRadio} 
          className='inputcheck' 
          name="answers"
          id={answer.id} 
          value='true'
          // checked={(e) => isChecked(e.target.checked)}
          onClick={() => handleAnswerId(answer.id)}/>
        <label htmlFor={answer.id} >{answer.answer}</label>
      </div>
</div>      
  );

}

export default AnswersListRow;
