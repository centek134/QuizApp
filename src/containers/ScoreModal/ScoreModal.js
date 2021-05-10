import React from 'react';

const ScoreModal = (props) =>{
    let endText = '';
    switch(props.completion){
        case 100:
            endText = 'Excellent!'
            break;
        case (100 > props.completion >= 80):
            endText = 'Well done!';
            break;
        case  (80 > props.completion >= 60):
            endText = 'Quite good!';
            break;
        case (60 > props.completion >= 40):
            endText = 'Resonable score.'
            break;
        case ( 40 > props.completion):
            endText = 'You should try again ;-;';
            break;
        default:
            return;
    }
    return(
        <div>
            <h2>{endText}</h2>
            <h3>Score: {props.completion}% / 100%</h3>
        </div>
    );
};

export default ScoreModal;