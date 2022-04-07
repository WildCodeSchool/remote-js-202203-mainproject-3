import React from 'react';
import ResultComment from './ResultComment';
// import { BrowserRouter as Link } from 'react-router-dom';


function Results({resultCounter, counter, setQuizzList, quizzList }){

    

    function razQuizzList(){
        setQuizzList([]);
        console.log('quizzList dans la fonction' + JSON.stringify(quizzList));
    }
    // console.log('quizzList hors fonction ' + JSON.stringify(quizzList));
    return(
        <div>
            <h2 className="felicitation">Vous avez un score de {resultCounter} sur {counter}</h2>
            <ResultComment resultCounter={resultCounter} counter={counter}/>

            <Link to='/'/><button className="buttonHome" onClick={razQuizzList}>Accueil</button><Link />

        </div>
    );
}

export default Results;