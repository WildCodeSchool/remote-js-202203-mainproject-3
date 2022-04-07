import React from 'react';
import './App.css';
import Quizz from './components/Quizz';
import { FiltersApi } from './components/FiltersApi';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const urlBase = 'https://quizapi.io/api/v1/questions?apiKey=8P8azHvLpClCBemACzANfCUvptPakrF6D4SNHyX8';
  const currentFilters = {difficulty: 'any', category: 'any', limit: 10, tags: ''};
  const [filtersApi, setFiltersApi]  = React.useState(currentFilters);
  const [urlQuizApi, setUrlQuizApi]  = React.useState(urlBase);
  const [quizzList, setQuizzList] = React.useState([]);
  const lien = 


// function componentDidMount() {
//   setQuizzList([]);
// }

// React.useEffect(() => {setquizzList([])},quizzList);};



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
    setUrlQuizApi(urlBase + setFiltersUrl(filtersApi));
    axios
      .get(urlBase + setFiltersUrl(filtersApi))
      .then((response)=> response.data)
      .then((data) =>
        setQuizzList(data),
        );
  };



  return (
    
    <div className="App">

      <main>
        <h1 className="title">The mystère Quizz</h1>
      </main>
     
      
      {quizzList.length === 0 ? 
        <div><FiltersApi filtersApi={filtersApi} onChangeFilters={handleFiltersApi} />
            <Link to='/quizz'><button className="quizzButton" onClick={getQuizz} id='buttonBegin'>
              Commencer le Quizz
            </button></Link>
        </div> : null}
          

      {quizzList.length === 0 && urlQuizApi != urlBase ? 
        <div className="question containerQuizzCounter">
          Pas de questions trouvées, désélectionnez les filtres actuels et essayez avec d&lsquo;autres ou actualisez la page </div> : null}

      
        {quizzList.length > 0 ?
            <Quizz />
         : null}
        <Router>
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/quizz' element={<Quizz quizzList={quizzList} setQuizzList={setQuizzList} />}></Route>
          </Routes>
        </Router>
      

      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}

export default App;