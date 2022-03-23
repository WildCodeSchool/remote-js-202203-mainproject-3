import React from 'react';
import AnswersList from './AnswersList';



function Quizz({ quizzList }) {
  

  // const answers = quizzList.answers;
  // console.log(quizzList);
  // console.log(answers);
  // console.log(answers);

  // function answer2(){
  //   // for (let answer in answers) {
  //     //   console.log(`${answers[answer]}`);
  //   }return (console.log('npoihzrs'));
    
  // }

  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">
        <div>(Compteur)</div>
        <h2 className= "question">{quizzList.question}</h2>
        {/* <p>{answers.map(answer => answer.answers)}</p> */}
        {/* <button onClick={answer2}>test</button> */}
      </div>
      <AnswersList />
      
    </section>
  );
}

export default Quizz;