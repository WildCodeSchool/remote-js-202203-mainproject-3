import React from 'react';
import AnswersList from './AnswersList';



function Quizz({ quizzList }) {
  

  // const answers = quizzList.answers;
  console.log(quizzList);
  // console.log(answers);
  // console.log(quizzList.length !== 0 ? quizzList.tags[0].name : quizzList.length);
  console.log(quizzList.tags[0].name);

  // function answer2(){
  //   // for (let answer in answers) {
  //     //   console.log(`${answers[answer]}`);
  //   }return (console.log('npoihzrs'));
    
  // }

  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">
        <div>(Compteur)</div>
        <h2 className= "question">{quizzList.question} 
        {quizzList.category}/{quizzList.tags[0].name}/{quizzList.difficulty}
        </h2>
        {/* <p>{quizzList.length !== 0 ? answers.map(answer => answer.answers) : null}</p> */}
        {/* <button onClick={answer2}>test</button> */}
        <AnswersList answers={quizzList.answers}/>
      </div>
      
    </section>
  );
}

export default Quizz;