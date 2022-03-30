import React from 'react';

function ResultComment({resultCounter}){

    if (resultCounter <= 10 && resultCounter >= 8){
        return <h3>Félicitations, t&apos;es un crack</h3>;
    }
    else if (resultCounter < 8 && resultCounter >= 5){
        return <h3>Pas mal, continue comme ça</h3>;
    }
    else if (resultCounter < 5 && resultCounter >= 2){
        return <h3>Encore un peu de boulot !</h3>;
    }
    else if (resultCounter < 2 && resultCounter >= 0){
        return <h3>C&lsquo;est chaud là frère ...</h3>;
    }
    
}

export default ResultComment;