import React from 'react';
import './App.css';
import Quizz from './components/Quizz';


function App() {
  return (
    <div className="App">
      <main>
        <h1 className="title">The mystère Quizz</h1>
      </main>
        <Quizz />
      <footer>
        <p>Créé par des développeurs au TOP</p>
      </footer>
    </div>
  );
}
export default App;