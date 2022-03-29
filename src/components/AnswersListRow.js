import React from 'react';

function AnswersListRow({ answer, checkboxOrRadio }){
  console.log(answer);
  console.log(checkboxOrRadio);
  return(
    <div>
      <div className="listResponse">
        <input type={checkboxOrRadio} className='inputcheck' name="answers" id={answer.id} value='true'/>
        <label htmlFor={answer.id} >{answer.answer}</label>
      </div>
</div>      
  );

}

export default AnswersListRow;
