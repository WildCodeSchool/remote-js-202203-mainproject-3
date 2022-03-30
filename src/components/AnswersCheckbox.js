import React, {useState} from 'react';

function AnswersCheckbox({
                             answers,
                             quizzList,
                             setResultCounter,
                             resultCounter,
                             counter,
                             handleDisplayChrono,
                             handleDisable,
                             disable
                         }) {

    // FIXED : proposition de garder le state dans un seul objet
    const [answerState, setAnswerState] = useState({});

    // FIXED : proposition de gérer le check au niveau du formulaire
    function handleCheck(event) {
        const newState = {...answerState};
        newState[event.target.value] = event.target.checked;
        console.log(newState);
        setAnswerState(newState);
    }

    function controle(event) {
        handleDisplayChrono();
        handleDisable();
        event.preventDefault();

        // Disparaitre le bouton validate
        // buttonValidateID.style.display = 'none';

        console.log(answerState);

        // FIXME : pas besoin de tout l'objet quizzlist ici, juste l'élément actuellement affiché
        const correctAnswers = {
            answer_a: quizzList[counter].correct_answers.answer_a_correct.toLowerCase() === 'true',
            answer_b: quizzList[counter].correct_answers.answer_b_correct.toLowerCase() === 'true',
            answer_c: quizzList[counter].correct_answers.answer_c_correct.toLowerCase() === 'true',
            answer_d: quizzList[counter].correct_answers.answer_d_correct.toLowerCase() === 'true',
            answer_e: quizzList[counter].correct_answers.answer_e_correct.toLowerCase() === 'true',
            answer_f: quizzList[counter].correct_answers.answer_f_correct.toLowerCase() === 'true'
        };

        // Vérification des bonnes réponses
        let win = true;
        for (const answerKey in correctAnswers) {
            const useAnswer = (answerState[answerKey] == null) ? false : answerState[answerKey];
            if (correctAnswers[answerKey] !== useAnswer) win = false;
        }

        if (win) {
            setResultCounter(resultCounter + 1);
            console.log('WIN');
        } else {
            console.log('LOSE');
        }
    }


    return (
        <div className='answersCheckbox'>

            {/* Affichage plusieurs réponses possibles */}
            <div>
                <p>
                    <em>Plusieurs réponses possibles :</em>
                </p>
            </div>

            {/* Affichage des réponses */}
            <form className="reponse" id="formCheck" onSubmit={event => controle(event)}
                  onChange={event => handleCheck(event)}>
                <div className="listResponse">
                    <input type="checkbox" className='inputcheck' name="answers" value="answer_a"
                           disabled={disable}/>
                    <label htmlFor="answer_a">{answers.answer_a}</label>
                </div>

                <div className="listResponse">
                    <input type="checkbox" className='inputcheck' name="answers" value="answer_b"
                           disabled={disable}/>
                    <label htmlFor="answer_b">{answers.answer_b}</label>
                </div>

                {answers.answer_c ?
                    <div className="listResponse">
                        <input type="checkbox" className='inputcheck' name="answers" value='answer_c'
                               disabled={disable}/>
                        <label htmlFor="answer_c">{answers.answer_c}</label>
                    </div> : null}

                {answers.answer_d ?
                    <div className="listResponse">
                        <input type="checkbox" className='inputcheck' name="answers" value='answer_d'
                               disabled={disable}/>
                        <label htmlFor="answer_d">{answers.answer_d}</label>
                    </div> : null}

                {answers.answer_e ?
                    <div className="listResponse">
                        <input type="checkbox" className='inputcheck' name="answers" value='answer_e'
                               disabled={disable}/>
                        <label htmlFor="answer_e">{answers.answer_e}</label>
                    </div> : null}

                {answers.answer_f ?
                    <div className="listResponse">
                        <input type="checkbox" className='inputcheck' name="answers" value='answer_f'
                               disabled={disable}/>
                        <label htmlFor="answer_f">{answers.answer_f}</label>
                    </div> : null}
                <div className="containerButtonValidate">
                    <button id="buttonHandleValidateID" type="submit" className="buttonHandleValidate">Validate</button>
                </div>
            </form>
        </div>);
}

export default AnswersCheckbox;