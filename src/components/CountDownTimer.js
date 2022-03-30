import React from 'react';

const CountDownTimer = (props) => {

    return (
        <div id="count_downID" className="count_down">
            <p className="chrono">{`${props.secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
};

export default CountDownTimer;