import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import { FiltersApi } from './components/FiltersApi';
import axios from 'axios';



function App() {

  const urlBase = 'https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8';
  const currentFilters = {difficulty: '', category: '', limit: 10, tags: ''};
  const [filtersApi, setFiltersApi]  = React.useState(currentFilters);
  const [urlQuizApi, setUrlQuizApi]  = React.useState(urlBase);

  console.log(urlQuizApi);

  const [quizzList, setQuizzList] = React.useState([]);

  function handleFiltersApi(filtersApi) {
    setFiltersApi(filtersApi);
    console.log(filtersApi);
    console.log(setFiltersUrl(filtersApi));
  }

  function setFiltersUrl (filtersApi) {
    let filters = '&limit=' + filtersApi.limit;
    filtersApi.difficulty && filtersApi.difficulty !== 'any' ? filters += '&difficulty=' + filtersApi.difficulty : null;
    filtersApi.category && filtersApi.category !== 'any' ? filters += '&category=' + filtersApi.category : '';
    filtersApi.tags !== '' ? filters += '&tags=' + filtersApi.tags : '';
    return filters;
  }

  
  const getQuizz = () => {
    setUrlQuizApi(urlBase + setFiltersUrl(filtersApi));
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

      {urlQuizApi === urlBase ?
        <FiltersApi filtersApi={filtersApi} onChangeFilters={handleFiltersApi}/> : null}

      <button className="quizzButton" onClick= {getQuizz} id='buttonBegin'>Commencer le Quizz</button>
        {quizzList.length !== 0 ? <Quizz quizzList={quizzList}/> : null}

      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;