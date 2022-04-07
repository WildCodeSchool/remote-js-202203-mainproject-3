import React from 'react';
import ResultComment from './ResultComment';

function Results({resultCounter, counter}){

    return(
        <div>
            <h2 className="felicitation">Vous avez un score de {resultCounter} sur {counter}</h2>
            <ResultComment resultCounter={resultCounter} counter={counter}/>
            <button className = "buttonHome" type = "submit" onClick = {function () {window.location.reload();}}>Accueil</button>
        </div>
    );
}

export default Results;