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
        question: "What number does Jalen Brunson wear on the Knicks?", 
        answers: [
            { text: "17", correct: false },
            { text: "13", correct: false },
            { text: "11", correct: true },
            { text: "2", correct: false },
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
        question: "What number did Derrick Rose wear on the Chicago Bulls?",
        answers: [
            { text: "1", correct: true },
            { text: "25", correct: false },
            { text: "4", correct: false }, 
            { text: "0", correct: false },
        ],
    }, 
    {
        question: "What number did Carmelo Anthony wear on Team USA?",
        answers: [
            { text: "7", correct: false },
            { text: "00", correct: false },
            { text: "35", correct: false }, 
            { text: "15", correct: true },
        ],
    }
]