import React, { Component } from 'react';
import './QuizPage.css';
import Question from '../../components/Question/Question.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';





class QuizPage extends Component {


    DataFetch = () => {
        fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => console.log(data));git
    };



    render = () =>{
        return(
            <div className = "QuizPage">
                <Question/>
                <CategoryCard categoryName = {"Mithology artists"}/>
                <button onClick = {this.DataFetch}> fetch data test</button>
            </div>
        );
    };
};

export default QuizPage;