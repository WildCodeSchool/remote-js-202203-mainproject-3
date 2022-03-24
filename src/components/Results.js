import React from 'react';



function Results(){





    return(
        <div>
            <h2 className="felicitation">Félicitations vous avez fini le test</h2>
            <button className = "buttonHome" type = "submit" onClick = {function () {window.location.reload();}}>Accueil</button>
        </div>
    );
}

export default Results;