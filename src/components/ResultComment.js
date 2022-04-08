import React from 'react';

function ResultComment({resultCounter, counter}){

    let moyenne = (resultCounter / counter)*10;

    if (moyenne <= 10 && moyenne >= 8){
        return <h3>Félicitations, t&apos;es un crack</h3>;
    }
    else if (moyenne < 8 && moyenne >= 5){
        return <h3>Pas mal, continue comme ça</h3>;
    }
    else if (moyenne < 5 && moyenne >= 2){
        return <h3>Encore un peu de boulot !</h3>;
    }
    else if (moyenne < 2 && moyenne >= 0){
        return <h3>C&lsquo;est chaud là frère ...</h3>;
    }
    
}

export default ResultComment;