import React from 'react';
import './Question.css';

const Question = (props) => {
    return(
        <article className = "question">
            <h3>Question number #{props.num}</h3>
            <h2>{props.question}</h2>
            <div className = "btns">
                {props.ans.map((answer, i) => <button value = {answer} key = {i} onClick = {props.clicked}>{answer}</button>)}
            </div>
        </article>
    );
};

export default Question;