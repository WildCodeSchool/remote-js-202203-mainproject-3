import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import { GenerateURL } from './components/GenerateURL';
import axios from 'axios';



function App() {

  const urlBase = 'https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8&limit=11';
  const [urlQuizApi, setUrlQuizApi]  = React.useState(urlBase);
  console.log(urlQuizApi);

  const [quizzList, setQuizzList] = React.useState([]);

  const getQuizz = () => {
    axios
      .get(urlQuizApi)
      .then((response)=> response.data)
      .then((data) =>
        setQuizzList(data),
        );        
      document.getElementById('buttonBegin').remove();
  };
  

  return (
    <div className="App">
      <main>
        <h1 className="title">The mystère Quizz</h1>
      </main>

      <GenerateURL urlQuizApi={urlQuizApi}/>

      <button className="quizzButton" onClick= {getQuizz} id='buttonBegin'>Commencer le Quizz</button>
        {quizzList.length !== 0 ? <Quizz quizzList={quizzList}/> : null}

      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;