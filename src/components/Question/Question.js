import React from 'react';
import './Question.css';

const Question = (props) => {
    return(
        <article className = "question">
            <h3>Question number #1</h3>
            <h2>There is your question</h2>
            <div className = "btns">
                <button onClick = {(e) => console.log(e.target)}>Answer nr 1</button>
                <button onClick = {(e) => console.log(e.target)}>Answer nr 2</button>
                <button onClick = {(e) => console.log(e.target)}>Answer nr 3</button>
                <button onClick = {(e) => console.log(e.target)}>Answer nr 4</button>
            </div>
        </article>
    );
};

export default Question;