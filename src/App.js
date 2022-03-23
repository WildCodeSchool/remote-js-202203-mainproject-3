import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import axios from 'axios';


function App() {

  const [quizzList, setQuizzList] = React.useState([]);


  const getQuizz = () => {
    axios
      .get('https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8&limit=10')
      .then((response)=> response.data)
      .then((data) =>
        setQuizzList(data[0]),
        );        
  };
  

  return (
    <div className="App">
      <main>
        <h1 className="title">The mystère Quizz</h1>
      </main>
      <button className="quizzButton"onClick={getQuizz}>Commencer le Quizz</button>
        <Quizz quizzList={quizzList}/>
      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;