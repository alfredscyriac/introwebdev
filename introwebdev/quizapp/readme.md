# Quiz App Documentation + Things I learned 

## How this project works 
- In the HTML there are three seperate divs inside the main container with the id's: start-screen, quiz-screen, and result-screen. Ultimately these screens are the driver of this project. All 3 of these div's have the class "screen," however only the start-screen has the class "active." When a screen has the class active it is displayed in the browser because of the following line of CSS: `display: block;` and when the screen doesn't have the class of active it is hiden using the CSS: `display: none;`
- The flow of the application is as follows: when the application is launched the start screen is displayed by the default, users have a button that says start quiz. We keep track of when the user clicks the button using the following JS: `addEventListener("click", startQuiz)`. When the function startQuiz executes that main thing it does is it removes the active class from the start screen and adds the active class to the quiz screen. This achieved by the following JS: `startScreen.classList.remove("active")` and `quizScreen.classList.add("active")`. We know the user reaches the end of the quiz when the current question index reaches the length of the questions array, and when that happens we call a function called showResults. Show results is responsible for removing the active class from the quiz screen and adding the active screen to the result screen. Lastly, if the user hits the restart quiz button on the restart screen then the active class is removed from the result screen and then immediately after the startQuiz function is called which will take care of everything from the start.
- The quiz content is stored in an array called quiz questions. This array contains 5 objects and each object is a question on the quiz. Each question object has 2 things: 1. a string containing the question text 2. an array containing possible options for the question, the answers are also objects. Each answer object has 2 things: 1. a string containing the answer text 2. a boolean indicate whether that answer choice is right or wrong. Storing everything in array is useful for this project as it can be easily looper through.  
- All dynamic elements that are displayed (such as the score or current question index) get updated using the following JS: `scoreSpan.textContent = score`

## Major Takeaways: 
- If website is going to have multiple screens then create multiple divs, each div representing a screen. Make sure all screens share the same class but add active class to the screen that is to be displayed. 
- Nest all elements in the HTML that are dynamic inside of span tags, this way you can add an id to the span tag and change the content that is displated using `.textContent =` in JS. 
- In CSS use `display: none` to hide a screen
- In CSS use `display: block` to display a screen
- In CSS, to creat the illusion of a progress bar create a bar and a container for it and then utilize % to determine the width of the bar 
- In CSS, `box-sizing: border-box;` stops things such as padding to change the size of an element 
- In JS, use `.textContext = ` to update HTML dynamically 
- In JS, use `.addEventListener("click", functionName)` to call a function anytime a button is clicked 
- In JS, utilize `.classList.remove("")` and `.classList.add("")` to alter the classes assigned to an HTML elements 
- In JS, use `document.createElement("")` to create HTML elements from the JS
- In JS, use `document.getElementById("")` to access HTML elements from the JavaScript (for ease set these equal to constants in the javascript to make them easier to manipulate)