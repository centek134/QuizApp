import React, { Component } from 'react';
import './QuizPage.css';
import Question from '../../components/Question/Question.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';





class QuizPage extends Component {


    componentDidMount = () => {
        fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => {
    
            let category = [];

            for(let item of data.trivia_categories){
                category.push(item);
            }
            this.setState({category : category});
            console.log(data)
        });
    };

    state ={
        category: []
    };


    fetchQuestions = (questionId) => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${questionId}`)
        .then(result => result.json())
        .then(data => console.log(data))
    }


    render = () =>{
        return(
            <div className = "QuizPage">
                <Question/>
                <main className = 'grid'>
                    {this.state.category.map(index => {
                    return(
                    <div key = {index.id} className = "grid-item">
                        <CategoryCard categoryName = {index.name} click = {() => this.fetchQuestions(index.id)}/>
                    </div>
                    )
                    })}
                </main>
                <button onClick = {() => console.log(this.state.category)}> fetch data test</button>
            </div>
        );
    };
};

export default QuizPage;