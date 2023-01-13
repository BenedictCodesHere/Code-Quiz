// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score





// timer starts upon clicking start button

// add an eventListener to the start button
let score = 0;
const allAnswers = [2, 4, 2, 4, 3, ]
const allSelections = [];
let countdown = 60;
function countingDown() {
    if (countdown == 0) {
        clearInterval(myInterval);
        questionDiv.classList.add('hide');
        endScreen.classList.remove('hide');
    } else {
        countdown--;
        time.innerText = countdown;
    }   
}
const startBtn = document.querySelector("#start");
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const time = document.getElementById('time');
startBtn.addEventListener('click', startGame);
const choices = document.getElementById('choices');



const myInterval = function(){
    setInterval(countingDown, 1000);
}
console.log(startBtn);
console.log(questionDiv);

function startGame () {
    // THEN a timer starts and I am presented with a question
    // remove the .hide class from the questions div
    questionDiv.classList.remove('hide');
    startScreen.classList.add('hide');

    // the timer with id #time's innertext
    time.innerText = countdown;
    myInterval();
    
    
    
        // clearInterval(myInterval);
    }
    
        
    
    //if (countdown = 0){
      //  questionDiv.classList.add('hide');
        //endScreen.classList.remove('hide');
        

    // if timer reaches zero, hide #questions. Unhide #end-screen
   



    // when the event ONCLICK happens, update to next question:
        // update questionTitle.innerText
        // update choiceBtn

//         questionTitle.innerText = questions.one.ask;

// for let property in questions 
// choiceBtn1.innerText = questions.one.options[0];
// choiceBtn2.innerText = questions.one.options[1];
// choiceBtn3.innerText = questions.one.options[2];
// choiceBtn4.innerText = questions.one.options[3];
let index = 0;
const newQuestion = function () {
    index++;
 // call a function HERE
questionTitle.innerText = askArray[index];
choiceBtn1.innerText = optionsArray[index][0];
choiceBtn2.innerText = optionsArray[index][1];
choiceBtn3.innerText = optionsArray[index][2];
choiceBtn4.innerText = optionsArray[index][3];
}
  
// HERE this function should evaluate if answer = user input

// FIRST
    // Assign values 1 - 4 to the choice-btns
// SECOND
    // If user clicks button 1, return 1 e.target.getAttribute('id').charAt(id.length - 1)
// THIRD
    // evaluate answer which has been pulled from answer array


document.querySelector('#choices').addEventListener
('click', newQuestion)


console.log(choices.children);
console.log(questKeys);
console.log(questions["one"]);