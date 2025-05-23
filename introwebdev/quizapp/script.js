// DOM Elements 
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen"); 
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress"); 

const quizQuestions = [
    {
        question: "What is the capital of France?", 
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrib", correct: false },
        ],

    },
    {
        question: "What number did LeBron James wear on the Miami Heat?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "23", correct: false }, 
            { text: "3", correct: false},
        ],
    },
    {
        question: "What number did Kevin Durant wear on the Brooklyn Nets?",
        answers: [
            { text: "7", correct: true },
            { text: "10", correct: false },
            { text: "35", correct: false }, 
            { text: "25", correct: false },
        ],
    }, 
    {
        
    }
]