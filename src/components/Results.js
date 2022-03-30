import React from 'react';
import ResultComment from './ResultComment';

function Results({resultCounter}){

    return(
        <div>
            <h2 className="felicitation">Vous avez un score de {resultCounter} sur 10</h2>
            <ResultComment resultCounter={resultCounter}/>
            <button className = "buttonHome" type = "submit" onClick = {function () {window.location.reload();}}>Accueil</button>
        </div>
    );
}

export default Results;