import React, { Component } from 'react';
import './QuizPage.css';
import Question from '../../components/Question/Question.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';
import Header from '../../components/Header/Header.js';
import ScoreModal from '../ScoreModal/ScoreModal'


class QuizPage extends Component {


    componentDidMount = () => {
        fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => {
    
            let category = [];

            for(let item of data.trivia_categories){
                category.push(item);
            };
            this.setState({category : category});
        });
    };

    state ={
        category: [],
        questionsData: [],
        quizPoints:0,
        startQuiz: false,
        showModal:false,
        correctAnswers:[],
        userAnswers:new Array(10)
    };

    replaceHtmlEntities = (word) => {
       return word
       .replace(/&quot;/g,'"')
       .replace(/&#039;/g, "'")
       .replace(/&amp;/g,"&")
       .replace(/&rsque;/g,"'")
       .replace(/&oacute;/g, 'Ó')
       .replace(/&eacute;/g, "é");
    };

    fetchQuestions = (questionId) => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${questionId}&type=multiple`)
        .then(result => result.json())
        .then(data => {
            console.log('data' , data);

            let questionInfo = [];
            let goodAnswers = [];

            for(let item of data.results){
                questionInfo.push({
                    question: this.replaceHtmlEntities(item.question),
                    answer: [
                        this.replaceHtmlEntities(item.correct_answer),
                        ...item.incorrect_answers.map(i => this.replaceHtmlEntities(i))
                    ]
                });
                goodAnswers.push(this.replaceHtmlEntities(item.correct_answer));
            };
            
            questionInfo.map(item => {
                return this.shuffleArray(item.answer)
            });
            
            console.log('shuffled',questionInfo);
            this.setState({
                questionsData: questionInfo,
                correctAnswers:goodAnswers,
                startQuiz: true
            });
        });
    };

    shuffleArray = (array) => {
        for (let i = array.length - 1; i >= 0; i--) {
               const randomIndex = Math.floor(Math.random() * (i + 1));
               array.push(array[randomIndex]);
               array.splice(randomIndex, 1);
           };
        return array;
    };

    questionButtonHandler = (e,i) => {
        this.questionBtnClassHandler(e);
        let items = [...this.state.userAnswers];
        items[i] = e.target.value;
        this.setState({userAnswers:items});
    };

    questionBtnClassHandler = (e) => {
        let children = e.target.parentElement.childNodes;
        for(let child of children){
            child.classList.remove("active");
        };
        e.target.classList.add("active");
    };

    finishQuiz = () => {
        let points = 0;
        for(let i = 0; i<10; i++){
            if(this.state.correctAnswers[i] === this.state.userAnswers[i]){
                points++;
            };
        };
        this.setState({
            quizPoints: points,
            startQuiz:false,
            showModal:true
        });
    };

    render = () =>{
        
        return(
            <div className = "QuizPage">
                     {
                         this.state.showModal?
                         <ScoreModal completion = {this.state.quizPoints}/> :
                         null
                     }
                <Header/>
                {
                    this.state.startQuiz? 
                    <main className = "questions-page">
                        {this.state.questionsData.map((index,i) => {
                            return(
                                <Question
                                    key ={i}
                                    num = {i + 1}
                                    question = {index.question}
                                    ans = {index.answer}
                                    clicked = {(event) => this.questionButtonHandler(event, i)}
                                />
                            );
                        })}
                        <button className = "finish-btn" onClick = {() => this.finishQuiz()}>Finish</button>
                    </main>
                     :
                    <main className = 'grid-menu'>
                        {this.state.category.map(index => {
                            return(
                            <div key = {index.id} className = "grid-menu-item">
                                <CategoryCard categoryName = {index.name} click = {() => this.fetchQuestions(index.id)}/>
                            </div>
                            );
                        })}
                </main>
                }
            </div>
        );
    };
};

export default QuizPage;