import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import { FiltersApi } from './components/FiltersApi';
import axios from 'axios';

function App() {

  const urlBase = 'https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8';
  const currentFilters = {difficulty: 'any', category: 'any', limit: 10, tags: ''};
  const [filtersApi, setFiltersApi]  = React.useState(currentFilters);

  const [quizzList, setQuizzList] = React.useState([]);

  function handleFiltersApi(filtersApi) {
    setFiltersApi(filtersApi);
  }

  function setFiltersUrl(filtersApi) {
    // #TODO: suppress +1 after correction to have 11 instead of 10
    let filters = '&limit=' + (filtersApi.limit + 1);
    filtersApi.difficulty !== 'any' ? filters += '&difficulty=' + filtersApi.difficulty : null;
    filtersApi.category !== 'any' ? filters += '&category=' + filtersApi.category : '';
    filtersApi.tags !== '' ? filters += '&tags=' + filtersApi.tags : '';
    return filters;
  }
  
  const getQuizz = () => {
    axios
      .get(urlBase + setFiltersUrl(filtersApi))
      .then((response)=> response.data)
      .then((data) =>
        setQuizzList(data),
        )
      .catch(error => {
        console.log(error.response);
        setQuizzList(error.response.status);
        setFiltersApi(currentFilters);
       });
  };

  console.log(quizzList);

  return (
    <div className="App">
      <main>
        <h1 className="title">The mystery Quizz</h1>
      </main>
      {quizzList.length === 0 ? 
        <div>
          <FiltersApi filtersApi={filtersApi} onChangeFilters={handleFiltersApi} />
          <button className="quizzButton" onClick={getQuizz} id='buttonBegin'>Commencer le Quizz</button>
        </div> : null}

      {quizzList === 404 || quizzList === 500 || quizzList === 429 ? 
        <div>
        <FiltersApi filtersApi={filtersApi} onChangeFilters={handleFiltersApi} />
        <div className="question containerQuizzCounter">
          Pas de questions trouvées, essayez avec d&lsquo;autres filtres </div>
        <button className="quizzButton" onClick={getQuizz} id='buttonBegin'>Commencer le Quizz</button>
      </div> : null}
        
      {quizzList.length > 0 ? <Quizz quizzList={quizzList} /> : null}

      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;
