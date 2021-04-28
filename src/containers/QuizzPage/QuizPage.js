import React, { Component } from 'react';
import './QuizPage.css';
import Question from '../../components/Question/Question.js';


class QuizPage extends Component {


    render = () =>{
        return(
            <div className = "QuizPage">
                <Question/>
            </div>
        );
    };
};

export default QuizPage;