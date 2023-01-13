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
const seconds = Array(60)
let countdown = seconds.length;
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
console.log(seconds);
const startBtn = document.querySelector("#start");
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const time = document.getElementById('time');
startBtn.addEventListener('click', startGame);

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
   
   
    
  



console.log(questionDiv);
