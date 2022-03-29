import React from 'react';
import AnswersList from './AnswersList';
import Results from './Results';
import CountDownTimer from './CountDownTimer';



function Quizz({ quizzList }) {
  
  const buttonValidateID = document.getElementById('buttonHandleValidateID');
  const [questionsList, setQuestionsList] = React.useState(quizzList[0].question);
  const [answersList, setAnswersList] = React.useState(quizzList[0].answers);
  const [counter, setCounter] = React.useState(0);
  const [questionCounter, setQuestionCounter] = React.useState(1);
  const [resultCounter, setResultCounter] = React.useState(0);
  const [secs, setSecs] = React.useState(20);
  const [timerId, setTimerId] = React.useState();

  //Mise en place du compteur pour pouvoir décrémenté toutes les secondes
  React.useEffect(() => {
    let returnedTimerId = setInterval(() => setSecs((secs) => secs - 1), 1000);
    setTimerId(returnedTimerId);
  }, []);
  

  //Permet d'arreter le compteur lorsque celui ci arrive a 0    
  if (secs <=0){
    clearInterval(timerId);
  }

  //Fait disparaitre le bouton validé lorsque le compteur arrive a 0
  if(secs <= 0){
    buttonValidateID.style.display = 'none';
  }

  // Remet le compteur a 20 lorsque l'on appuis sur le bouton next  
  function handleReset() {
    setSecs(20);
  } 

  function handleQuestion() {
    //réaffichage du bouton validate
   
    buttonValidateID.style.display = 'block';
    setQuestionCounter(questionCounter +1);



    // Reset le formulaire
    document.getElementById('formCheck').reset();
    console.log(counter);
    // Affiche les questions et réponses
    if (counter < 9){
      setQuestionsList(quizzList[counter +1].question);
      setAnswersList(quizzList[counter +1].answers);
      setCounter(counter +1);
      handleReset();

    } 
  }

  return (
    <section className="containerQuizzGlobal">
      <div className="containerQuizz">
        {(counter < 9)? (
          <div className="containerQuizzShow">
            <div className="container_count">
              <div className='questionCounter'>
                <p>Question n° {questionCounter} / 10</p>
                <progress max="10" value={questionCounter}> </progress>
              </div>
              <CountDownTimer secs={secs}/> 
            </div>   
            <div className="containerQuizzCounter">  
              <h2 className= "question">
                {questionsList} 
              </h2>
              <AnswersList answers={answersList} quizzList={ quizzList } counter={counter} resultCounter={resultCounter} setResultCounter={setResultCounter}/>
              <button className="buttonHandleNext" onClick={handleQuestion}>Next</button>
            </div>
          </div>) : 
        <Results resultCounter={resultCounter}/>
        }
      </div>
    </section>
  );
}

export default Quizz;