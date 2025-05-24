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
    },
];

// Quiz Variables 
let currentQuestionIndex = 0; 
let score = 0; 
let answersDisabled = false; 

totalQuestionSpan.textContent = quizQuestions.length; 
maxScoreSpan.textContent = quizQuestions.length; 

startButton.addEventListener("click", startQuiz) 
restartButton.addEventListener("click", restartQuiz) 

function startQuiz() { 
    // reset variables 
    currentQuestionIndex = 0; 
    score = 0; 
    scoreSpan.textContent = score; 
    startScreen.classList.remove("active"); 
    quizScreen.classList.add("active");
    
    showQuestion(); 
}

function showQuestion() { 
    // reset variables 
    answersDisabled = false; 
    const currentQuestion = quizQuestions[currentQuestionIndex]; 
    currentQuestionSpan.textContent = currentQuestionIndex + 1; 

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100; 
    progressBar.style.width = progressPercent + "%"; 

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = ""; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text; 
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct; 

        button.addEventListener("click", selectAnswer);

        answerContainer.appendChild(button); 

    })
}

function selectAnswer(event) {
    if(answersDisabled) return; // optimizaton chech
    answersDisabled = true; 

    const selectedButton = event.target; 
    const isCorrect = selectedButton.dataset.correct === "true"; 

    Array.from(answerContainer.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        } else if (button === selectedButton){
            button.classList.add("incorrect")
        }
    }); 

    if(isCorrect) {
        score++; 
        scoreSpan.textContent = score; 
    }

    setTimeout(() => {
        currentQuestionIndex++; 
        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults(); 
        }
    }, 1000)

}

function showResults() { 
    quizScreen.classList.remove("active"); 
    resultScreen.classList.add("active"); 

    finalScoreSpan.textContent = score; 

    const percentage  = (score / quizQuestions.length) * 100; 

    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You are a genius!"
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff."
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep studying."
    }
    else {
        resultMessage.textContent = "You'll get 'em next time. Keep studying."
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active"); 
    startQuiz()
}