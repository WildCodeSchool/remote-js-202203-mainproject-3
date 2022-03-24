import React from 'react';

function AnswersListRow({ answer }){
  console.log(answer);
  return(
    <div>
      <div className="question">
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_c"/>
        <label className="custom-control-label lead">We use the operator '==' to test two objects are instanced from the same class and have same attributes and equal values.</label>
      </div>
    </div>      
  );

}

export default AnswersListRow;