import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import axios from 'axios';
import { setNewQuizzList } from './model/QuizzList';


function App() {

  const [quizzList, setQuizzList] = React.useState([]);

  const getQuizz = () => {
    axios
      .get('https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8&limit=10')
      .then((response)=> response.data)
      .then((data) =>
        setQuizzList(setNewQuizzList(data)),
        );        
      document.getElementById('buttonBegin').remove();
  };

  // if (quizzList.length !== 0) {
  //   // console.log(quizzList[0].correct_answers['answer_a_correct']);
  //   if (typeof quizzList[0].multiple_correct_answers === 'string') {
  //     const newQuizzList = new QuizzList(quizzList);
  //     newQuizzList.setNewQuizzList();
  //     setQuizzList(newQuizzList.newquizzlist);
  //   }
  //   // console.log(newQuizzList.newquizzlist[0]);
  //   // console.log(newQuizzList.newquizzlist[0].answers[0]);
  //   // console.log(newQuizzList.newquizzlist[0].answers[0].correct_answer);
  // }
  

  return (
    <div className="App">
      <main>
        <h1 className="title">The mystère Quizz</h1>
      </main>
      <button className="quizzButton" onClick={getQuizz} id='buttonBegin'>Commencer le Quizz</button>
        {quizzList.length !== 0 ? <Quizz quizzList={quizzList}/> : null}
      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;