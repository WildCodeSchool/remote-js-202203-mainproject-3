import React from 'react';

function AnswersListRow({ answer }){
  console.log(answer);
  return(
    <div>
      <div className="question">
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_c"/>
        <label className="custom-control-label lead">.</label>
      </div>
    </div>      
  );

}

export default AnswersListRow;
