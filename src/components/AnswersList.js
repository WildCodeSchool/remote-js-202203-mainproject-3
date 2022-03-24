import React from 'react';
// import AnswersListRow from './AnswersListRow';

function AnswersList({ answers }) {
  console.log('Nous sommes dans AnswersList');
  console.log(answers);
  console.log(answers.answer_a);
  return (
    <div className="question">
      <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_a"/>
        <label className="custom-control-label lead">{answers.answer_a}</label>
      </div>
      <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_b"/>
        <label className="custom-control-label lead">{answers.answer_b}</label>
      </div>
      {answers.answer_c ?
      <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_c"/>
        <label className="custom-control-label lead">{answers.answer_c}</label>
      </div>: null}
      {answers.answer_d ?
      <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_d"/>
        <label className="custom-control-label lead">{answers.answer_d}</label>
      </div>: null}
      {answers.answer_e ?
        <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_e"/>
        <label className="custom-control-label lead">{answers.answer_e}</label>
      </div>: null}
      {answers.answer_f ?
        <div>
        <input type="checkbox" className="custom-control-input" name="634[]" value="answer_f"/>
        <label className="custom-control-label lead">{answers.answer_f}</label>
      </div>: null}
    </div>
  );
}

export default AnswersList;