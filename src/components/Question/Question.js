import React from 'react';
import './Question.css';

const Question = (props) => {
    return(
        <article className = "question">
            <h3>Question number #{props.num}</h3>
            <h2>{props.question}</h2>
            <div className = "btns">
                <button onClick = {(e) => console.log(e.target)}>{props.ans1}</button>
                <button onClick = {(e) => console.log(e.target)}>{props.ans2}</button>
                <button onClick = {(e) => console.log(e.target)}>{props.ans3}</button>
                <button onClick = {(e) => console.log(e.target)}>{props.ans4}</button>
            </div>
        </article>
    );
};

export default Question;