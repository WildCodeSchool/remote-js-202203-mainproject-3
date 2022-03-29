import React from 'react';



function Results({resultCounter}){




    return(
        <div>
            <h2 className="felicitation">Vous avez un score de {resultCounter} sur 10</h2>
            <button className = "buttonHome" type = "submit" onClick = {function () {window.location.reload();}}>Accueil</button>
        </div>
    );
}

export default Results;