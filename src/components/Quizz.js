import React from 'react';
import AnswersList from './AnswersList';

function Quizz() {
  return (
    <section>
      <div>
        <div>(Compteur)</div>
        <h2>(La question)</h2>
      </div>
      <AnswersList />
    </section>
  );
}

export default Quizz;