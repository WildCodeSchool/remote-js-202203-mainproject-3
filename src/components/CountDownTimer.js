import React from 'react';

const CountDownTimer = (props) => {

    return (
        <div className="count_down">
            <p className="chrono">{`${props.secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
};

export default CountDownTimer;