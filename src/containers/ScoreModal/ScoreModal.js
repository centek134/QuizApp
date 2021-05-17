import React from 'react';
import './ScoreModal.css';
const ScoreModal = (props) =>{

    let endText = '';
  
        if(props.completion === 100){
            endText = 'Excellent!'
        }
        else if(10 > props.completion && props.completion >= 8){
            endText = 'Well done!';
        }
        else if(8 > props.completion && props.completion >= 6){
            endText = 'Quite good!';
        }
        else if(6 > props.completion && props.completion >= 4){
            endText = 'Resonable score.';
        }
        else if( 4 > props.completion){
            endText = 'You should try again ;-;';
        };
    
    return(
        <div className = 'score-modal'>
            <div className = 'container'>
                <h2>{endText}</h2>
                <h3>Score: {props.completion} / 10</h3>
                <div className = 'flex-btns'>
                    <button onClick = {props.check}>Check answers</button>
                    <button onClick = {props.continue}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreModal;