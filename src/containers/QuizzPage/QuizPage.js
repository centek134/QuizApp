import React, { Component } from 'react';
import './QuizPage.css';
import Question from '../../components/Question/Question.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';
import Header from '../../components/Header/Header.js';





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
        category: [],
        questionsData: [],
        startQuiz: false,
        answers:new Array(10)
    }

    replaceHtmlEntities = (word) => {
       return word
       .replace(/&quot;/g,'"')
       .replace(/&#039;/g, "'")
       .replace(/&amp;/g,"&")
       .replace(/&rsque;/g,"'")
       .replace(/&oacute;/g, 'Ó');
        
    }

    fetchQuestions = (questionId) => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${questionId}&type=multiple`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            let questionInfo = [];
            for(let item of data.results){
                questionInfo.push({
                    question: this.replaceHtmlEntities(item.question),
                    answer: [
                        this.replaceHtmlEntities(item.correct_answer),
                        ...item.incorrect_answers.map(i => this.replaceHtmlEntities(i))
                    ]
                });
            };
            this.setState({
                questionsData: questionInfo,
                startQuiz: true
            });
        });
    };

    questionButtonHandler = (e,i) => {
        console.log(i,e.target.value)
        e.target.classList.toggle("active");
        let items = [...this.state.answers];
        items[i] = e.target.value;
        this.setState({answers:items});
        console.log(this.state.answers);
        
    }

    render = () =>{
        

        return(
            <div className = "QuizPage">
                <Header/>
                {
                    this.state.startQuiz? 
                    <main className = "questions-page">
                        {this.state.questionsData.map( (index,i) => {
                            return(
                                <Question
                                    key ={i}
                                    num = {i + 1}
                                    question = {index.question}
                                    ans = {index.answer}
                                    ans1 = {index.answer[0]}
                                    ans2 = {index.answer[1]}
                                    ans3 = {index.answer[2]}
                                    ans4 = {index.answer[3]}
                                    clicked = {(event) => this.questionButtonHandler(event, i)}
                                />
                            )
                        })}
                    </main>
                     :
                    <main className = 'grid'>
                        {this.state.category.map(index => {
                        return(
                        <div key = {index.id} className = "grid-item">
                            <CategoryCard categoryName = {index.name} click = {() => this.fetchQuestions(index.id)}/>
                        </div>
                        );
                        })}
                </main>
                }
                <button onClick = {() => this.setState({startQuiz: !this.state.startQuiz})}> fetch data test</button>
            </div>
        );
    };
};

export default QuizPage;